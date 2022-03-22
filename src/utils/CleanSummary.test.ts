import cleanSummary from "./CleanSummary";

test("returns input strings without html tags", () => {
    expect(cleanSummary("is <p>Co")).toBe("is Co");
    expect(cleanSummary("is <p>Coming yada yad</br>")).toBe("is Coming yada yad");
    expect(cleanSummary("This is a test<p></br>!")).toBe("This is a test!");
  });

  test("doesn't modify strings without html tags", () => {
    expect(cleanSummary("is Coming")).toBe("is Coming");
    expect(cleanSummary("winter is Coming!")).toBe("winter is Coming!");
    expect(cleanSummary("who is Coming where?")).toBe("who is Coming where?");
  });