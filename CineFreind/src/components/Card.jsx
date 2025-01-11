import { Link } from "react-router-dom";
import Backup from "../assets/backup.png";
const Card = ({movie}) => {
  const {id, original_title, overview, poster_path} = movie;
  const image = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : Backup;

  return (
    <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3">
      <Link to={`/movie/${id}`}>
        <img className="rounded-t-lg" src={image} alt="" />
      </Link>
      <div className="p-5">
        <Link to={`/movie/${id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {original_title}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-5">
          {overview}
        </p>
        
      </div>
    </div>
  );
};
// const Card = ({ movie }) => {
//   const { id, original_title, overview, poster_path } = movie;
//   const image = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : Backup;

//   return (
//     <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3">
//       <Link to={`/movie/${id}`}>
//         <img className="rounded-t-lg h-49 w-full object-cover" src={image} alt={original_title} />
//       </Link>
//       <div className="p-4">
//         <Link to={`/movie/${id}`}>
//           <h5 className="mb-1 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
//             {original_title}
//           </h5>
//         </Link>
//         <p className="text-sm font-normal text-gray-700 dark:text-gray-400 line-clamp-2">
//           {overview}
//         </p>
//       </div>
//     </div>
//   );
// };


export default Card;
