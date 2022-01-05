import { render } from '@testing-library/react';
import ContentHolder from '../../components/ContentHolder';

test('renders Content Holder component', () => {
  const component = render(<ContentHolder>Test</ContentHolder>);
  expect(component).toMatchSnapshot();
});
