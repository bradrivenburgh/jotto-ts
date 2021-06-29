import { shallow, ShallowWrapper } from 'enzyme';
import { findByTestAttr } from '../__test__/testUtils';
import Input from './Input';

const defaultProps = { secretWord: 'party' };

const setup = (props = defaultProps): ShallowWrapper => {
  return shallow(<Input {...props} />);
};

test('renders without crashing', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-input');
  expect(component.length).toBe(1);
});
