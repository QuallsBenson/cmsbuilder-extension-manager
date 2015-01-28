var QB_Extension = {
  http     : new QB_HTTPQuery,
  dispatch : function(queryVars){

    var    Disp  = new QB_Dispatcher(queryVars);
    Disp.dispatch();

    return this;

  },
  responder : new QB_EventResponder,
  on        : function(eventName, callback){

    this.responder.on(eventName, callback);

    return this;

  },
  run       : function(){

    this.dispatch( this.http.get() );

  }

}


var ext = QB_Extension;
ext.run();
