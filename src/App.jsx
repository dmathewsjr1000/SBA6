import { useState, useEffect } from "react"
import Form from "./Components/Form"
import CardDisplay from "./Components/CardDisplay"

function App() {
  const [card, setCard] = useState(null)

  const getCard = async (searchTerm) => {
    const res = await fetch(`https://api.scryfall.com/cards/named?fuzzy=${searchTerm}`)
    const data = await res.json()

    console.log(data);
    setCard(data)
  }

  const getRandom = async () => {
    const res = await fetch('https://api.scryfall.com/cards/random')
    const data = await res.json()

    console.log(data);
    setCard(data)
  }

  useEffect(() => {
    console.log('running useEffect.....');
    getRandom()
  }, [])

  return (
    <>
      <div>
       
      <h1>SBA6</h1>

      <Form cardsearch={getCard}/>
      { card && <CardDisplay card={card}/> }
      
      </div>
      
    </>
  )
}

export default App
