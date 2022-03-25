import { showProps } from "../utils/Interfaces";

export default function sortByName(showA: showProps, showB: showProps): number {
  if (showA.name > showB.name) {
    return 1;
  } else if (showA.name < showB.name) {
    return -1;
  } else {
    return 0;
  }
}
