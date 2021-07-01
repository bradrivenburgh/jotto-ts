/**
 * @returns the number of letters matched between guessed word and secret word.
 */
export function getLetterMatchCount(
  guessedWord: string,
  secretWord: string
): number {
  const secretLetters = secretWord.split('');
  // Use set as it its iterable and only allows unique values,
  // so repeated characters would only be shown once
  const guessedLetterSet = new Set(guessedWord);
  return secretLetters.filter((letter) => guessedLetterSet.has(letter)).length;
}
