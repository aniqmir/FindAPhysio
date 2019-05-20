import React from 'react';
import Grid from '@material-ui/core/Grid';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
// import axios from 'axios';
// import ForgotPass from './ForgotPass/ForgotPass.jsx';
// import ContactSupport from './ContactSupport/ContactSupport.jsx';

import {Redirect} from 'react-router-dom'

const styles = theme => ({
    root: {
      ...theme.mixins.gutters(),
      padding: '10%',
    },
  });


let userLogged = ''
class Login extends React.Component{

    constructor(props){
        super(props)

        this.state={
            email:'',
            password:'',
            error:false,
            openForgotPass:false,
            openContactSupport:false
        }
    }

    componentWillMount() {
        // userLogged = localStorage.getItem('userid')
    }

    // handleClickOpenForgotPass = () => {
    //     this.setState({ openForgotPass: true });
    //   };
    
    //   handleCloseForgotPass = () => {
    //     this.setState({ openForgotPass: false });
    //   };

    //   handleClickOpenContactSupport = () => {
    //     this.setState({ openContactSupport: true });
    //   };
    
    //   handleCloseContactSupport = () => {
    //     this.setState({ openContactSupport: false });
    //   };
    handleEmail = e => {
        this.setState({
            email:e.target.value
        })
    }

    handlePassword = e => {
        this.setState({
            password:e.target.value
        })
    }
     
//     createtable = name => {
//         console.log('about to create a table', name);
//         const dataa = {"table" :name }
//       axios.post('https://w0d7i76g66.execute-api.us-east-2.amazonaws.com/prod/table', dataa,{
//       headers: {
//         'Content-Type': 'application/json',
//      }
//     }).then(res => {
//       JSON.stringify(res);
//       //Check if response reture suceess: true or false
//       if (res.data.success === false) {
//         console.log('Table not created', res.data.message);
//       } 
//       else {
//         console.log('Table Createddd!!!')
//       }
//     })
//     .catch(error => {
//       console.log('error creating table');
//     });        
//    }


    // signInHandle = () => {
    //     //localStorage.setItem('user',type.username)
    //     //localStorage.getItem('user');       
    //     if(this.state.email==="admin@abc.com" && this.state.password==="12345"){
    //         this.props.history.push('/home-conversations');
    //     }
    //     else{
    //         const data = {"email": this.state.email}
    //         axios.post('https://w0d7i76g66.execute-api.us-east-2.amazonaws.com/prod/patients',data,{
    //             headers: {
    //          'Content-Type': 'application/json',
    //            }
    //           }).then(res => {
    //             //JSON.stringify(res);
    //             //const user =JSON.stringify(res.data.user)
    //             const user =JSON.parse(res.data.user);
    //             //Check if response reture suceess: true or false
    //             if (res.data.success === true && user[0]) {  
    //                 if(user[0].password === this.state.password)
    //                  {
    //                   localStorage.setItem('userid',user[0].userid);
    //                   this.props.login()
    //                   this.props.history.push('/home-conversations');
    //                   this.createtable(user[0].userid);      
    //                  }
    //                  else
    //                  {
    //                   alert("invalid Password!!");
    //                   this.setState({
    //                                   password:'',
    //                                   error:true
    //                               })
                      
    //                  }
                    
                  
    //             } 
    //             else
    //             {
    //                   alert("invalid Email Address!!");
    //                 this.setState({
    //                                 email:'',
    //                                 error:true
    //                             })
                 
    //             }
    //           })
    //           .catch(error => {
    //             alert('Internal Server error');
    //           });
    //         // Object.values(this.state.data).map((type,key)=>{
    //         //     // console.log(type)
    //         //     if(this.state.email===type.email && this.state.password===type.password){
    //         //         console.log('User Found')
    //         //         localStorage.setItem('user',type.username)
    //         //         this.props.history.push('/home-conversations');
    //         //         this.setState({
    //         //             error:false
    //         //         })
    //         //         return null
    //         //     }
    //         //     else{
    //         //         this.setState({
    //         //             email:'',
    //         //             password:'',
    //         //             error:true
    //         //         })
    //         //         return null
    //         //     }
               
    //         // })
    //     }
    // }

    signInHandle = () => {
        if(this.state.email==='admin@abc.com' && this.state.password==='abc')
        {
            this.props.history.push('/home')
        }
    }

    render() {

        return (
            userLogged ? (
              <Redirect to="/home-conversations"/>
            ):(
                 <Grid container spacing={0} style={{paddingTop:'5%'}}direction="column"  alignContent="center" alignItems="center">
                  <Card style={{padding:'5%'}}>
               
                    <Grid container spacing={0} direction="row">
                        <Grid item xs={12} sm={12} md={12}>
                            <h3 style={{marginLeft:"40%"}}>Login</h3>
                        </Grid>
                    </Grid>
                
                
                <Grid item xs={12}>
                    <TextField
                    id="outlined-email-input"
                    label="Email"
                    type="email"
                    name="email"
                    value={this.state.email}
                    autoComplete="email"
                    margin="dense"
                    variant="outlined"
                    fullWidth={true}
                    onChange={e=>this.handleEmail(e)}
                    error={this.state.error}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    name="password"
                    value={this.state.password}
                    margin="dense"
                    variant="outlined"
                    fullWidth={true}
                    onChange={e=>this.handlePassword(e)}
                    error={this.state.error}
                    />
                </Grid>
                <Grid item xs={12}>
                    <div style={{paddingTop:'5%',paddingLeft:'30%'}}>
                        <Button variant="contained" size="large"  color="primary" onClick={()=>this.signInHandle()}>
                            Sign In
                        </Button>
                    </div>
                </Grid>
                {/* <Grid item xs={12}>
                    <div style={{paddingTop:'15%',marginLeft:'15%'}}>
                        <Button  onClick={()=>console.log('Forgot Password')}>
                            Forgot Password?
                        </Button>
                        <ForgotPass open={this.state.openForgotPass} handleOpen={this.handleClickOpenForgotPass} handleClose={this.handleCloseForgotPass}/>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div>
                        <Button onClick={()=>console.log('Contact Support')}>
                            Need Help? Contact Support
                        </Button>
                        <ContactSupport open={this.state.openContactSupport} handleOpen={this.handleClickOpenContactSupport} handleClose={this.handleCloseContactSupport} />
                    </div>
                </Grid> */}
                {/* <Grid item xs={12}>
                    <div style={{paddingTop:'5%'}}>
                        <Button  disableRipple={true} onClick={()=>console.log('Terms')}>
                            Terms
                        </Button>
                        <Button onClick={()=>console.log('Privacy')}>
                            Privacy
                        </Button>
                        <Button onClick={()=>console.log('Learn More')}>
                            Learn More About Chat App
                        </Button>
                    </div>
                </Grid> */}
                </Card>
            </Grid>
          
           
        )
        )
    }
}
export default withStyles(styles)(Login)    