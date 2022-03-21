import filterEpisodesByName from "./FilterEpisodesByName";
import episodes from "../episodes.json";

test("function returns correct value for terms in title", () => {
  expect(filterEpisodesByName(episodes[0], "is Co")).toStrictEqual(true);
  expect(filterEpisodesByName(episodes[1], "queen")).toStrictEqual(false);
  expect(filterEpisodesByName(episodes[2], "Snow")).toStrictEqual(true);
});

test("function returns correct value for terms in summary", () => {
  expect(filterEpisodesByName(episodes[0], "Stark")).toStrictEqual(true);
  expect(filterEpisodesByName(episodes[1], "chocolate")).toStrictEqual(false);
  expect(filterEpisodesByName(episodes[2], "waterbottle")).toStrictEqual(false);
});

test("Is case-insensitive", () => {
  expect(filterEpisodesByName(episodes[0], "winter")).toStrictEqual(true);
  expect(filterEpisodesByName(episodes[0], "WINTER")).toStrictEqual(true);
  expect(filterEpisodesByName(episodes[1], "THE")).toStrictEqual(true);
});
