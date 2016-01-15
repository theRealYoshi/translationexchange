import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar history={this.props.history} />
        <Footer />
      </div>
    );
  }
}

export default App;
