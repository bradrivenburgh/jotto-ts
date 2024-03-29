import { shallow, ShallowWrapper } from 'enzyme';
import { findByTestAttr } from '../__test__/testUtils';
import GuessedWords from './GuessedWords';

const defaultProps = {
  guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }],
};

const setup = (props = defaultProps): ShallowWrapper => {
  return shallow(<GuessedWords {...props} />);
};

describe('if there are no words guessed', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });

  test('renders without crashing', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words');
    expect(component.length).toBe(1);
  });
  test('renders instructions to guess a word', () => {
    const instructions = findByTestAttr(wrapper, 'guess-instructions');
    expect(instructions.text().length).not.toBe(0);
  });
});

describe('if there are words guessed', () => {
  const guessedWords = [
    { guessedWord: 'train', letterMatchCount: 3 },
    { guessedWord: 'agile', letterMatchCount: 1 },
    { guessedWord: 'party', letterMatchCount: 5 },
  ];
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords });
  });

  test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words');
    expect(component.length).toBe(1);
  });

  test('renders "guessed words" section', () => {
    const guessedWordNode = findByTestAttr(wrapper, 'guessed-words');
    expect(guessedWordNode.length).toBe(1);
  });

  test('correct number of guessed words', () => {
    const guessedWordsNodes = findByTestAttr(wrapper, 'guessed-word');
    expect(guessedWordsNodes.length).toBe(guessedWords.length);
  });
});
