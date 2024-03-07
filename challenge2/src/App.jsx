import React from 'react';
import Card from './components/Card';
import { languages } from './constants/languages';

const App = () => {
  return (
    <main>
      <nav className='w-full h-16 bg-gradient-to-tr from-lavendar to-white shadow-gray-800 '>
        <h1 className='text-center p-4 text-2xl font-bold'>
          Programming Multiverse
        </h1>
      </nav>
      <section className=' flex justify-evenly flex-wrap p-14'>
        {languages.map((language) => (
          <React.Fragment key={language.id}>
            <Card
              title={language.languageName}
              startDate={language.yearOfStart}
              creator={language.Creator}
              useCase={language.useCase}
            />
          </React.Fragment>
        ))}
      </section>
    </main>
  );
};

export default App;
