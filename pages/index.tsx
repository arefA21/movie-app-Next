import styles from "../styles/Home.module.css";
import { IMovie } from "../interfaces/IMovie";
import MoviesList from "../Components/MoviesList/MoviesList";

interface IProps {
  movies: {
    Search: IMovie[];
  };
  hasError: boolean;
}

const Home = ({ movies, hasError }: IProps) => {
  if (hasError) return <div>oooooooooooppppppppsssssssss !!!</div>;
  return (
    <div className="bg-[#1E2329] rounded-xl">
      <MoviesList movies={movies} />
    </div>
  );
};
export async function getServerSideProps() {
  try {
    const res = await fetch(
      " http://www.omdbapi.com/?apikey=a68f6b88&s=avengers"
    );
    

    const data = await res.json();
    console.log(data);
    

    return {
      props: {
        movies: data,
      },
    };
  } catch (e) {
    console.log(e);

    return {
      props: {
        hasError: true,
      },
    };
  }
}

export default Home;
