import { postData } from "../src/client/js/postData";

describe("Testing the Post request functionality", () => {
    test("Testing postData's connection to the handleSubmit() function", () => {
        expect(postData).toBeDefined();
    });
});