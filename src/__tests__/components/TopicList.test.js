import { render } from '@testing-library/react';
import TopicList from '../../components/TopicList';

test('renders Topic List component without info', () => {
  const component = render(<TopicList info={{ topic: { relatedTopics: [] } }} />);
  expect(component).toMatchSnapshot();
});

test('renders Topic List component with info', () => {
  const component = render(<TopicList info={{ topic: { relatedTopics: [{ name: "test", stargazerCount: 5 }] } }} />);
  expect(component).toMatchSnapshot();
});
