import Card from "../components/Card";
import { useEffect } from "react";
import { useFetch} from "../hooks/useFetch";

export const MovieList = ({ apiPath, title }) => {
  const { data: movies } = useFetch(apiPath);

  useEffect(() =>{
    document.title = `${title} / Cine Friend`;
  });

  return (
    <main>
      <section className="max-w-6xl mx-auto py-7 px-5 ">
        <div className="flex flex-wrap justify-start -mx-2 other:justify-evenly">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="px-2 pb-6 w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3"
            >
              {" "}
              <Card movie={movie} />{" "}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default MovieList;

