function QB_EventResponder(){

  this.on = function(eventName, callback){

    document.addEventListener(eventName, callback);

    return this;

  };

}
