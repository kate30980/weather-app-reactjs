import "./App.css";

const api = {
  key: "0b4b084c05f00dbbb02cf63625716327",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  return (
    <div className="app warn">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search..." />
        </div>
      </main>
    </div>
  );
}

export default App;
