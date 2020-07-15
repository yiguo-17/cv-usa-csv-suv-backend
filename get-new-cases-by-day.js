const getNewCasesByDay = function(date,arr){
  for(const subArr of arr){
    if(subArr[3]===date){return subArr[5]}
  }
}




if (typeof getNewCasesByDay === 'undefined') {
  getNewCasesByDay = undefined;
}


module.exports = getNewCasesByDay;
