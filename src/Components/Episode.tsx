import episodes from "..//episodes.json";
import { episodeProps } from "../utils/Interfaces";
import generateEpisodeCode from "../utils/GenerateEpisodeCode";
import filterEpisodesByName from "../utils/FilterEpisodesByName";
import "../styles/episode.css";
import { useState } from "react";
import cleanSummary from "../utils/CleanSummary"


export default function Episode(): JSX.Element {
  const [currentSearchTerm, setSearchTerm] = useState("");

  function handleChangeInSearchBar(newSearchTerm: string) {
    setSearchTerm(newSearchTerm);
  }

  const filteredEpisodes = episodes.filter((episode) =>
    filterEpisodesByName(episode, currentSearchTerm)
  );

  return (
    <>
      <section>
        <div className="searchbar-container">
          <input
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
          <div key={episode.id} className="episode grid-item zoom">
            <h2>{episode.name.concat(" " + generateEpisodeCode(episode))}</h2>
            <img src={episode.image.medium} alt="" />
            <p>{cleanSummary(episode.summary)}</p>
          </div>
        ))}
      </section>
    </>
  );
}
