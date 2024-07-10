import { useEffect, useState } from 'react'

export function App () {
  const CAT_RANDOM_FACT = 'https://catfact.ninja/fact'
  // const CAT_URL_IMG = `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=redjson=true`
  const [fact, setFact] = useState(null)
  const [imgCat, setImgCat] = useState(null)

  useEffect(() => {
    fetch(CAT_RANDOM_FACT)
      .then(response => response.json())
      .then(data => {
        const fact = data.fact // equivalente a const { fact } = data
        setFact(fact)
        const firstWord = fact.split(' ')[0]

        fetch(`https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=redjson=true`)
          .then(response => response.json())
          .then(img => {
            console.log(img)
            setImgCat(img)
          })
      }
      )
  }, [])
  return (
    <>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
      <img src={imgCat} alt='Imagen extraida usando la primera palabra de la frase anterior' />
    </>
  )
}
