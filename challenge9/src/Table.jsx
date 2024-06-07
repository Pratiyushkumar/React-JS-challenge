import PropTypes from 'prop-types';

const Table = ({ data }) => {
  const produceIngredientsAndMeasureArray = (ingredients) => {
    const ingredientsAndMeasureArray = [];
    for (let i = 1; i <= 40; i++) {
      const ingredient = ingredients[`strIngredient${i}`];
      const measure = ingredients[`strMeasure${i}`];
      if (ingredient && measure) {
        ingredientsAndMeasureArray.push({ ingredient, measure });
      }
    }
    console.log(ingredientsAndMeasureArray);
    return ingredientsAndMeasureArray;
  };

  return (
    <table className='recipe_table'>
      <thead>
        <tr>
          <th>No.</th>
          <th>Ingredient</th>
          <th>Measure</th>
        </tr>
      </thead>
      <tbody>
        {produceIngredientsAndMeasureArray(data).map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.ingredient}</td>
            <td>{item.measure}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Table;
