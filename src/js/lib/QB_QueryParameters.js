function QB_QueryParameters(){

  this.values = {};

  this.getEventName = function(){

    var menu   = this.values.menu,
        action = this.values.action;


    if(action) menu += '.' + action;

    return menu;

  }

}
