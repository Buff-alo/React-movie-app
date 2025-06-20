import "./css/App.css";
import MovieCard from "./components/MovieCard";
import Favourite from "./pages/Favourites";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./contexts/MovieContext";
function App() {
  return (
    <MovieProvider>
      <div className="app-container">
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favourites" element={<Favourite />} />
            <Route path="/movie/:id" element={<MovieCard />} />
          </Routes>
        </main>
      </div>
    </MovieProvider>
  );
}

export default App;
