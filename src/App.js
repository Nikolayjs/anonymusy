import AppRouter from './components/AppRouter';
import Navbar from './components/UI/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 min-h-screen">
        <div className="flex justify-center px-4 mx-auto max-w-screen-xl">
          <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <AppRouter />
          </article>
        </div>
      </main>
    </>
  );
}

export default App;
