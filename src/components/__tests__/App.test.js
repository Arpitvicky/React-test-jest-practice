import React from 'react';
// import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from '../App';

test('renders without crashing', () => {
    const wrapper = shallow(<App />);
    //console.log(wrapper.debug()); // returns the html string of the component
    expect(wrapper).toBeTruthy();
    // Jest-expect (asserytion)
});

// Create a factory function for creating shallow model of component 
// with states and props as optional Parameters.
//Shallow wrapper of the component

/**
 * Factory function to create the Shallow wrapper of the component
 * @function setup
 * @param {object} props 
 * @param {any} state 
 * @returns {ShallowWrapper}
 */
const setup = (props={},state=null) => {
    const wrapper = shallow(<App {...props}/>);
    if(state) wrapper.setState(state);
    return wrapper;
}
/**
 * Return ShallowWrapper containing nodes with the given data-test value
 * @function findByTestAttr
 * @param {ShallowWrapper} wrapper 
 * @param {string} val 
 * @returns {ShallowWrapper}
 */
const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
}
test('renders without crashing', () => {
    const wrapper = setup();
    const appComponent = findByTestAttr(wrapper, 'component-app');
    expect(appComponent.length).toBe(1);
});

test('renders increment button', () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, 'increment-button'); 
    expect(button.length).toBe(1);
});

test('renders counter display', () => {
    const wrapper = setup();
    const counterDisplay = findByTestAttr(wrapper, 'counter-display');
    expect(counterDisplay.length).toBe(1);
});

test('counter starts at 0', () => {
    const wrapper = setup();
    const initialCounterState = wrapper.state('counter');
    expect(initialCounterState).toBe(0);
});

test('clicking button increments counter display', () => {
   const counter = 7;
   const wrapper = setup(null, {counter});

   //find button and click
   const button = findByTestAttr(wrapper, 'increment-button'); 
   button.simulate('click');
   wrapper.update();

  //find display and test value
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.text()).toContain(counter + 1);
});


test('renders decrement button', () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, 'decrement-button'); 
    expect(button.length).toBe(1);
});

test('clicking button decrement counter display', () => {
    const counter = 7;
    const wrapper = setup(null, {counter});
 
    //find button and click
    const button = findByTestAttr(wrapper, 'decrement-button'); 
    button.simulate('click');
    wrapper.update();
 
   //find display and test value
   const counterDisplay = findByTestAttr(wrapper, 'counter-display');
   expect(counterDisplay.text()).toContain(counter - 1);
 });