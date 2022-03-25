import shows from "../shows.json";
import { episodeProps, showProps } from "../utils/Interfaces";
import generateEpisodeCode from "../utils/GenerateEpisodeCode";
import filterEpisodesByName from "../utils/FilterEpisodesByName";
import filterEpisodesById from "../utils/FilterEpisodesById";
import "../styles/episode.css";
import { useState, useEffect } from "react";
//import getShow from "../utils/GetShow";
import sortByName from "../utils/SortByName";
import Episode from "./Episode";

export default function Main(): JSX.Element {
  const [currentSearchTerm, setSearchTerm] = useState("");
  const [selectedEpisode, setSelectedEpisode] = useState(
    "Choose an episode..."
  );
  const [episodes, setEpisodes] = useState<episodeProps[]>([]);
  //const [show, setSelectedShow] = useState<showProps>();
  const [selectedShowId, setSelectedShowId] = useState<string>();

  useEffect(() => {
    if (selectedShowId) {
      fetch("https://api.tvmaze.com/shows/" + selectedShowId + "/episodes")
        .then((response) => response.json())
        .then((responseBody: episodeProps[]) => setEpisodes(responseBody));
    }
  }, [selectedShowId]);

  let filteredEpisodes = episodes.filter((episode) =>
    filterEpisodesByName(episode, currentSearchTerm)
  );

  filteredEpisodes = filteredEpisodes.filter((episode) =>
    filterEpisodesById(episode, selectedEpisode)
  );

  function handleChangeInSearchBar(newSearchTerm: string) {
    setSearchTerm(newSearchTerm);
  }

  function handleEpisodeSelection(newSelectedEpisodeId: string) {
    setSelectedEpisode(newSelectedEpisodeId);
  }

  function handleShowSelection(newSelectedShow: string | undefined) {
    if (newSelectedShow) {
      //setSelectedShow(getShow(newSelectedShow));
      setSelectedShowId(newSelectedShow);
    }
  }

  return (
    <>
      <section className="filter-container">
        <div>
          <select onChange={(e) => handleShowSelection(e.target.value)}>
            <option>Choose a show...</option>
            {shows
              .sort((a, b) => sortByName(a, b))
              .map((show: showProps) => (
                <option key={show.id} value={show.id}>
                  {show.name}{" "}
                </option>
              ))}
          </select>
          <select
            className="select-episode box-shadow"
            onChange={(e) => handleEpisodeSelection(e.target.value)}
          >
            <option>Choose an episode...</option>
            {episodes.map((episode: episodeProps) => (
              <option key={episode.id} value={episode.id}>
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
          <Episode
            key={episode.id}
            name={episode.name}
            id={episode.id}
            summary={episode.summary}
            image={episode.image}
            url={episode.url}
            season={episode.season}
            number={episode.number}
            type={episode.type}
            airdate={episode.airdate}
            airstamp={episode.airstamp}
            airtime={episode.airtime}
            _links={episode._links}
            runtime={episode.runtime}
          />
        ))}
      </section>
    </>
  );
}
