import { useState, useEffect } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import MovieList from "./components/MovieList";
import Login from "./components/Login";
import MaVieon from "./components/MaVieon";
import Premium from "./components/Premium";
import MovieSearch from "./components/MovieSearch";
import { MovieProvider } from "./context/MovieProvider";
import { Routes, Route } from "react-router-dom";
import Mobifone from "./components/Mobifone";

function App() {
  const [movie, setMovie] = useState([]);
  const [movieRate, setMovieRate] = useState([]);
  const [movieSearch, setMovieSearch] = useState([]);

  const handleSearch = async (searchVal) => {
    setMovieSearch([]);
    try {
      const url = `https://api.themoviedb.org/3/search/movie?query=${searchVal}&include_adult=false&language=vi&page=1`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };
      const searchMovie = await fetch(url, options);
      const data = await searchMovie.json();
      setMovieSearch(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const fetchMovie = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };
      const url1 =
        "https://api.themoviedb.org/3/movie/popular?language=vi&page=1";
      const url2 =
        "https://api.themoviedb.org/3/movie/top_rated?language=vi&page=1";

      const [res1, res2] = await Promise.all([
        fetch(url1, options),
        fetch(url2, options),
      ]);

      const data1 = await res1.json();
      const data2 = await res2.json();

      setMovie(data1.results);
      setMovieRate(data2.results);
    };

    fetchMovie();
  }, []);

  return (
    <>
      <MovieProvider>
        <Routes>
          <Route
            path="/"
            element={
              <div className="bg-black">
                <Header onSearch={handleSearch} />
                <Banner />
                {movieSearch.length > 0 ? (
                  <MovieSearch title={"Kết quả tìm kiếm"} data={movieSearch} />
                ) : (
                  <>
                    <MovieList title={"Phim Hay Mới Nhất"} data={movie} />
                    <MovieList title={"Phim Đề Cử"} data={movieRate} />
                  </>
                )}
              </div>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/ma-vieon" element={<MaVieon />} />
          <Route path="/mua-goi" element={<Premium />} />
          <Route path="/mobifone" element={<Mobifone />}/>
        </Routes>
      </MovieProvider>
    </>
  );
}

export default App;
