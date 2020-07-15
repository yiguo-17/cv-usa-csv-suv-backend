const getRow = function(commaStr){
  const row  = [];
  const commaIndex = [];
  for (let i =0; i<commaStr.length; i++){
    if(commaStr[i]===','){commaIndex.push(i);}
  }
  row. push(commaStr.substring(0,commaIndex[0]));
  for (let j =0; j< commaIndex.length;j++){
    row.push(commaStr.substring(commaIndex[j]+1,commaIndex[j+1]));
  }
  return row;
}


if (typeof getRow === 'undefined') {
  getRow = undefined;
}


module.exports = getRow;
