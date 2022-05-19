import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import renderer from 'react-test-renderer';
import CreateParking from './CreateParking'
import { mount } from 'enzyme';

it('test snap-shot ', () => {  
  const CreateParkingComponent = renderer.create(<CreateParking />).toJSON();
  expect(CreateParkingComponent).toMatchSnapshot();
});

it('create parking slots', () => {
  const component = renderer.create(
    <CreateParking>Create Prackings</CreateParking>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})

test('render button', () => {
  const {getByText} = render(<CreateParking/>)

  const submit = getByText(/btn-create/i);
  expect(submit).toBeInTheDocument()
})


