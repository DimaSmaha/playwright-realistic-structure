import { APIResponse, Page, expect } from "@playwright/test";
import { validateSchema } from "playwright-ajv-schema-validator";

class BaseApiController {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  logging = {
    logInputParams: (url: string, body?: object) => {
      console.log(`Request URL: ${url}`);
      if (body !== undefined) {
        console.log(`Input body: `, JSON.stringify(body));
      }
    },

    logResponseBody: async (resp: APIResponse) => {
      const body = await resp.json();
      console.log(`Response body: `, JSON.stringify(body));
    },
  };

  // Params example 'foo=bar&foo=baz'
  async get({
    url,
    params,
    auth,
    xApiKey,
    authType = "Bearer",
  }: {
    url: string;
    params?: string;
    auth?: string;
    xApiKey?: string;
    authType?: string;
  }) {
    const requestUrl = params ? `${url}?${new URLSearchParams(params).toString()}` : url;

    const response = await this.page.request.get(requestUrl, {
      headers: {
        Authorization: auth ? `${authType} ${auth}` : "",
        "x-api-key": xApiKey || "",
      },
    });

    return response;
  }

  async post({ url, body, auth, xApiKey }: { url: string; body?: object; auth?: string; xApiKey?: string }) {
    const response = await this.page.request.post(url, {
      data: body,
      headers: {
        "Content-Type": "application/json",
        Authorization: auth ? `Bearer ${auth}` : "",
        "x-api-key": xApiKey || "",
      },
    });

    return response;
  }

  async put({ url, body, auth, xApiKey }: { url: string; body?: object; auth?: string; xApiKey?: string }) {
    const response = await this.page.request.put(url, {
      data: body,
      headers: {
        "Content-Type": "application/json",
        Authorization: auth ? `Bearer ${auth}` : "",
        "x-api-key": xApiKey || "",
      },
    });

    return response;
  }

  async delete({ url, auth, xApiKey }: { url: string; auth?: string; xApiKey?: string }) {
    const response = await this.page.request.delete(url, {
      headers: {
        Authorization: auth ? `Bearer ${auth}` : "",
        "x-api-key": xApiKey || "",
      },
    });

    return response;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async getResponseBody(response: APIResponse): Promise<any> {
    return response.json();
  }

  async getResponseStatus(response: APIResponse): Promise<number> {
    return response.status();
  }

  assertions = {
    verifyResponse: async (resp: APIResponse, expectedStatus: number, expectedSchema?: object) => {
      await this.logging.logResponseBody(resp);
      expect(resp.status()).toBe(expectedStatus);
      if (expectedSchema !== undefined) {
        const body = await resp.json();
        await validateSchema(this.page, body, expectedSchema);
      }
    },

    propertyValueEquals: async (resp: APIResponse, property: string, value: string | number | boolean) => {
      const body = await resp.json();
      expect(body[property]).toEqual(value);
    },

    nestedPropertyValueEquals: (bodyProperty: string, value: string | number | boolean) => {
      expect(bodyProperty).toEqual(value);
    },

    nestedPropertyValueContains: (bodyProperty: string, value: string | number | boolean) => {
      expect(bodyProperty).toContain(value);
    },

    nestedPropertyIsNotEmpty: (bodyProperty: string) => {
      expect(bodyProperty).not.toEqual([]);
      expect(bodyProperty).not.toEqual("");
      expect(bodyProperty).not.toBeNull();
      expect(bodyProperty).not.toBeUndefined();
    },

    bodyContains: async (resp: APIResponse, value: string | number | boolean) => {
      const body = await resp.json();
      expect(JSON.stringify(body)).toContain(value);
    },

    bodyToHaveProperty: async (resp: APIResponse, value: string) => {
      const body = await resp.json();
      expect(body).toHaveProperty(value);
    },
  };
}

export default BaseApiController;
