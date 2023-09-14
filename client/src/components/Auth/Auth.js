// import React,{useState} from 'react';
// import { AppBar } from '@material-ui/core';
// import { Button, Container  } from '@material-ui/core';
// import {  Avatar,Typography , Toolbar, Paper , Grid  } from '@material-ui/core';
// import {GoogleLogin} from  'react-google-login';
// import {GoogleOAuthProvider} from '@react-oauth/google'
// import { GoogleLogin,googleLogout } from '@react-oauth/google';
// import useStyles from './Styles'
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Input from './Input';
// import Icon from './icon'


// const Auth = () => {
//     const classes = useStyles();
//     const [showPassoword, setShowPassoword] = useState(false);
//     const [isSignup,setIsSignup] = useState(false);
    
//     const handleShowPassword =() =>setShowPassoword((prevShowPassoword)=> !prevShowPassoword);

//     const handleSubmit = () =>{


//     };

//     const handleChange = () =>{


//     };
//     const switchMode= ()=>
//     {
//         setIsSignup((prevIsSignup) => !prevIsSignup);
//         handleShowPassword(false);
//     }

//     const googleSuccess=(res)=>{
//         console.log(res);
//     };
//     const googleFailure=()=>{
//         console.log("Google Sign In was unsuccessful. Try Again Later ");
//     };


//   return (
//     <Container component ="main" maxWidth="xs">
//             <Paper className={classes.paper} elevation={3}>
//                     <Avatar className ={classes.avatar}>
//                         <LockOutlinedIcon />
//                     </Avatar>
//             <Typography variant="h5" >
//                 {isSignup? 'Sign Up':' Sign In'}
//             </Typography>

//             <form className={classes.form} onSubmit ={handleSubmit}>
//                 <Grid container spacing ={2}>
//                     {
//                         isSignup && (
//                             <>
                                    
//                                     <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
//                                     <Input name="firstName" label="First Name" handleChange={handleChange} half />

                            
//                             </>


//                         )
//                     }

//                     <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
//                     <Input name="password" label="Password" handleChange={handleChange} type={showPassoword? "text" : "password"} handleShowPassword={handleShowPassword}/>

//                         {  isSignup && <Input name="confirmPassword" label ="Repeat Passoword" handleChange={handleChange} type="password" />}
//                 </Grid>
//                             <Button type ="submit" fullWidth variant ="contained" color="primary" className={classes.submit}>
//                                     {isSignup ? 'Sign Up': 'Sign In'}
//                             </Button>

//                     <GoogleOAuthProvider
//                         clientId ="195963615523-cu17q5m3glvhgvkve2iattbbvkf0isc2.apps.googleusercontent.com"
//                         render={(renderProps)=>(
//                             <Button className={classes.googleButton} 
//                             color='primary' 
//                             fullWidth onClick={renderProps.onClick}
//                              disabled={renderProps.disabled} 
//                              startIcon={<Icon/>}
//                               variant='contained'>
//                                 Google Sign In
//                               </Button>
//                         )}
//                         onSuccess={googleSuccess}
//                         onFailure={googleFailure}
//                         cookiePolicy="single_host_origin"
//                      />
               
//                 <Grid container justify="flex-end">
//                     <Grid item>
//                         <Button  onClick={switchMode}>
//                            {isSignup?'Already have an Account? Sign In':" Don't have an account? Sign Up"} 
//                         </Button>
//                     </Grid>
                    
//                 </Grid>

//                 </form>
//             </Paper>

//     </Container>



    
//   );
// ;}

// export default Auth;




















import React,{useState} from 'react';
import { AppBar } from '@material-ui/core';
import { Button, Container  } from '@material-ui/core';
import {  Avatar,Typography , Toolbar, Paper , Grid  } from '@material-ui/core';
import {GoogleLogin} from  'react-google-login';
import useStyles from './Styles'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Input from './Input';
import Icon from './icon'
import {signin,signup} from '../../actions/auth';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
 


const initialState={firstName:'',lastName:'',email:'',password:'',confirmPassword:''} 
const Auth = () => {
    const classes = useStyles();
    const [showPassoword, setShowPassoword] = useState(false);
    const [isSignup,setIsSignup] = useState(false);
    const [formData, setFormData]= useState(initialState);
    const handleShowPassword =() =>setShowPassoword((prevShowPassoword)=> !prevShowPassoword);
    const dispatch = useDispatch(); //check this
    const history = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault();
          if(isSignup){
            dispatch(signup(formData,history))
        }
        else{
            dispatch(signin(formData,history))
        }

    };

    const handleChange = (e) =>{
            setFormData({...formData, [e.target.name]:e.target.value });

    };
    const switchMode= ()=>
    {
        setIsSignup((prevIsSignup) => !prevIsSignup);
        setShowPassoword(false);
    }

    const googleSuccess= async (res)=>{
        const result =res?.profileObj
        ;
        const token  = res?.tokenId;

        try {
            dispatch({type:'AUTH', data: {result,token}});
            history.push('/');
        } catch (error) {
            console.log(error);
        }
        console.log(res);
    };
    const googleFailure=()=>{
        console.log("Google Sign In was unsuccessful. Try Again Later ");
    };


  return (
    <Container component ="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                    <Avatar className ={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
            <Typography variant="h5" >
                {isSignup? 'Sign Up':' Sign In'}
            </Typography>

            <form className={classes.form} onSubmit ={handleSubmit}>
                <Grid container spacing ={2}>
                    {
                        isSignup && (
                            <>
                                    
                                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                    <Input name="lastName" label="Last Name" handleChange={handleChange} half />

                            
                            </>


                        )
                    }

                    <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                    <Input name="password" label="Password" handleChange={handleChange} type={showPassoword? "text" : "password"} handleShowPassword={handleShowPassword}/>

                        {  isSignup && <Input name="confirmPassword" label ="Repeat Passoword" handleChange={handleChange} type="password" />}
                </Grid>
                            <Button type ="submit" fullWidth variant ="contained" color="primary" className={classes.submit}>
                                    {isSignup ? 'Sign Up': 'Sign In'}
                            </Button>

                    {/* <GoogleLogin
                        clientId ="195963615523-cu17q5m3glvhgvkve2iattbbvkf0isc2.apps.googleusercontent.com"
                        render={(renderProps)=>(
                            <Button className={classes.googleButton} 
                            color='primary' 
                            fullWidth onClick={renderProps.onClick}
                             disabled={renderProps.disabled} 
                             startIcon={<Icon/>}
                              variant='contained'>
                                Google Sign In
                              </Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"
                     />
                */}
                <Grid container justify="flex-end">
                    <Grid item>
                        <Button  onClick={switchMode}>
                           {isSignup?'Already have an Account? Sign In':" Don't have an account? Sign Up"} 
                        </Button>
                    </Grid>
                    
                </Grid>

                </form>
            </Paper>

    </Container>



    
  );
;}

export default Auth;
