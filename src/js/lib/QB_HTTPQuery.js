function QB_HTTPQuery(){

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
    var rParam = new QB_QueryParameters();

    //loop throw key=val query parameters
    for( var i = 0; i < param.length; i++ ){

      var keyVal = param[i].split('=');
      rParam.values[keyVal[0]] = keyVal[1];

    }

    return rParam;

  }

}
