import { episodeProps } from "./Interfaces";

export default function filterEpisodesById(
  { id }: episodeProps,
  searchId: string
): boolean {
  if (isNaN(parseInt(searchId))) {
    return true;
  }
  return id.toString() === searchId;
}
