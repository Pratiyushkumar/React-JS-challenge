import PropTypes from 'prop-types';
import Table from './Table';

const FoodDetailModal = ({ data, closeDropDown }) => {
  const { strMeal, strMealThumb, strInstructions, strYoutube } = data;
  return (
    <dialog open onClose={closeDropDown}>
      <div className='modal__meal__container'>
        <button className='closeBtn' onClick={closeDropDown}>
          &times;
        </button>
        <h2 className='modal_meal_name'>{strMeal}</h2>
        <img className='modal_meal_img' src={strMealThumb} alt={strMeal} />

        <ul className='meal__tags__container'>
          {data.strCategory.split(',').map((ele) => (
            <i className='meal__tag' key={ele}>
              {ele}
            </i>
          ))}
        </ul>

        <Table data={data} />

        <h2 className='instruction'>Instruction 📜</h2>

        <p className='modal_instruction'>{strInstructions}</p>

        {strYoutube && (
          <a href={strYoutube} rel='noopener noreferrer' target='_blank'>
            YouTube link for {strMeal}
          </a>
        )}
      </div>
    </dialog>
  );
};

FoodDetailModal.propTypes = {
  data: PropTypes.shape({
    strMeal: PropTypes.string,
    strMealThumb: PropTypes.string,
    strInstructions: PropTypes.string,
    strYoutube: PropTypes.string,
    strCategory: PropTypes.string,
  }),
  closeDropDown: PropTypes.func.isRequired,
};

export default FoodDetailModal;
