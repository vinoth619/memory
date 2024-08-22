
import { useEffect, useState } from "react";
import React from "react";
function Score(props){
    var{score,bestScore} =props

  
   

  
    
   

  

   
  
    return(
        <>
        <div id="scoretable">
        <h3>score  : {score}</h3>
        <h3>Target: {bestScore}</h3>
        </div>
   

        </>
    )
}
export default Score;