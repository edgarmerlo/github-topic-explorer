import { useParams } from "react-router-dom";
import { gql, useQuery } from '@apollo/client';
import LoadingButton from '@mui/lab/LoadingButton';
import ContentHolder from '../components/ContentHolder';
import Header from '../components/Header';
import TopicList from '../components/TopicList';
import { getGithubTopics } from '../services/github';
import { GET_TOPIC } from '../queries/getTopicQuery';

function App() {
  const params = useParams();
  const { loading, error, data } = useQuery(GET_TOPIC, {
    variables: {
      topicName: params.topicName
    },
  });

  return (
    <div className="App">
      <Header />
      { loading && <LoadingButton loading align="center"/> }
      { error &&  <ContentHolder>There was an error on your query, try again later</ContentHolder>}
      { data && <TopicList info={data} /> }
    </div>
  );
}

export default App;
