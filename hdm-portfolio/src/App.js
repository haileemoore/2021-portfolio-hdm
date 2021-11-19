import './App.css';

function HomePage() {
  return (
    <div className="homepage">
      {/* navbar */}
      <ul className="nav fixed justify-content-end">
        <li className="nav-item">
          <a className="nav-link" href="/home">HOME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/portfolio">PORTFOLIO</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">ABOUT</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contact">CONTACT</a>
        </li>
      </ul>
      <header className="intro">
        <h1>Denver-based UX Designer who's world revolves around user-centric design, and creative problem solving. </h1>
      </header>
    </div>
  );



}

export default HomePage;
