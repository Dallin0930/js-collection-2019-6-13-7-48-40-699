'use strict';

function grouping_count(collection) {

  var result={ };
  for(var i=0;i<collection.length;i++){
    if(collection[i] in result)
    {
       result[collection[i]]++
    } else{
       result[collection]=1;
    }
  }
   return result; 
}

module.exports = grouping_count;
