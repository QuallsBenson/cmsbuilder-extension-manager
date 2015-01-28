function QB_Dispatcher(query){

  var _query = query,
      _event = false;


  this.dispatch = function(){

    document.dispatchEvent(_event);

  }

  this.createEvent = function(name, args){

    var e = document.createEvent("CustomEvent");
    e.initCustomEvent(name, true, false, args);
    e.detail = args;
    return e;

  }

  this.init = function(){

    _event = this.createEvent(_query.getEventName(), _query.values);

  }

  this.getEvent = function(){

    return _event;

  }

  this.init();


}
