import SocialButton from './SocialButton';
import { shallow } from 'enzyme';

describe('SocialButton Test', () => {
  let component;

  beforeEach(() => {
    component = shallow(<SocialButton />);
  })

  test('render SocialButton component', () => {
    expect(component.find('div')).toBeDefined()  
  })

  test('render SocialButton to have children', () => {
    expect(component.find('div').children()).toHaveLength(2)
  })

  test('render icons has size to equal 25x25', () => {
    component.find('img').forEach((node) => {
      expect(node.props().height).toEqual(25)
      expect(node.props().width).toEqual(25)
    })
  })
})