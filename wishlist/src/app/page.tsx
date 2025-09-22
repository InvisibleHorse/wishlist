import Header from "./components/header";
import List from "./routes/list";

const Home = () => {
  return (
    <>
      <Header />
      <div className="grid grid-rows-[1fr_auto] items-center justify-items-center min-h-[calc(100vh-80px)] font-geist-sans">
        <main className="flex flex-col gap-8 w-full max-w-3xl">
          <List />
        </main>
      </div>
    </>
  );
};
export default Home;