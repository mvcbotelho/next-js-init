import Link from 'next/link';

const Home = () => {
  return (
    <>
      <div>Home</div>
      <Link href="/sobre">
        <a>Sobre</a>
      </Link>
    </>
  );
};

export default Home;
