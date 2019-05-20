import React from 'react';
import Appbar from './homeSections/appbar.jsx'
import MapSection from './homeSections/mapSection.jsx';
import InputSection from './homeSections/inputSection.jsx';

class Home extends React.Component {

    logout = () => {
        this.props.history.push('/');
    }

render() {
  return (
    <div>
    <Appbar history={this.props.history}/>
    <MapSection/>
    <InputSection history={this.props.history}/>
    </div>
  );
}
}


export default (Home);
