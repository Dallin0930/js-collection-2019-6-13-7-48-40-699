'use strict';

function choose_even(collection) {
    /* var array=new Array();
    for(var i=0;i<collection.length;i++)
    {
      if(collection[i]%2==0)
      {
           array.push(collection[i]);
      }
    }
    return array; */            
      return collection.filter(param=> param%2==0)
}


module.exports = choose_even;      


