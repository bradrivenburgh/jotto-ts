interface InputProps {
  secretWord: string;
}

const Input: React.FC<InputProps> = ({secretWord}) => {
  return <div data-test='component-input'></div>;
};

export default Input;
