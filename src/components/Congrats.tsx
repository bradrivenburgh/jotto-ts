interface CongratsProps {
  success: boolean;
}
/**
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component (or null if 'success' prop is false)
 */
const Congrats: React.FC<CongratsProps> = ({ success }) => {
  return success ? (
    <div data-test='component-congrats' className='alert alert-success'>
      <span data-test='congrats-message'>
        Congratulations! You guessed the word!
      </span>
    </div>
  ) : (
    <div data-test='component-congrats'></div>
  );
};

export default Congrats;
