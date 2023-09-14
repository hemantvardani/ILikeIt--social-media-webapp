import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { createPost,updatePost } from '../../actions/posts';


const Form = ({currentId, setCurrentId}) => {
    
const [postData, setPostData] = useState({ title: '', message: '', tags: '', selectedFile: '' });
// const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });

const post = useSelector((state) => (currentId ? state.posts.find((p) => p._id === currentId) : null));
// const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));

    const classes =useStyles();
    const dispatch = useDispatch();
    const user =JSON.parse(localStorage.getItem('profile'));

    useEffect(() => {
      if (post) setPostData(post);
    }, [post]);

    const handleSubmit =   (e)=> {
        e.preventDefault();


        if (currentId ) {
          console.log("hemant ")
          dispatch(updatePost(currentId,{ ...postData, name: user?.result?.name}));

        } else {
          dispatch(createPost({ ...postData, name: user?.result?.name}));
        }
        clear();


        
    }

    
  const clear = () => {
      setCurrentId(null);
      // setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
      setPostData({ title: '', message: '', tags: '', selectedFile: '' });
 
    };

    if(!user?.result?.name){

      return (
        <Paper className={classes.paper}>
          <Typography variant ='h6' align='center'>
            Please Sign In to create your own post and like other's posts 
          </Typography>
        </Paper>
      )
      
    }


    return (
        <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
        
      <Typography variant="h6">{currentId ? 'Editing' : 'Creating'}  a Memory</Typography>
      {/* <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} /> */}
        <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
        <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>

        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>

     
     
      </form>
    </Paper>
    // <h1> heello</h1>
    );
};

export default Form;





//e.preventDefault() just prevent the default event from occuring 
//const dispatch= useDispatch() by this now useDispatch feature can be used by dispatch
// then dispatch use to call action fuction of redux  
