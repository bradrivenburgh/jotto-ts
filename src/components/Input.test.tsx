import { shallow, ShallowWrapper } from 'enzyme';
import { findByTestAttr } from '../__test__/testUtils';
import Input from './Input';

// Mock React.useState
const mockSetCurrentGuess = jest.fn(); // mock setter function
jest.mock('react', () => ({
  //require the actual 'react' package
  ...jest.requireActual('react'),
  // override 'useState' method
  useState: (initialState: any) => [initialState, mockSetCurrentGuess],
}));

// set default props and setup function returning a
// shallow wrapper with them
const defaultProps = { secretWord: 'party' };
const setup = (props = defaultProps): ShallowWrapper => {
  return shallow(<Input {...props} />);
};

test('renders without crashing', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-input');
  expect(component.length).toBe(1);
});

describe('state controlled input field', () => {
  test('state updates with value of input box upon change', () => {
    const wrapper = setup();
    const inputBox = findByTestAttr(wrapper, 'input-box');

    // Simulate change event to "input-box" with value of "train"
    const mockEvent = { target: { value: 'train' } };
    inputBox.simulate('change', mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
  });
});
