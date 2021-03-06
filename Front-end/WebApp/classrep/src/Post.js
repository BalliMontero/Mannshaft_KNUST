import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import paperStyle from './PaperStyle';


const Post = props =>
  <div>
    <Card style={paperStyle}>
      
            <CardTitle/>
            
            <CardText>
              {props.Message}
              <br/>

              <br/>
              Votable:{props.Votable}    
              <br/>
              Attachment:{props.Attachment}
              <br/>
              Time Sent:{props.TimeSent}
              <br/>
              Sent By: {props.SentBy}

            </CardText>
          </Card>
  </div>



  export default Post;