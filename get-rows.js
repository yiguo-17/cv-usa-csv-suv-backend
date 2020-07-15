const newRow = require('./get-row.js');
const getRows = function(str){
  const lines=[];
  const rows =[];
  const row  = [];
  const newLineIndex = [];
  for (let i =0; i< str.length; i++){
    if(str[i]==='\n'){newLineIndex.push(i);}
  }
  lines. push(str.substring(0,newLineIndex[0]));
  for (let j =0; j< newLineIndex.length;j++){
    lines.push(str.substring(newLineIndex[j]+1,newLineIndex[j+1]));
  }
  
  for(const line of lines){
    rows.push(newRow(line));
  }

  return rows;
}




if (typeof getRows === 'undefined') {
  getRows = undefined;
}


module.exports = getRows;
