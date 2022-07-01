import axios from "axios";
import { MovieType } from "../../../components/interfaces";
import { server } from "../../../config";

const Movie = ({ movie }: { movie: MovieType }) => {
  console.log("detail : ", movie);

  return <div>{movie.title}</div>;
};

export async function getStaticProps(context: any) {
  const { id } = context.params;

  const res = await axios(
    `${server}/${id}?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );

  const movie = res.data;

  return {
    props: { movie },
  };
}

export async function getStaticPaths() {
  const res = await axios(
    `${server}/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );
  const movies = res.data.results;

  const ids = movies.map((m: MovieType) => m.id);
  const paths = ids.map((id: string) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
}

export default Movie;
