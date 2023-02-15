const WWW = "1256";

export const getServerSideProps = async (context) => {
  console.log("gssp", context, WWW);
  return {
    props: {
      a: 1,
    },
  };
};

/**
 * @function Home
 */
const Home = () => {
  return <div>Hello world</div>;
};

export default Home;

console.log(">>", <Home />);
