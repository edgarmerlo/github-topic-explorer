import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import ContentHolder from '../components/ContentHolder';
import Header from '../components/Header';
import TopicList from '../components/TopicList';
import { GET_TOPIC } from '../queries/getTopicQuery';
import { GitHubService } from '../services/github';

function App() {
  const params = useParams();
  const [response, setResponse] = useState({});
  useEffect(() => {
    async function makeQuery() {
      const data = await GitHubService.makeQuery(GET_TOPIC, {
          topicName: params.topicName
      });
      setResponse(data);
    }
    makeQuery();
  }, []);

  const test = GitHubService.makeQuery(GET_TOPIC, {
        topicName: params.topicName
    })

  return (
    <div className="App">
      <Header />
      { response.loading && <LoadingButton loading align="center"/> }
      { response.error &&  <ContentHolder>There was an error on your query, try again later</ContentHolder>}
      { response.data && <TopicList info={response.data} /> }
    </div>
  );
}

export default App;
