import BaseApiController from "../baseController.api";

export class TestController extends BaseApiController {
  async testGet() {
    return this.get({ url: "https://reqres.in/api/users", xApiKey: "reqres-free-v1" });
  }
  async testPost() {
    return this.post({
      url: "https://reqres.in/api/users",
      body: {
        name: "John Doe",
        job: "Developer",
      },
      xApiKey: "reqres-free-v1",
    });
  }
  async testPut() {
    return this.put({
      url: "https://reqres.in/api/users/2",
      body: {
        name: "Jane Doe",
        job: "Senior Developer",
      },
      xApiKey: "reqres-free-v1",
    });
  }

  async testDelete() {
    return this.delete({ url: "https://reqres.in/api/users/2", xApiKey: "reqres-free-v1" });
  }
}
