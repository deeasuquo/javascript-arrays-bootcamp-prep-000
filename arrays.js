var chocolateBars = ["snickers", "hundred grand", "kitkat","skittles"]
function addElementToBeginningOfArray(array,element){
  return [element, ...array]
  
  // var newArray = array;
  // newArray.unshift(element)
  // return  newArray
}
function destructivelyAddElementToBeginningOfArray(array,element){
 array.unshift(element)
 return array
}
function addElementToEndOfArray(array,element){
  return [...array,element]
}
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}
function accessElementInArray(array,index) {
  var newArray = array;
  return newArray[index]
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}
function removeElementFromBeginningOfArray(array) {
 var whateverarray= array;
 whateverarray.shift()
 return whateverarray
}