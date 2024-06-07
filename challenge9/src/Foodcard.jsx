import PropTypes from 'prop-types';

const Foodcard = ({ data, openDropDown }) => {
  return (
    <div className='foofCard__container'>
      <h1 className='meal__name'>{data.strMeal}</h1>
      <img className='meal__image' src={data.strMealThumb} alt={data.strMeal} />
      <ul className='meal__tags__container'>
        {data.strCategory.split(',').map((ele) => (
          <i className='meal__tag' key={ele}>
            {ele}
          </i>
        ))}
      </ul>
      <button className='detail__receipe__button' onClick={openDropDown}>
        detail recepie
      </button>
    </div>
  );
};

Foodcard.propTypes = {
  data: PropTypes.shape({
    strMeal: PropTypes.string,
    strMealThumb: PropTypes.string,
    strCategory: PropTypes.string,
  }).isRequired,
  openDropDown: PropTypes.func.isRequired,
};

export default Foodcard;
