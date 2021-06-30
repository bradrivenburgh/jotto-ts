import React, { useState } from 'react';

interface InputProps {
  secretWord: string;
}

const Input: React.FC<InputProps> = ({ secretWord }) => {
  const [currentGuess, setCurrentGuess] = useState('');

  const onClick = () => {
    setCurrentGuess(''); // Reset input

    // TODO: Update the guessedWords global state

    // TODO: Check against "secretWord" and optionally update "success"
    // global state
  };

  return (
    <div data-test='component-input'>
      <form data-test='form' className='form-inline'>
        <input
          data-test='input-box'
          className='mb-2 mx-sm-3'
          type='text'
          placeholder='enter guess'
          value={currentGuess}
          onChange={(e) => setCurrentGuess(e.target.value)}
        />
        <button
          data-test='submit-button'
          className='btn btn-primary mb-2'
          onClick={onClick}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Input;
