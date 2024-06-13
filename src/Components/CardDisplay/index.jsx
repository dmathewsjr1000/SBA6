function CardDisplay({ card }) {
    return (
        <div>
            <h1>{card.name}</h1>
            <div>
            <h2>Mana Cost: {card.mana_cost}</h2>
            <h3>CMC: {card.cmc}</h3>
            </div>
            <img src={card.image_uris.png} alt={card.name} />
            <h3>Card Type: {card.type_line}</h3>
            <p>{card.oracle_text}</p>
        </div>
    )
}


export default CardDisplay