import { useState } from 'react';
import Accordion from './Accordion';
import accordionValues from './constant2/accordion2';

const App = () => {
  const [multiple, setMultiple] = useState<boolean>(false);
  const [openAccordionId, setOpenAccordionId] = useState<number | null>(0);

  const setIdOfOpenAccordion = (id: number) => {
    setOpenAccordionId(multiple ? null : id);
  };

  const handleMultiple = () => {
    if (multiple) {
      setOpenAccordionId(-1);
    }
    setMultiple((prev) => !prev);
  };

  return (
    <main>
      <header>Accordion</header>
      <section className='checkbox__section'>
        <label htmlFor=''>Is multiple open accordion allowed?</label>
        <input
          type='checkbox'
          name=''
          id=''
          value={String(multiple)}
          onChange={handleMultiple}
        />
      </section>
      <section className='accordion__container'>
        {accordionValues.map((ele) => (
          <Accordion
            key={ele.id}
            openAccordionId={openAccordionId as number | 0}
            setIdOfOpenAccordion={(id: number) => setIdOfOpenAccordion(id)}
            {...ele}
          />
        ))}
      </section>
    </main>
  );
};

export default App;
