import React from 'react';
import {Link} from 'react-router';
import NavbarStore from '../stores/NavbarStore';
import NavbarActions from '../actions/NavbarActions';
import DribbleImage from './ImageTag';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = NavbarStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    NavbarActions.findImages();
    NavbarStore.listen(this.onChange);
  }

  componentWillUnmount() {
    NavbarStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  handleSubmit(event) {

  }

  render() {
    return (
      <div className="container">
        <div className="title">
          <h1>Javascript & CSS Test</h1>
        </div>
        {
          this.state.dribbleImages.map(function(dribbleImg){
              return <DribbleImage props={dribbleImg} />;
          })
        }
      </div>
    );
  }
}

export default Navbar;
