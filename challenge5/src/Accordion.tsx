import { FC, useEffect, useState } from 'react';

interface accoridionProps {
  id: number;
  title: string;
  content: string;
  openAccordionId: number;
  setIdOfOpenAccordion: (id: number) => void;
}

const Accordion: FC<accoridionProps> = ({
  title,
  content,
  id,
  openAccordionId,
  setIdOfOpenAccordion,
}) => {
  const [show, setShow] = useState<boolean>(false);

  const toggle = () => {
    setShow((prev) => !prev);
    setIdOfOpenAccordion(id);
  };

  useEffect(() => {
    if (id === openAccordionId) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [openAccordionId, id]);

  return (
    <div className='accordion__item'>
      <div className='accordion__title'>
        <p>{title}</p>
        <div className='plus' onClick={toggle}>
          {show ? '-' : '+'}
        </div>
      </div>
      <div className={`accordion__info ${show ? 'open' : ' close'}`}>
        {content}
      </div>
    </div>
  );
};

export default Accordion;
