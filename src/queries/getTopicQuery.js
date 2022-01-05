import { gql } from '@apollo/client';

export const GET_TOPIC = gql`
  query GetTopic($topicName: String!){
    topic(name: $topicName) {
      relatedTopics(first:10) {
        name,
        stargazerCount
      }
    }
  }
`;