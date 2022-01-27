import { render, screen } from '@testing-library/react';
import App from './App';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

enzyme.configure({ adapter: new Adapter() });

function setup() {
  return enzyme.shallow(<App />);
}

class Page {
  appElements: any;
  inputSkill: any;
  inputDeveloper: any;
  inputTec: any;
  inputRoles: any;
  header: any;
  button: any;
  
  constructor(component: any) {
    // eslint-disable-next-line testing-library/no-node-access
    this.appElements = component.getElement().props.children;

    this.inputSkill = this.appElements.find((el: { props: any; }) => el.props.id === 'input-skill');
    this.inputDeveloper = this.appElements.find((el: { props: any; }) => el.props.id === 'input-developer');
    this.inputTec = this.appElements.find((el: { props: any; }) => el.props.id === 'input-tec');
    this.inputRoles = this.appElements.find((el: { props: any; }) => el.props.id === 'input-roles');
    this.header = this.appElements.find((el: { type: string; }) => el.type === 'header');
    this.button = this.appElements.find((el: { type: string; }) => el.type === 'a');
  
  }
}

test('header Devs App to be on screen', () => {
  render(<App />);
  const developerText = screen.getByText(/Devs App/);
  expect(developerText).toBeInTheDocument();
});

test('Skill Name input label to be on screen', () => {
  render(<App />);
  const labelText = screen.getByText(/Skill Name/);
  expect(labelText).toBeInTheDocument();
});

test('Developers input label to be on screen', () => {
  render(<App />);
  const labelText = screen.getByText(/Developers/);
  expect(labelText).toBeInTheDocument();
});

test('Technologies input label to be on screen', () => {
  render(<App />);
  const labelText = screen.getByText(/Technologies/);
  expect(labelText).toBeInTheDocument();
});

test('Roles input label to be on screen', () => {
  render(<App />);
  const labelText = screen.getByText(/Roles/);
  expect(labelText).toBeInTheDocument();
});

describe('Test page object', () => {

  const component = setup();
  const page = new Page(component);

  test('Header is created correctly', () => {
    expect(page.header.props.className).toBe('App-header');
  });

  test('Skill Name input is created correctly', () => {
    expect(page.inputSkill.props.id).toBe('input-skill');
    expect(page.inputSkill.props.className).toBe('input1');
  });

  test('Developers input is created correctly', () => {
    expect(page.inputDeveloper.props.id).toBe('input-developer');
    expect(page.inputDeveloper.props.className).toBe('input1');
  });

  test('Technologies input is created correctly', () => {
    expect(page.inputTec.props.id).toBe('input-tec');
    expect(page.inputTec.props.className).toBe('input1');
  });

  test('Roles input is created correctly', () => {
    expect(page.inputRoles.props.id).toBe('input-roles');
    expect(page.inputRoles.props.className).toBe('input1');
  });
  
  test('buttonn is created correctly', () => {
    expect(page.button.props.id).toBe('add-skill-button');
    expect(page.button.props.id).toBe('add-skill-button');
  });
});
