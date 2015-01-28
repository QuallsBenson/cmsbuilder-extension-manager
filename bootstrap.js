

function EventResponder(){

  this.on = function(eventName, callback){

    document.addEventListener(eventName, callback);

    return this;

  };

}


function Dispatcher(query){

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

function QueryParameters(){

  this.values = {};

  this.getEventName = function(){

    var menu   = this.values.menu,
        action = this.values.action;


    if(action) menu += '.' + action;

    return menu;

  }

}


function HTTPQuery(){

  var _getParam = false;


  this.get = function(paramName){

    if(_getParam !== false) return _getParam;

    var query = window.location.search.substring(1);
    _getParam = this.parseQueryString(query);


    //return empty object if not or set object property
    if(_getParam.length === 0)
      return rParam;

    //if user asks for specific get query argument return it, or undefined obj property
    if(paramName && ( typeof paramName ) === 'string'  )
      return _getParam[paramName];

    return _getParam;
  }

  this.parseQueryString = function($string){

    var query  = $string;
    var param  = query.split('&');
    var rParam = new QueryParameters();

    //loop throw key=val query parameters
    for( var i = 0; i < param.length; i++ ){

      var keyVal = param[i].split('=');
      rParam.values[keyVal[0]] = keyVal[1];

    }

    return rParam;

  }

}

$(document).ready(function(){

  var Resp = new EventResponder();

  Resp
  .on('news.edit', function(e){

    alert(e.detail.menu);

  })
  .on('news.edit', function(e){

    console.log(e.detail);

  });


  var Http = new HTTPQuery();
  var Disp = new Dispatcher(Http.get());
  Disp.dispatch();  

});
