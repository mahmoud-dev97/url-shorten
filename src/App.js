import "./App.scss";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Shorten from "./components/Shorten";
import Statistics from "./components/Statistics";

function App() {
  return (
    <>
      <div className="container">
        <Nav />
        <Main />
      </div>
      <div className="container-fluid">
        <div className="container">
          <Shorten />
          <Statistics />
        </div>
      </div>
      <Footer />

    </>
  );
}

export default App;
