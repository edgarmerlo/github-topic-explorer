import { render } from '@testing-library/react';
import Header from '../../components/Header';

test('renders Header component', () => {
  const component = render(<Header />);
  expect(component).toMatchSnapshot();
});
