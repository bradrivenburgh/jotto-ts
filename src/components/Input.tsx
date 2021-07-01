import React from 'react';

interface InputProps {
  secretWord: string;
  success: boolean;
}

const Input: React.FC<InputProps> = ({ secretWord, success }) => {
  const [currentGuess, setCurrentGuess] = React.useState('');

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCurrentGuess(''); // Reset input

    // TODO: Update the guessedWords global state

    // TODO: Check against "secretWord" and optionally update "success"
    // global state
  };

  if (success) {
    return <div data-test='component-input' />;
  }

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
          onClick={(e) => onClick(e)}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Input;
