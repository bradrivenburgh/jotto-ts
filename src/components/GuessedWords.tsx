interface GuessedWordsProps {
  guessedWords: { guessedWord: string; letterMatchCount: number }[];
}

const GuessedWords: React.FC<GuessedWordsProps> = ({ guessedWords }) => {
  const guessedWordsRows = guessedWords.map((word, i) => (
    <tr data-test='guessed-word' key={i}>
      <td>{word.guessedWord}</td>
      <td>{word.letterMatchCount}</td>
    </tr>
  ));

  let contents =
    guessedWords.length === 0 ? (
      <span data-test='guess-instructions'>Try to guess the secret word!</span>
    ) : (
      <div data-test='guessed-words'>
        <h3>Guessed Words</h3>
        <table className="table table-sm">
          <thead className="thead-light">
            <tr>
              <th>Guess</th>
              <th>Matching Letters</th>
            </tr>
          </thead>
          <tbody>{ guessedWordsRows }</tbody>
        </table>
      </div>
    );

  return <div data-test='component-guessed-words'>{contents}</div>;
};

export default GuessedWords;
