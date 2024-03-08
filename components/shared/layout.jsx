import Playground from '../core/playground';
import Navbar from './navbar';
import useMediaQuery from '@/hooks/use-media-query';

const Layout = () => {
  const { isTablet } = useMediaQuery();
  return (
    <>
      <section className={`${isTablet && 'h-screen'} bg-background`}>
        <Navbar />
        <Playground />
      </section>
      <section className=" dark:bg-background flex justify-center items-center border-t border-gray-200 dark:border-muted">
        <p className="font-semibold text-lg my-5 text-center">
          Made by
          <a
            className="text-blue-800 dark:text-blue-400"
            target="_blank"
            href="https://x.com/NerdyProgramme2"
          >
            @urdadx
          </a>
        </p>
      </section>
    </>
  );
};

export default Layout;
