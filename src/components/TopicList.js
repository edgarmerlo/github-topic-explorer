import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import TopicIcon from '@mui/icons-material/Topic';
import ListItemText from '@mui/material/ListItemText';
import { useParams } from "react-router-dom";
import ListItemIcon from '@mui/material/ListItemIcon';
import ContentHolder from '../components/ContentHolder';

// List to display related topics
export default function TopicList({ info }) {
    const params = useParams();

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Related topics for: {params.topicName}
        </ListSubheader>
      }
    >
        {(info && info.topic && info.topic.relatedTopics.length > 0) ? info.topic.relatedTopics.map(({ name, stargazerCount }) => (
            <ListItem key={name}>
                <ListItemIcon>
                    <TopicIcon />
                </ListItemIcon>
                <a href={`/${name}`}>
                    <ListItemText primary={`Topic: ${name}`} secondary={`Stargazers: ${stargazerCount}`} />
                </a>
            </ListItem>
        )) : <ContentHolder>No results</ContentHolder>}
    </List>
  );
}
