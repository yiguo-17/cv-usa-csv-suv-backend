const totalCaseChange = function(data,date1,date2){
    let total1 =0 ;
    let total2 = 0;
    for (const line of data){
        if(line[3]===date1){total1 += line[4]}
        if(line[3]===date2){total2 += line[4]}
    }
    return total2 -total1;
}
const newCaseChange = function(data,date1,date2){
    let newCase1 =0 ;
    let newCase2 = 0;
    for (const line of data){
        if(line[3]===date1){newCase1 += line[5]}
        if(line[3]===date2){newCase2 += line[5]}
    }
    return newCase2-newCase1;
}
module.exports = totalCaseChange;
module.exports = newCaseChange;
