import deleteComments from "./tz";

describe("xaxa", () => {
  test("with double comments ", () => {
    const jsString = "hello/** * Run the database seeds.** @return void*/";
    expect(deleteComments(jsString)).toBe("hello");
  });
  test("with single comments", () => {
    const jsString = "hello// Run the database seeds. @return void";
    expect(deleteComments(jsString)).toBe("hello");
  });
  test("with text in middle", () => {
    const jsString = "/**asdasda */hello/**asdadsd*/";
    expect(deleteComments(jsString)).toBe("hello");
  });
});
