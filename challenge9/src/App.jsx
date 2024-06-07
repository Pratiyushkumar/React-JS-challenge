import { useEffect, useState } from 'react';
import Foodcard from './Foodcard';
import FoodDetailModal from './FoodDetailModal';

const App = () => {
  const [receipieData, setReceipieData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    getFoodReceipieData();
  }, []);

  async function getFoodReceipieData() {
    const response = await fetch(
      'https://www.themealdb.com/api/json/v1/1/random.php'
    );
    const data = await response.json();
    setReceipieData(data.meals[0]);
  }

  const handleClick = () => {
    getFoodReceipieData();
  };

  const handleOpenDropDown = () => {
    console.log('function handleOpenDropDown');
    setIsOpen(true);
  };

  const handleCloseDropDown = () => {
    setIsOpen(false);
  };

  return (
    <main>
      <header>Food Receipe</header>
      <section className='hunger__check__container'>
        <h1>Are you hungry 😋</h1>
        <button onClick={handleClick}>Another Food 🍛</button>
      </section>
      {receipieData && (
        <Foodcard data={receipieData} openDropDown={handleOpenDropDown} />
      )}
      {isOpen && (
        <FoodDetailModal
          data={receipieData}
          closeDropDown={handleCloseDropDown}
        />
      )}
    </main>
  );
};

export default App;
