import { showProps } from "../utils/Interfaces";
import shows from "..//shows.json";

export default function getShow(showName: string): showProps | undefined {
  const matchingShow: showProps | undefined = shows.find(
    (show) => show.name === showName
  );
  if (matchingShow !== undefined) {
    return matchingShow;
  } else {
    return undefined;
  }
}
