// add solution here

function theBeatlesPlay(array_musicians, array_instr)
{
  var local_array = [];
  for(i = 0; i < array_musicians.length ; i++ )
  {
    var temp = array_musicians[i];
    var temp2 = " plays ";
    var temp3 = array_instr[i];
    
    temp.concat(temp2, temp3);
    
    local_array.push(temp);
    
  }
  
  return local_array;
}

function johnLennonFacts(array_facts){
  
}