import QuoteGenerator from './component/QuoteGenerator';

const App = () => {
  return (
    <main>
      <header className='w-full h-16 bg-gradient-to-tr from-lavendar to-white shadow-gray-800'>
        <nav className='text-center p-4 text-2xl font-bold'>
          <h1>Quote Generator</h1>
        </nav>
      </header>
      <section>
        <QuoteGenerator />
      </section>
    </main>
  );
};

export default App;
