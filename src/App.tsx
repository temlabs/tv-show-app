import Episode from "./Components/Episode";

function App(): JSX.Element {
  return (
    <>
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
