import { GitHubService } from '../../services/github';
import { GET_TOPIC } from '../../queries/getTopicQuery';
import { createMockClient } from 'mock-apollo-client';
import * as Apollo from "@apollo/client";
// test.js

beforeEach(() => {
    
});

  test('should render the logged in users name', async () => {
    const mockClient = createMockClient();
    mockClient.setRequestHandler(
        GET_TOPIC,
        () => Promise.resolve({ data: {
            topic: {
              relatedTopics: [{ name: 'jest', stargazerCount: 10 }]
            }
        }})
    );
    const ApolloSpy = jest.spyOn(Apollo, 'ApolloClient').mockReturnValueOnce(mockClient);

    const result = await GitHubService.makeQuery(GET_TOPIC, {
        topicName: 'react'
    });

    expect(ApolloSpy).toBeCalled();
    expect(result.data.topic.relatedTopics[0].name).toBe('jest');
  });