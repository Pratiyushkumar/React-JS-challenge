import { useState } from 'react';
import QRCode from 'react-qr-code';

const App = () => {
  const [userInput, setUserInput] = useState('');
  const [qrcodeValue, setQRCodeValue] = useState('');

  const handleQRCodeGeneration = () => {
    setQRCodeValue(userInput);
  };

  return (
    <main>
      <header>QR Code Generator</header>
      <section className='QR_input'>
        <input
          type='text'
          name=''
          id=''
          placeholder='Enter Text'
          value={userInput}
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
        />
        <button onClick={handleQRCodeGeneration}>Generate QR Code</button>
      </section>
      {qrcodeValue && (
        <section className='QR_output'>
          <QRCode
            size={256}
            style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
            value={qrcodeValue}
          />
        </section>
      )}
    </main>
  );
};

export default App;
