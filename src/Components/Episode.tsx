import shows from "..//shows.json";
import { episodeProps, showProps } from "../utils/Interfaces";
import generateEpisodeCode from "../utils/GenerateEpisodeCode";
import filterEpisodesByName from "../utils/FilterEpisodesByName";
import "../styles/episode.css";
import { useState, useEffect } from "react";
import cleanSummary from "../utils/CleanSummary";

export default function Episode(): JSX.Element {
  const [currentSearchTerm, setSearchTerm] = useState("");
  const [selectedEpisode, setSelectedEpisode] = useState(
    "Choose an episode..."
  );
  const [episodes, setEpisodes] = useState<episodeProps[]>([]);
  const [show, setSelectedShow] = useState<showProps>();

  useEffect(() => {
    if (show?.name) {
      fetch(
        "https://api.tvmaze.com/shows/" +
          getShow(show.name)?.id.toString() +
          "/episodes"
      )
        .then((response) => response.json())
        .then((responseBody: episodeProps[]) => setEpisodes(responseBody));
    }
  }, [show]);

  function handleChangeInSearchBar(newSearchTerm: string) {
    setSearchTerm(newSearchTerm);
  }

  function handleEpisodeSelection(newSelectedEpisode: string) {
    setSelectedEpisode(newSelectedEpisode);
  }

  function handleShowSelection(newSelectedShow: string | undefined) {
    console.log(newSelectedShow);
    if (newSelectedShow) {
      setSelectedShow(getShow(newSelectedShow));
    }
  }

  function getShow(showName: string): showProps | undefined {
    const matchingShow: showProps | undefined = shows.find(
      (show) => show.name === showName
    );
    console.log(matchingShow?.id);
    if (matchingShow !== undefined) {
      return matchingShow;
    } else {
      return undefined;
    }
  }

  let filteredEpisodes = episodes.filter((episode) =>
    filterEpisodesByName(episode, currentSearchTerm)
  );

  filteredEpisodes = filteredEpisodes.filter((episode) =>
    filterEpisodesByName(episode, selectedEpisode.split(" - ")[1])
  );

  function sortByName(showA: showProps, showB: showProps) {
    if (showA.name > showB.name) {
      return 1;
    } else if (showA.name < showB.name) {
      return -1;
    } else {
      return 0;
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
                <option key={show.id} data-showid={show.id}>
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
