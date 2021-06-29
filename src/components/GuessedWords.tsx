interface GuessedWordsProps {
  guessedWords: { guessedWord: string; letterMatchCount: number }[];
}

const GuessedWords: React.FC<GuessedWordsProps> = ({ guessedWords }) => {
  let contents =
    guessedWords.length === 0 ? (
      <span data-test='guess-instructions'>Try to guess the secret word!</span>
    ) : (
      ''
    );

  return <div data-test='component-guessed-words'>{contents}</div>;
};

export default GuessedWords;
