import { isUrlValid } from "../src/client/js/urlChecker";
describe("Checking the function that makes sure the URL is valid using RegEx", () => {
    test("Testing the isUrlValid() function", () => {
        expect(isUrlValid).toBeDefined();
    })
});