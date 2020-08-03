import React, { useState } from 'react'
import ReactDOM from 'react-dom'
/*const Statistics = (props) => (
<div> {props.average}</div>
)*/
const Statistics = (props) => {
    
    let numero=props.goods+props.neutrals+props.bads
    let total = 0

    for(var i = 0; i < props.goods; i++) {
      total += 1;
  }
    for(var p = 0; p < props.bads; p++) {
    total -= 1;
}
    total/=numero
    let positive=0
    positive= props.goods/numero
    positive*=100
    positive = positive + "%"
  if(props.goods===0&&props.neutrals===0&&props.bads===0){
    return(
      <tr><td>No feedback given</td></tr>
    )
  }
  return(
  <>
  <StatisticLine type="Good" value={props.goods} />
  <StatisticLine type="Neutral" value={props.neutrals} />
  <StatisticLine type="Bad" value={props.bads} />
  <StatisticLine type="Average" value={total} />
  <StatisticLine type="Positive" value={positive} />
  </>
  /*<><div>All:{numero}</div>
  <div>Average: {total}</div>
  <div>Positive:{positive} %</div></>*/
    )
}

const StatisticLine = (props) => {

  return(
  <tr><td>{props.type}:{props.value}</td></tr>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
  
)
const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0) 
  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good+1)} text="good" />
      <Button handleClick={() => setNeutral(neutral+1)} text="neutral" />
      <Button handleClick={() => setBad(bad+1)} text="bad" />

      <h1>statistics</h1>
      <table><tbody>
       <Statistics goods={good} bads={bad} neutrals={neutral} />
       </tbody></table>

    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)