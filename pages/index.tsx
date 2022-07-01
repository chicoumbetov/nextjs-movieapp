import type { NextPage } from "next";
import Hero from "../components/Hero";

const Home: NextPage = ({ movies }: any) => {
  console.log("movies : ", movies);

  return (
    <div>
      <Hero />
    </div>
  );
};

export async function getStaticProps() {
  const movies = [{ name: "Hello" }];

  return {
    props: { movies },
  };
}

export default Home;
