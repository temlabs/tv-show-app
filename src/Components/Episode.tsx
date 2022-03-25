import { episodeProps } from "../utils/Interfaces";
import cleanSummary from "../utils/CleanSummary";
import generateEpisodeCode from "../utils/GenerateEpisodeCode";

export default function Episode(episodeObject: episodeProps): JSX.Element {
  return (
    <div key={episodeObject.id} className="episode grid-item zoom box-shadow">
      <h2>
        {episodeObject.name.concat(" " + generateEpisodeCode(episodeObject))}
      </h2>
      <img src={episodeObject.image?.medium} alt="" />
      <p>{cleanSummary(episodeObject.summary)}</p>
    </div>
  );
}
