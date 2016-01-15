import alt from '../alt';
import {assign} from 'underscore';

class NavbarActions {
  constructor() {
    this.generateActions(
      'getDribbleSuccess'
    );
  }
  //find images based off Giphy or Redis
  findImages(){
    $.ajax({
      url: '/api/images/'
    })
      .done((data) => {
        this.actions.getDribbleSuccess(data);
      })
      .fail((data) => {
        console.log(data);
      });
  }

}

export default alt.createActions(NavbarActions);
