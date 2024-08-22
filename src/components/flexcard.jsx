
   import Card from "./card";
function  Flexcard(props){
    const{cards,handleclick}=props

    const visibleCards = cards.slice(0, 10);
    return (
        <div className='card-flex'>
            {visibleCards.map(card => (
                <Card key={card.id} card={card} onClick={() => handleclick(card.id)} />
            ))}
        </div>
    );
  };

export default Flexcard;