import { handleSubmit } from "../src/client/js/formHandler";

decribe("Testing the functionality for the submission of the form", () => {
    test("Testing the handleSubmit() function", () => {
        expect(handleSubmit).toBeDefined();
    })
});