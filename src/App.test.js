import App from './App';
import { shallow } from 'enzyme';

describe('App Testing', () => {
  let component;

  beforeEach(() => {
    component = shallow(<App />)
  })

  test('render App', () => {
    expect(component.find('div')).toBeDefined();
  });
  
  test('render App has class .App', () => {
    expect(component.find('div').hasClass('App')).toEqual(true);
  })

  test('render App to have children', () => {
    expect(component.find('div').children()).toHaveLength(3)
  })
})


