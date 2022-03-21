import { episodeProps } from "../utils/Interfaces";

export default function generateEpisodeCode({
  season: seasonNumber,
  number: episodeNumber,
}: episodeProps): string {
  const seasonNumberString: string = seasonNumber.toString();
  const episodeNumberString: string = episodeNumber.toString();
  const formattedSeasonString =
    seasonNumberString.length < 2
      ? String(seasonNumberString).padStart(2, "0")
      : seasonNumberString;
  const formattedEpisodeString =
    episodeNumberString.length < 2
      ? String(episodeNumberString).padStart(2, "0")
      : episodeNumberString;
  return `S${formattedSeasonString}E${formattedEpisodeString}`;
}
