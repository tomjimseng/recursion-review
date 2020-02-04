// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node) {
  // your code here
  var Arr = [];

  node = node || document.body;

  var recurseElements = function (className, node) {
    if (node.classList && node.classList.contains(className)) {
      Arr.push(node);
    }

    //childNodes
    for (var i = 0; i < node.childNodes.length; i++) {
      recurseElements(className, node.childNodes[i]);
    }
  };
  recurseElements(className, document.body);
  return Arr;
};