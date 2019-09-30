//VARIATION 1
function staircase(n) {
for(i = 0; i < n; i++){
    var output = "";
    for(j = n; j > 0; j--){
      if(i < j - 1){
      output+="*";
      }else{
      output+="#";
      }
    }
    console.log(output);
  }
}
  return(staircase(6))
  /*
  OUTPUT
     #
    ##
   ###
  ####
 #####
######
  */
