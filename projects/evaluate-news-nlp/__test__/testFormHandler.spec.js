import { handleSubmit } from "../src/client/js/formHandler";

describe("Testing the functionality for the submission of the form", () => {
    test("Testing the handleSubmit() function", () => {
        expect(handleSubmit).toBeDefined();
    })
});