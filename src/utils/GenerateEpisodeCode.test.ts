import generateEpisodeCode from "./GenerateEpisodeCode";
import episodes from "..//episodes.json";

test("function returns an episode code in format S0{n}E0{n} when n is less than 10", () => {
  expect(generateEpisodeCode(episodes[0])).toBe("S01E01");
  expect(generateEpisodeCode(episodes[1])).toBe("S01E02");
  expect(generateEpisodeCode(episodes[2])).toBe("S01E03");
});

test("function returns an episode code in format S{nn}E{nn} when n is 10 or more", () => {
  expect(generateEpisodeCode(episodes[9])).toBe("S01E10");
});
