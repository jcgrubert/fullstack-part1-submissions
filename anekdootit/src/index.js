import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)
const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] =useState(new Array(6).fill(0))
  const [max, setMax] = useState(0)
    useEffect(() => {
      let i = votes.indexOf(Math.max(...votes));
      setMax(i);
    },[votes]); 
  function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function voteMe(){
    const copy = [...votes]
    copy[selected]+=1
    setVotes(copy)
  }
 
  const showRandom = () => {
    setSelected(randomIntFromInterval(0,5))
      }
  return (
    <>
    <div>
      <h1>Anecdote of the day:</h1>
      <Button text="Random" handleClick={() => showRandom()} />
      <Button text="Vote" handleClick={()=> voteMe()} />
      {props.anecdotes[selected]}
  <p>This anecdote has {votes[selected]} votes.</p>
    </div>
    <div>
      <h1>Anecdote with the most votes:</h1>
      {props.anecdotes[max]}
    </div>
    </>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)