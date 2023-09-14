import React , {useState , useEffect } from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Posts from '../Posts/Posts'
import Form from '../Form/Form';
import { useDispatch } from 'react-redux';// react hook
import { getPosts } from '../../actions/posts';

const Home = () => {
    const [currentId, setCurrentId]= useState(0);
    // const classes = useStyles();
    const dispatch = useDispatch();
   
  //react hook
    useEffect(() => {
      dispatch(getPosts());
    }, [currentId, dispatch]);

return (
    <Grow in>
    <Container>
      <Grid container justify="space-between" alignItems="stretch" spacing={3}>
        <Grid item xs={12} sm={7}>
          <Posts setCurrentId={setCurrentId} />
          {/* <h1>'hello'</h1> */}
        </Grid>
        <Grid item xs={12} sm={4}>
          <Form currentId={currentId} setCurrentId={setCurrentId} />
        </Grid>
      </Grid>
    </Container>
  </Grow>
  
);
}

export default Home
