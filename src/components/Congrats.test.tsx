import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

import { findByTestAttr } from '../__test__/testUtils';
import Congrats from './Congrats';

Enzyme.configure({
  adapter: new EnzymeAdapter(),
});

interface setupProps {
  success: boolean;
}
/**
 * Factory function to create a ShallowWrapper for the Congrats component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props: setupProps = { success: false }) => {
  return shallow(<Congrats {...props} />);
};

describe('Congrats', () => {
  test('renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.length).toBe(1);
  });

  test('renders no text when "success" prop is false', () => {
    const wrapper = setup({ success: false });
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.text()).toBe('');
  });
  test('renders non-empty congrats message when "success" prop i s true', () => {
    const wrapper = setup({ success: true });
    const message = findByTestAttr(wrapper, 'congrats-message');

    expect(message.text().length).not.toBe(0);
  });
});