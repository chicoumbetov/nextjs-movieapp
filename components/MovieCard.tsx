import Image from "next/image";
import Link from "next/link";
import { MovieType } from "./interfaces";

const MovieCard = ({ movie }: { movie: MovieType }) => {
  console.log("movie", movie);

  return (
    <Link href={`/movie/${movie.id}`}>
      <div className="bg-white shadow-sm rounded-md cursor-pointer">
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          width={700}
          height={700}
          className="rounded-t-md"
          alt="poster image"
        />
        <div className="px-6 py-2">
          <div className="font-bold text-xl mb-1">{movie.title}</div>
          <p className="text-gray-700 text-base mb-1">
            {movie.release_date.toString()}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
