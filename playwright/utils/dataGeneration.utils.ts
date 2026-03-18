import { faker } from "@faker-js/faker";

//* * Fake data generation for our tests */

export const getFakerData = {
  firstName: () => faker.person.firstName(),
  lastName: () => faker.person.lastName(),
  email: () => faker.internet.email(),
  cityName: () => faker.location.city(),
  country: () => faker.location.country(),
  zipCode: () => faker.location.zipCode(),
  state: () => faker.location.state(),
  streetName: () => faker.location.streetAddress(),
  phoneNumber: () => faker.phone.number(),
  word: () => faker.word.words(1),
  numberOfWords: (numberOfWords: number) => faker.lorem.words(numberOfWords),
  numberFromMin: (minNum: number) => faker.number.int({ min: minNum }),
  numberToMax: (maxNum: number) => faker.number.int({ max: maxNum }),
  numberInRange: (minNum: number, maxNum: number) => faker.number.int({ min: minNum, max: maxNum }),
};

export const generateUniqueNumber = () => `${Date.now()}${getFakerData.numberToMax(1_000_000)}`;
