import PropTypes from 'prop-types';

const Card = ({ title, startDate, creator, useCase }) => {
  return (
    <div className='max-w-300 h-36 bg-cardBg p-4 border-solid border-0 border-cardBorderColor shadow-cardBoxShadow rounded-lg mb-5 transition-transform delay-.2 hover:translate-y-3 '>
      <h1 className='text-cardTitle font-bold'>{title}</h1>
      <p>Year of Start:{startDate}</p>
      <p>creator:{creator}</p>
      <p>Use Case: {useCase}</p>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  creator: PropTypes.string.isRequired,
  useCase: PropTypes.string.isRequired,
};

export default Card;
