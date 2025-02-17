import "./page.css";

export default function Home() {
  return (
      <div className="main">
        <header className="header">
          <h1 className="title">Grounded</h1>
          <nav className="nav">
            <ul className="ul">
              <li className="menu-item">PDF</li>
              <li className="menu-item">Web-app</li>
              <li className="menu-item">Testcase</li>
              <li className="menu-item">SQL</li>
            </ul>
          </nav>
        </header>
        <div className="home-page">
          <div className="chat-container"></div>
          <input placeholder="Who is Mahesh Baabu" />
        </div>
      </div>
  );
}
