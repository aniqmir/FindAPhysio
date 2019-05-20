import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

class InputSection extends React.Component{

    constructor(props){
        super(props);

        this.state={
            name:'',
            phoneno:'',
            email:'',
            city:'',
            address:'',
            errorName:false,
            errorPhone:false,
            errorEmail:false,
            errorCity:false,
            errorAddress:false
        }
    }

    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
      };

    findPhysio = () => {
        if(this.state.name===''){
            alert('Name is Required')
            this.setState({
                errorName:true
            })
        }
       else if(this.state.phoneno===''){
            alert('Phone No is Required')
            this.setState({
                errorPhone:true
            })
        }
        else if(this.state.address===''){
            alert('Address is Required')
            this.setState({
                errorAddress:true
            })
        }
        else{
            this.setState({
                errorName:false,
                errorPhone:false,
                errorAddress:false,
                name:'',
                phoneno:'',
                address:''
            })
            this.props.history.push('/success')
        }
    }

      
    render() {
        return(
        <div style={{padding:20}}>
         <Grid container spacing={40} justify="center" alignContent="center" alignItems="center" style={{paddingLeft:'5%',paddingRight:'5%'}}>
             <Grid item xs={12}>
                <Typography align="center" component="div" variant="headline">Enter your Details</Typography>
             </Grid>

             <Grid item xs={12} md={6}>
             <TextField
                required
                id="outlined-required"
                label="Name"
                onChange={this.handleChange('name')}
                value={this.state.name}
                margin="normal"
                variant="outlined"
                fullWidth={true}
                error={this.state.errorName}
                />
             </Grid>
             <Grid item xs={12} md={6}>
             <TextField
                required
                id="outlined-number"
                label="Phone No"
                value={this.state.phoneno}
                onChange={this.handleChange('phoneno')}
                margin="normal"
                variant="outlined"
                fullWidth={true}
                error={this.state.errorPhone}
                />

             </Grid>
             <Grid item xs={12} md={6}>
             <TextField
                id="outlined-email-input"
                label="Email"
                onChange={this.handleChange('email')}
                type="email"
                name="email"
                value={this.state.email}
                autoComplete="email"
                margin="normal"
                variant="outlined"
                fullWidth={true}
                error={this.state.errorEmail}
                />
             </Grid>
             <Grid item xs={12} md={6}>
             <TextField
                id="outlined-required"
                label="City"
                onChange={this.handleChange('city')}
                value={this.state.city}
                margin="normal"
                variant="outlined"
                fullWidth={true}
                error={this.state.errorCity}
                />
             </Grid>
             <Grid item xs={12}>
             <TextField
                required
                id="outlined-required"
                label="Address"
                onChange={this.handleChange('address')}
                margin="normal"
                value={this.state.address}
                variant="outlined"
                fullWidth={true}
                error={this.state.errorAddress}
                />
             </Grid>

             <Grid item xs={!2}>
                 <Button variant="outlined" color="primary" onClick={()=>this.findPhysio()}> 
                     Find My Physio!
                 </Button>
             </Grid>

         </Grid>
         </div>
        )
    }
}

export default InputSection;