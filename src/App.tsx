import Episode from "./Components/Main";
import "./styles/app.css";

function App(): JSX.Element {
  return (
    <>
      <header></header>
      <Episode />
      <footer>
        <p>
          <small>
            <em>
              data has been obtained from{" "}
              <a href="https://www.TVMaze.com">TVMaze.com</a>
            </em>
          </small>
        </p>
      </footer>
    </>
  );
}

export default App;
