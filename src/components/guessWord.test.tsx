import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { findByTestAttr } from '../__test__/testUtils';
import App from './App';

const setup = (state: any = {}): ReactWrapper => {
  // TODO: apply state
  const wrapper = mount(<App />);

  // add value to input box
  const inputBox = findByTestAttr(wrapper, 'input-box');
  const mockChangeEvent = { target: { value: 'train' } };
  inputBox.simulate('change', mockChangeEvent);

  // simulate click on the submit button
  const submitButton = findByTestAttr(wrapper, 'submit-button');
  const mockClickEvent = { preventDefault() {} };
  submitButton.simulate('click', mockClickEvent);

  return wrapper;
};

describe.skip('no words guessed', () => {
  let wrapper: ReactWrapper;
  beforeEach(() => {
    wrapper = setup({
      secretWord: 'party',
      success: false,
      guessedWords: [],
    });
  });

  test('creates a GuessedWords table with one row', () => {
    const guessedWordRows = findByTestAttr(wrapper, 'guessed-words');
    expect(guessedWordRows).toHaveLength(1);
  });
});
describe.skip('some words guessed', () => {
  let wrapper: ReactWrapper;
  beforeEach(() => {
    wrapper = setup({
      secretWord: 'party',
      success: false,
      guessedWords: [{ guessedWords: 'agile', letterMatchCount: 1 }],
    });
  });

  test('adds row to guessedWords table', () => {
    const guessedWordRows = findByTestAttr(wrapper, 'guessed-words');
    expect(guessedWordRows).toHaveLength(2);
  });
});
describe.skip('guess secret word', () => {
  let wrapper: ReactWrapper;
  beforeEach(() => {
    wrapper = setup({
      secretWord: 'party',
      success: false,
      guessedWords: [{ guessedWords: 'agile', letterMatchCount: 1 }],
    });

    // Find input and type in the secretWord
    const inputBox = findByTestAttr(wrapper, 'input-box');
    inputBox.simulate('change', { target: { value: 'party' } });

    // Find and click submit button
    const submitButton = findByTestAttr(wrapper, 'submit-button');
    submitButton.simulate('click', { preventDefault() {} });
  });

  test('GuessedWords table has three rows', () => {
    const guessedWordsRows = findByTestAttr(wrapper, 'guessed-words');
    expect(guessedWordsRows).toHaveLength(3);
  });

  test('shows Congratulations message', () => {
    const congratsMessage = findByTestAttr(wrapper, 'congrats-message');
    expect(congratsMessage.text().length).toBeGreaterThan(0);
  });

  test('does not display input component contents', () => {
    const inputBox = findByTestAttr(wrapper, 'input-box');
    expect(inputBox.exists()).toBe(false);

    const submitButton = findByTestAttr(wrapper, 'submit-button');
    expect(submitButton.exists()).toBe(false);
  });
});
