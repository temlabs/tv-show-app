import episodes from "..//episodes.json";
import { episodeProps } from "../utils/Interfaces";
import generateEpisodeCode from "../utils/GenerateEpisodeCode";
import "../styles/episode.css";

function cleanSummary(summary: string): string {
  const regPattern = /<[^<>]*>/g;
  return summary.replace(regPattern, "");
}

export default function Episode(): JSX.Element {
  return (
    <>
      <section className="grid-container">
        {episodes.map((episode: episodeProps) => (
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
