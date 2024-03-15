import React, { useState } from 'react';
import './style/app.css';
import { catImages } from './constants';

const App = () => {
  const [catImageToDisplay, setcatImageToDisplay] = useState('');

  const handleClick = (index) => {
    setcatImageToDisplay(catImages[index]);
  };

  return (
    <main className='main__container'>
      <header className='header__container'>
        <nav className='nav__bar'>Image Gallery</nav>
      </header>
      <p>click on images!</p>
      <section className='image__list__container'>
        {catImages.map((image, index) => (
          <React.Fragment key={index}>
            <div className='image__card' onClick={() => handleClick(index)}>
              <img src={image} alt='catImage' />
            </div>
          </React.Fragment>
        ))}
      </section>
      {catImageToDisplay && (
        <section className='result__Container'>
          <div className='result__image__card'>
            <p className='result__text'>Selected Image</p>
            <img src={catImageToDisplay} alt='catImage' />
          </div>
        </section>
      )}
    </main>
  );
};

export default App;
