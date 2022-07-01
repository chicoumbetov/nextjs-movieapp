import axios from "axios";
import type { NextPage } from "next";
import Hero from "../components/Hero";
import { server } from "../config";

const Home: NextPage = ({ movies }: any) => {
  console.log("movies : ", movies);

  return (
    <div>
      <Hero />
    </div>
  );
};

export async function getStaticProps() {
  const res = await axios(
    `${server}/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );

  const movies = res.data;

  return {
    props: { movies },
  };
}

export default Home;
