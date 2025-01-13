import "./App.css";
import logo from "./logo.svg";

function App() {
  return (
    <div className="main-container">
      <header>
        <nav className="nav-bar">
          <div aria-label="title" className="title">
            <a href="/" className="nav-item">
              hackernews.dev
            </a>
          </div>
          <div className="nav-list">
            <a href="/categories" className="nav-item">
              categories
            </a>
            <a href="/articles" className="nav-item">
              articles
            </a>
            <a href="/about" className="nav-item">
              about
            </a>
          </div>
        </nav>
        <div className="header-welcome">
          <div className="header-logo">
            <img src={logo} className="logo" alt="logo" />
          </div>
          <div className="header-text">
            <h1>Writings for Hackers</h1>
            <h2>Curated collection of articles for busy developers</h2>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
