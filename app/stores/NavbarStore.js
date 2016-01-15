import alt from '../alt';
import NavbarActions from '../actions/NavbarActions';

class NavbarStore {
  constructor() {
    this.bindActions(NavbarActions);
    this.dribbleImages = [];
  }

  onGetDribbleSuccess(data) {
    this.dribbleImages = data.data;
  }
}

export default alt.createStore(NavbarStore);
