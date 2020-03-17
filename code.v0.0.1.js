/*
https://www.youtube.com/channel/UC8p19gUXJYTsUPEpusHgteQ/featured
https://www.chicagocomputerclasses.com/youtube-learn-google-spreadsheets/

How to install:
https://youtu.be/93JfUPdnLhE

Dependencies:
https://github.com/agershun/alasql
*/
function SUPERSQL(sqlAsString,dataAsArray1,...dataAsArrays) {
  
  let sqlData = [arrayToObjectOfArrays(dataAsArray1)];
  dataAsArrays.forEach(ar => sqlData.push(arrayToObjectOfArrays(ar)));
  
  let res = alasql(sqlAsString,sqlData);
  
  let keys = new Set();
  res.forEach(r => Object.keys(r).forEach(k => keys.add(k)));
  let keysArray = [...keys];
  
  let newRes = res.map(r => keysArray.map(k => r[k]));
  newRes.unshift(keysArray);
  
  return newRes;
  
}


let arrayToObjectOfArrays = function(data){

   data = data.filter(r => !r.every(c => c==""));

   let headers = data.shift();
  
    return data.map(r => {
      
        let obj = {};
        
        r.forEach((cell,i) => {
          obj[headers[i]] = cell;
        });
        
        return obj;
    
    });   

}
