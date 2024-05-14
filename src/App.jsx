import React, { useState } from 'react';
import './App.css';

function App() {
  const [password, setPassword] = useState('');
  const [includeNumbersCharacters, setIncludeNumbersCharacters] = useState(false);
  const [includeSmallCharacters, setIncludeSmallCharacters] = useState(false);
  const [includeCapitalCharacters, setIncludeCapitalCharacters] = useState(false);
  const [includeSpecialCharacters, setIncludeSpecialCharacters] = useState(false);

  const [passwordLength, setPasswordLength] = useState(); // Default password length

  const generatePassword = () => {
    const numbersCharacters = '0123456789';
    const smallCharacters = 'abcdefghijklmnopqrstuvwxyz';
    const capitalCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const specialCharacters = '!#$%&@';
    let characters = '';

    if (includeNumbersCharacters) characters += numbersCharacters;
    if (includeSmallCharacters) characters += smallCharacters;
    if (includeCapitalCharacters) characters += capitalCharacters;
    if (includeSpecialCharacters) characters += specialCharacters;

    let newPassword = '';

    for (let i = 0; i < passwordLength; i++) {
      const randomPassword = Math.floor(Math.random() * characters.length);
      newPassword += characters[randomPassword];
    }

    setPassword(newPassword);

    
  };

  return (
    <>
      <div className="password__container container">
        <div className="container__head">
          <h1>Password Generator</h1>

          <div className="sub__head">
            <div className="toggle__up">
              <h5>Advance</h5>
              <p>toggle</p>
            </div>

            <div className="toggle__down">
              <h5>Dark</h5>
              <p>toggle</p>
            </div>

          </div>

        </div>

        <div className="container__length">
          <div className="length__text">
            <div className="inside__length__text">
            <h6>Length</h6>
             <span>(Note: Max length is 30 Characters)</span>
            </div>
              <input 
                placeholder='Input your password length' type="number" className="dynamic__length" value={passwordLength} 
                onChange={(e) => setPasswordLength(e.target.value)} 
              />
          </div>

          <div className="length__range">
            <label htmlFor="range">
              <input 
                type="range" 
                name="range" 
                className='range' 
                id="range" 
                min={0} 
                max={30} 
                value={passwordLength} 
                onChange={(e) => setPasswordLength(e.target.value)} 
              />
            </label>
          </div>
        </div>
        <div className="preferences">
          <p className='twerk'>Twerk your password to suit your taste below</p>
          
          <div className="input__pref">
            <input onChange={() => setIncludeNumbersCharacters(!includeNumbersCharacters)} type="checkbox" name="checkbox" id="checkbox1" />
            <h5>Include Numbers</h5>
            <h4>(0-9)</h4>
          </div>

          <div className="input__pref">
            <input onChange={() => setIncludeSmallCharacters(!includeSmallCharacters)} type="checkbox" name="checkbox" id="checkbox2" />
            <h5>Include Small Letters</h5>
            <h4>(a-z)</h4>
          </div>

          <div className="input__pref">
            <input onChange={() => setIncludeCapitalCharacters(!includeCapitalCharacters)} type="checkbox" name="checkbox" id="checkbox3" />
            <h5>Include Capital Letters</h5>
            <h4>(A-Z)</h4>
          </div>

          <div className="input__pref">
            <input onChange={() => setIncludeSpecialCharacters(!includeSpecialCharacters)} type="checkbox" name="checkbox" id="checkbox4" />
            <h5>Include Special Characters</h5>
            <h4>(!@#$%&...)</h4>
          </div>

        </div>
        <div className="btn">
          <button className="btn__generate" onClick={generatePassword}
          >Generate Password</button>
          <button className="btn__code password">{password}</button>
        </div>
      </div>
    </>
  );
}

export default App;
