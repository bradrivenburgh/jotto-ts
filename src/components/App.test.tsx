import { mount, ReactWrapper } from 'enzyme';
import { findByTestAttr } from '../__test__/testUtils';
import App from './App';
import { getSecretWord as mockGetSecretWord } from '../actions';
// activate global mock to make sure secretWord doesn't make
// network call; jest.mock is hoisted so it's ok to have it
// appear after getSecretWord is imported
jest.mock('../actions');

const setup = (): ReactWrapper => {
  // use mount instead of shallow because useEffect is not called
  // on shallow render
  return mount(<App />);
};

test('renders without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent.length).toBe(1);
});

describe('get secret word', () => {
  beforeEach(() => {
    // clear the mock calls from previous tests
    (mockGetSecretWord as jest.Mock).mockClear();
  });
  test('getSecretWord on app mount', () => {
    const wrapper = setup();
    expect(mockGetSecretWord).toHaveBeenCalledTimes(1);
  });
  test('getSecretWord does not run on app update', () => {
    const wrapper = setup();
    (mockGetSecretWord as jest.Mock).mockClear();

    // using setProps because wrapper.update() doesn't trigger useEffect
    wrapper.setProps({});

    expect(mockGetSecretWord).toHaveBeenCalledTimes(0);
  });
});
