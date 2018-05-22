import React,{Component} from 'react';
import PostDetails from './PostDetails';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Post from './Post';
import Paper from 'material-ui/Paper';
import paperStyle from './PaperStyle';
import MenuBar from './MenuBar';
import Checkbox from 'material-ui/Checkbox';


const style = {
  margin: 12,
};

const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};






export default class ViewPost extends Component{
  componentWillMount(){
    this.setState({
      Posts:PostDetails,
    })
  }
  
  

  newPost=(e)=>{
    e.preventDefault();
   
     
    
    
    const Posts=this.state.Posts;
     const newId=Posts[Posts.length-1].Post_ID+1;
     this.setState({
      Posts:Posts.concat({
        Post_ID: newId,
        Message:this.state.Message,
        votable:this.state.votable,
        attachment: this.state.attachment,
        })

        


        
        
    });
  
    document.getElementById('Message').value='';
    
    // document.getElementById('votable').value='off';
    // document.getElementById('attachment').value='off'
    


console.log(document.getElementById('Message').value);    
console.log(document.getElementById('votable').value);
console.log(document.getElementById('attachment').value);
     
   
  }

  
  
  handleSubmit=(event)=>{
    event.preventDefault();
    console.log('test');

    console.log(document.getElementById('Message').value);
    console.log(document.getElementById('votable').value)
    

  }
 
  
  //Change votable checkbox from on or off to Y or N
  ChangeVotable=(event)=>{
    document.getElementById('votable').value==="on"?document.getElementById('votable').value='Y':document.getElementById('votable').value='N';
  }
  


  //Change attachment checkbox from on or off to Y or N
  ChangeAttachment=(event)=>{
    document.getElementById('attachment').value==="on"?document.getElementById('attachment').value='Y':document.getElementById('attachment').value='N';
  }

  



  
  render(){
  return(
    <div>      
      <MenuBar/>
      <Paper style={paperStyle}>
        <h2>New Post</h2>
        <form>
        
          
          <TextField multiLine={false} rows={6} 
          fullWidth="true" rowsMax={10} floatingLabelText="Message" 
          id='Message' onChange={e => this.setState({Message: e.target.value})}/>
          <br/>
           
          <div > 
            <Checkbox
              label="Votable"
              labelPosition="left"
              style={styles.checkbox}
              id="votable"
              onChange={e => this.setState({attachment: e.target.value})}/>
          </div>  
            
            
          <div>
            <Checkbox
              label="Attachment"
              labelPosition="left"
              style={styles.checkbox}
              id="attachment"
              onChange={e => this.setState({attachment: e.target.value})}
              onClick={this.ChangeAttachment}/>
            
          </div>
          
          
            
          <RaisedButton label="Submit" className="submitButton" style={style} onClick={this.newPost}  />
          <RaisedButton label="Cancel" className="cancelButton" style={style}/> 
      
        </form>  
      </Paper> 
     
      {this.state.Posts.map(info=>
         <Post key={info.Post_ID} {...info}/>
    
      )}
      
        
        
    
        
        
  
    </div>
        )
  }
}