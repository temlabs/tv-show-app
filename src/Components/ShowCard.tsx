import { showProps } from "../utils/Interfaces";
import "../styles/show.css";

export default function ShowCard(showObject: showProps): JSX.Element {
  function showOnClickHandler(): void {
    if (showObject.id && showObject.onClickFunction) {
      showObject.onClickFunction(showObject.id.toString());
    }
  }

  return (
    <>
      <section
        className="showcard-section box-shadow "
        onClick={() => showOnClickHandler()}
      >
        <h2 className="title">{showObject.name}</h2>

        <img className="show-image" alt="" src={showObject.image.medium}></img>
        <p className="summary">{showObject.summary}</p>

        <div className="rating-div box-shadow">
          <p>Rating: {showObject.rating.average}</p>
          <p>Genres: {showObject.genres.join(" | ")}</p>
          <p>Status: {showObject.status}</p>
          <p>Runtime: {showObject.runtime} minutes</p>
        </div>
      </section>
    </>
  );
}
