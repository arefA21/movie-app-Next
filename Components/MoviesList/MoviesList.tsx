import { IMovie } from "../../interfaces/IMovie";
import { useState, useEffect } from "react";
import Header from "../Header/Header";

interface IProps {
  movies: {
    Search: IMovie[];
  };
}

const MoviesList = ({ movies }: IProps) => {
  const [moviesList, setMoviesList] = useState(movies.Search || []);
  const [moviesTitle, setMoviesTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  function handleKeyDown(e: any) {
    if (e.keyCode === 13) search();
  }
  async function search(): Promise<void> {
    try {
      setLoading(true);
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=a68f6b88&s=${moviesTitle}`
      );
      const data = await res.json();
      console.log(data.res);

      if (data.res === "False") {
        setError(true);
        return;
      }
      setError(false);
      setMoviesList(data.Search);
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }
  if (error)
    return (
      <div>
        <Header
          search={search}
          movieTitle={moviesTitle}
          setMovieTitle={setMoviesTitle}
        />
        Movies was not found!!!
      </div>
    );
  if (loading) return <div>loading</div>;
  return (
    <>
      <Header
        search={search}
        moviesTitle={moviesTitle}
        setMoviesTitle={setMoviesTitle}
      />
      <div className="grid grid-cols-4  gap-4 ">
        {moviesList?.map((item) => (
          <div key={item.imdbID}>
            <div className="flex justify-center mb-10">
              <figure className="px-10 pt-10 ">
                <a href={`https://imdb.com/title/${item.imdbID}`}>
                  <img
                    src={item.Poster}
                    className="card cursor-pointer hover:shadow-md hover:shadow-accent-focus transition-all duration-100 hover:scale-95  h-80 w-60 card-compact lg:card-normal"
                  />
                </a>
              </figure>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MoviesList;
