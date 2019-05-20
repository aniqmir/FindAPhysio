import React from 'react';
import Appbar from './appbar.jsx';
import Typography from '@material-ui/core/Typography';

class Success extends React.Component{
    render() {
        return(
            <div>
                <Appbar history={this.props.history}/>
                <div style={{padding:'20%'}}>
            <Typography align="center" variant="display1">
                Your Request Was Successfull, We Will Contact You Shortly!
            </Typography>
            </div>
            </div>
          
        )
    }
}

export default Success;