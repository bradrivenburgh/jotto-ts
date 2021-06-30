import {useState} from 'react';

interface InputProps {
  secretWord: string;
}

const Input: React.FC<InputProps> = ({ secretWord }) => {
  const [currentGuess, setCurrentGuess] = useState('');

  return (
    <div data-test='component-input'>
      <form className='form-inline'>
        <input
          data-test='input-box'
          className='mb-2 mx-sm-3'
          type='text'
          placeholder='enter guess'
          value={currentGuess}
          onChange={(e) => setCurrentGuess(e.target.value)}
        />
        <button data-test='submit-button' className='btn btn-primary mb-2'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Input;
