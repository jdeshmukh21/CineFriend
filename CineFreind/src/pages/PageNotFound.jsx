import PageNotFoundImage from "../assets/pagenotfound.png";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { useEffect } from "react";

export const PageNotFound = () => {

  useEffect(() =>{
    document.title = `Page Not Found / Cine Friend`;
  });

  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white">
            404,Oops!
          </p>
          <div className="max-w-lg">
            <img
              className="rounded"
              src={PageNotFoundImage}
              alt="404 Page not found"
            ></img>
          </div>
        </div>
        <div className="flex justify-center my-4">
          <Link to="/">
            <Button>Back To CineFriend</Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default PageNotFound;

