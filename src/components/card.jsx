import { useEffect } from 'react'
import './game.css'


function Card(props){

    useEffect(()=>{
        
    },[])
    const {card,onClick}=props
    return(
        <>
      <div className='cards' onClick={onClick}>
          <img src={card.imgUrl} alt={`Card ${card.id}`} />
      </div>
  
        </>
    )
}
export default Card