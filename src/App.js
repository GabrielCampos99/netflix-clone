import { useState, useEffect } from "react";
import axios from "axios";
import Movies from "./components/Movies";
import Hero from "./components/Hero";
import Header from "./components/Header";

function App() {
  const [originals, setOriginals] = useState([]);
  const [trending, setTrending] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

  const endpoints = {
    originals: "/discover/tv",
    trending: "/trending/all/week",
    now_playing: "/movie/now_playing",
    popular: "/movie/popular",
    top_rated: "/movie/top_rated",
    upcoming: "/movie/upcoming",
  };

  useEffect(() => {
    // Load Originals
    axios
      .get(`${process.env.REACT_APP_URL}${endpoints.originals}`, {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
        },
      })
      .then((res) => setOriginals(res.data.results));

    axios
      .get(`${process.env.REACT_APP_URL}${endpoints.trending}`, {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
        },
      })
      .then((res) => setTrending(res.data.results));

    /* axios
      .get(`${process.env.REACT_APP_URL}${endpoints.nowPlaying}`, {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
        },
      })
      .then((res) => setNowPlaying(res.data.results));

    axios
      .get(`${process.env.REACT_APP_URL}${endpoints.popular}`, {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
        },
      })
      .then((res) => setPopular(res.data.results));

    axios
      .get(`${process.env.REACT_APP_URL}${endpoints.top_rated}`, {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
        },
      })
      .then((res) => setTopRated(res.data.results));

    axios
      .get(`${process.env.REACT_APP_URL}${endpoints.upcoming}`, {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
        },
      })
      .then((res) => setUpcoming(res.data.results)); */
    // Get other categories with the same pattern here
  }, [
    endpoints.nowPlaying,
    endpoints.originals,
    endpoints.popular,
    endpoints.top_rated,
    endpoints.trending,
    endpoints.upcoming,
  ]);

  return (
    <div>
      <Header />
      <Hero movie={originals[Math.floor(Math.random() * originals.length)]} />

      <Movies title="Netflix originals" movies={originals} />

      <Movies title="Trending" movies={trending} />
    </div>
  );
}

export default App;
