import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

// Card to display formatted content
function ContentHolder(props) {
  return (
    <Card sx={{ minWidth: 300, margin: 'auto', marginTop: 2, textAlign: 'center' }}>
        <CardContent>{ props.children }</CardContent>
    </Card>
  );
}

export default ContentHolder;
