import Playground from '../core/playground';
import Navbar from './navbar';

const Layout = () => {
  return (
    <main className="w-[100vw] h-full bg-[#F7F7FA]">
      <Navbar />
      <Playground />
      <div className=" bg-white flex justify-center items-center">
        <p className="font-semibold text-lg my-5">
          Made by{' '}
          <a
            className="text-blue-800"
            target="_blank"
            href="https://x.com/NerdyProgramme2"
          >
            @urdadx
          </a>
        </p>
      </div>
    </main>
  );
};

export default Layout;
