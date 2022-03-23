import episodes from "..//simpsons.json";
import { episodeProps } from "../utils/Interfaces";
import generateEpisodeCode from "../utils/GenerateEpisodeCode";
import filterEpisodesByName from "../utils/FilterEpisodesByName";
import "../styles/episode.css";
import { useState } from "react";
import cleanSummary from "../utils/CleanSummary";

export default function Episode(): JSX.Element {
  const [currentSearchTerm, setSearchTerm] = useState("");
  const [selectedEpisode, setSelectedEpisode] = useState(
    "Choose an episode..."
  );

  function handleChangeInSearchBar(newSearchTerm: string) {
    setSearchTerm(newSearchTerm);
  }

  function handleEpisodeSelection(newSelectedEpisode: string) {
    setSelectedEpisode(newSelectedEpisode);
  }

  let filteredEpisodes = episodes.filter((episode) =>
    filterEpisodesByName(episode, currentSearchTerm)
  );

  filteredEpisodes = filteredEpisodes.filter((episode) =>
    filterEpisodesByName(episode, selectedEpisode.split(" - ")[1])
  );

  return (
    <>
      <section className="filter-container">
        <div>
          <select
            className="select-episode box-shadow"
            onChange={(e) => handleEpisodeSelection(e.target.value)}
          >
            <option>Choose an episode...</option>
            {episodes.map((episode: episodeProps) => (
              <option key={episode.id}>
                {generateEpisodeCode(episode).concat(" - " + episode.name)}
              </option>
            ))}
          </select>
          <input
            className="box-shadow"
            placeholder="Search for..."
            onChange={(e) => handleChangeInSearchBar(e.target.value)}
            value={currentSearchTerm}
          />
          <p id="display-count">
            {`Displaying ${filteredEpisodes.length} of ${episodes.length} episodes`}
          </p>
        </div>
      </section>
      <section className="grid-container">
        {filteredEpisodes.map((episode: episodeProps) => (
          <div key={episode.id} className="episode grid-item zoom box-shadow">
            <h2>{episode.name.concat(" " + generateEpisodeCode(episode))}</h2>
            <img src={episode.image?.medium} alt="" />
            <p>{cleanSummary(episode.summary)}</p>
          </div>
        ))}
      </section>
    </>
  );
}
