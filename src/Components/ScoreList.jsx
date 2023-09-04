import React from 'react'


const scores = [
  { id: 1, score: 80 },
  { id: 2, score: 75 },
  { id: 3, score: 90 },
  { id: 4, score: 65 },
  { id: 5, score: 95 },
  { id: 6, score: 85 },
  { id: 7, score: 80 }
]



const ScoreList = () => {
    
  return (
    <ul>
      {scores.map((score)=> (
        <li 
        key={score.id}
        style={{backgroundColor: score.score >= 80 ? 'green' : 'red', color: score.score >= 80 ? 'white' : 'blue'}}
        >
          Score: {score.score}
        </li>
      ))}
    </ul>
  )
}

export default ScoreList

