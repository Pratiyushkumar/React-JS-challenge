import { FC, useEffect, useState } from 'react';
import BackgroundChanger from './BackgroundChanger';

const App: FC = () => {
  const [colorCode, setColorcode] = useState<number | null>(null);

  function randomColorGenerator() {
    let sixDigitNumber = '';
    for (let i = 0; i < 6; i++) {
      const randomNumber = Math.floor(Math.random() * 10);
      sixDigitNumber += randomNumber;
    }
    console.log(sixDigitNumber);
    return sixDigitNumber;
  }

  const handleClick = () => {
    const coloCodeGenerator = randomColorGenerator();
    setColorcode(Number(coloCodeGenerator));
  };

  useEffect(() => {
    document.body.style.backgroundColor = `#${colorCode}`;
  }, [colorCode]);

  return (
    <main className='main__container'>
      <BackgroundChanger handleClick={handleClick} />
    </main>
  );
};

export default App;
