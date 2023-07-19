import "./styles.css";
import List from "./components/List";

export default function App() {
  return (
    <div className="App">
      <h1>Reach me</h1>
      <List />
      <Credits />
    </div>
  );
}

const Credits = () => {
  return (
    <footer className="credits">
      <h5>Credits</h5>
      <a
        href="https://www.flaticon.com/free-icons/twitter-logo"
        title="twitter logo icons"
      >
        Twitter logo icons created by Md Tanvirul Haque - Flaticon
      </a>
      <a
        href="https://www.flaticon.com/free-icons/linkedin"
        title="linkedin icons"
      >
        Linkedin icons created by riajulislam - Flaticon
      </a>
      <a href="https://www.flaticon.com/free-icons/github" title="github icons">
        Github icons created by Pixel perfect - Flaticon
      </a>
    </footer>
  );
};
