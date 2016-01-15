import React from 'react';
import {Link} from 'react-router';
import ImageTagStore from '../stores/ImageTagStore';
import ImageTagActions from '../actions/ImageTagActions';

class DribbleImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = ImageTagStore.getState();
  }

  _handleClick(html_url) {
    window.open(html_url);
  }

  render() {
    if (this.props){
        var attr = this.props.props;
    }
    return (
      <div className="dribble-container">
        <div className="dribble-image-container" onClick={this._handleClick.bind(null, attr.html_url)}>
          <img className="dribble-image" src={attr.images.normal}>
            <h4 className="dribble-likes">{attr.likes_count} Likes</h4>
          </img>
          <div className="dribble-caption">
            <img className="dribble-profile-image" src={attr.user.avatar_url}/>
            <div className="dribble-caption-text">
              <h4>{attr.title}</h4>
              <p>by {attr.user.name}</p>
            </div>
           </div>
        </div>
      </div>
    )
  }

}

export default DribbleImage;
