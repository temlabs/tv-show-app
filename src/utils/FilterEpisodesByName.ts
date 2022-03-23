import { episodeProps } from "./Interfaces";

export default function filterEpisodesByName(
  { name, summary }: episodeProps,
  searchTerm: string
): boolean {
  const regPattern = RegExp(searchTerm, "i");
  const regexMatchesInName = name.match(regPattern);
  const regexMatchesInSummary = summary?.match(regPattern);
  return regexMatchesInName !== null || regexMatchesInSummary !== null
    ? true
    : false;
}
