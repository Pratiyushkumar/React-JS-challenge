import { FC } from 'react';

interface ComponentProp {
  handleClick: () => void;
}

const BackgroundChanger: FC<ComponentProp> = ({ handleClick }) => {
  return (
    <button className='btn__color__changer' onClick={handleClick}>
      Change Color !!😎
    </button>
  );
};

export default BackgroundChanger;
