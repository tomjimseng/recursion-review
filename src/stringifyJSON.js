// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  // var stringify = '';

  if (obj === undefined) {
    return 'undefined';
  }

  if (obj === null) {
    return 'null';
  }

  if (typeof obj === 'number') {
    return obj.toString();
  }

  if (typeof obj === 'boolean') {
    return obj.toString();
  }

  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }

  if (Array.isArray(obj) && obj.length === 0) {
    return '[]';
  }

  if (Array.isArray(obj) && obj.length > 0) {
    var newArr = '[';
    for (var i = 0; i < obj.length; i++) {
      newArr += stringifyJSON(obj[i]);
      if (i === obj.length - 1) {
        break;
      }
      newArr += ',';
    }
    return newArr += ']';
  }

  if (typeof obj === 'object' && Object.keys(obj).length === 0) {
    return '{}';
  }

  if (typeof obj === 'object' && Object.keys(obj).length > 0) {
    var string = '';
    for (var key in obj) {
      if (typeof obj[key] === 'function' || obj[key] === undefined) {
        return '{}';
      }
      string += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
    }
    return '{' + string.slice(0, string.length - 1) + '}';
  }
};