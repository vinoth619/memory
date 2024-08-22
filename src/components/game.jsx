import { useEffect, useRef, useState } from "react";
import Flexcard from "./flexcard";
import Score from "./score";
import './game.css'
import  sounds from'./sound-1-167181.mp3'
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import winsound from "./goodresult-82807.mp3"
import cong_sound from "./congratulations-deep-voice-172193.mp3"
import gameover from "./game-over-arcade-6435.mp3"
import  playgame from "./Monkeys-Spinning-Monkeys(chosic.com).mp3"


import { DialogActions, DialogContent } from "@mui/material";


  function Game(){
    const [cards,upcards]=useState([]);
    const [hide,sethide]=useState(false);
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(5);
    const [openDialog, handleDisplay] = useState(false);
    const [windia,windiaup]=useState(false)
    const [count,setcount]=useState(0)
    
     
    var API_KEY = '45521064-bfe92e8ffa77d829a04dba163';
   
    const [url,urlupdate]=useState(`https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(
      "ai generated small dragons gif"
    )}&per_page=5`)

     const easy=(()=>{
      new Audio(sounds).play()
      urlupdate(`https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(
        "ai generated small dragons gif"
      )}&per_page=5`)
      setScore(0);
      setcount(0)
      setBestScore(5)
    })

    const hard=(()=>{
      new Audio(sounds).play()
      urlupdate(`https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(
        "ai generated small dragons"
      )}&per_page=50`)
      setScore(0);
      setcount(0)
      setBestScore(50)
    })

    const medium=(()=>{
      new Audio(sounds).play()
      urlupdate(`https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(
        "ai generated small dragons gif"
      )}&per_page=20`)
      setScore(0);
      setcount(0)
      setBestScore(20)

    })
  
   useEffect(()=>{
   fetch(url)
   .then((e)=>e.json())
   .then((data) => {
    const fetchedCards = data.hits.map((hit) => (    
    {
      id: hit.id,
      imgUrl: hit.webformatURL,
      clicked: false,
    }));
    upcards(shcard(fetchedCards));
  }).catch((e)=>console.log("ERROR FOUND"+e))

   },[url])

   useEffect(()=>{
    if(count!=0 &&score==0){
       new Audio(gameover).play()

      fetch(url)
      .then((e)=>e.json())
      .then((data) => {
       const fetchedCards = data.hits.map((hit) => (    
       {
         id: hit.id,
         imgUrl: hit.webformatURL,
         clicked: false,
       }));
       upcards(shcard(fetchedCards));
     }).catch((e)=>console.log("ERROR FOUND"+e))
     sethide(true)

      setScore(0)
      setcount(0)
     
    }
    if(score==bestScore){
      new Audio(winsound).play()
     
      windiaup(true)
      new Audio(cong_sound).play()
      setScore(0)
      setcount(0)
    }
  
   })


   const shcard=((e)=>{
    return  e.sort(()=>Math.random()-0.5)

   })

    const handleClick = (id) => {
    
      new Audio(sounds).play()
     

    const updatedCards = cards.map((card) => {
       

      if (card.id === id) {
        if (card.clicked) {
          setScore(0);
          return { ...card, clicked: false };
        } else {
          setScore((prevScore) => prevScore + 1);
          setcount((pre)=>pre+1)
         
          return { ...card, clicked: true };
        }
      }
      return card;
    });

    
    upcards(shcard(updatedCards));

  
  };

  

   const handleclose=(()=>{
      sethide(false)
      windiaup(false)
  })





  

 

    return (
        <>
    
<marquee  behavior="" direction="down left"> 
$ Don't click the same img Twice !! if you click you will Lose the  Memory-game</marquee>
      
       
       {/* {score!=bestScore?<h1>{new Audio(playgame).play()}</h1>:null} */}
                    
        {/* ......... ....................... */}
       {/* .......... */}
       <br></br>
       <br/>
       <div> <button  className="butur" disabled={bestScore==5?true:false} onClick={easy}>EASY</button>
       <button  className="butur"disabled={bestScore==20?true:false} onClick={medium}>medium</button>

       <button className="butur" disabled={bestScore==50?true:false} onClick={hard}>hard</button>
       <Score  score={score} bestScore={bestScore} /></div>


        <Flexcard cards={cards}   handleclick={handleClick}/>


        
            <Dialog   PaperProps={{
                 style: {
              backgroundColor: 'rgb(9, 9, 31)',
              color:'white',
              border:'1px solid white',
              fontFamily:"fantasy"

           },
  }} open={hide} onClose={handleclose}  >
            <DialogTitle><h2>YOU LOSE THE GAME </h2> </DialogTitle>
            <DialogContent><h1 id="pep">🥺 😞 😩</h1><p>you did click the same img two Times</p></DialogContent>
            <DialogActions><button onClick={handleclose} id="re">close</button></DialogActions>
        </Dialog>


        {/*  */}
        <Dialog   PaperProps={{
                 style: {
              backgroundColor: 'rgb(9, 9, 31)',
              color:'white',
              border:'1px solid white',
              fontFamily:"fantasy"

           },
  }} open={windia} onClose={handleclose}  >
            <DialogTitle><h2> 💫YOU WIN THE GAME 💫</h2> </DialogTitle>
            <DialogContent><h1 id="pep">😎</h1><p>👌congratulations👌</p></DialogContent>
            <DialogActions><button onClick={handleclose} id="re">close</button></DialogActions>
        </Dialog>
       

        </>
    )
  }
  export default Game;