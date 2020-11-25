import { render, screen } from '@testing-library/react';
import {App, add} from './App';


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('check if add works', () => {
 
  let number  = add(3,9) // 12
  expect(number).toStrictEqual(12);
});
