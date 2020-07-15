const getTotalCasesByDay = function(date,arr){
  for(const subArr of arr){
    if(subArr[3]===date){return subArr[4]}
  }
}





if (typeof getTotalCasesByDay === 'undefined') {
  getTotalCasesByDay = undefined;
}


module.exports = getTotalCasesByDay;
