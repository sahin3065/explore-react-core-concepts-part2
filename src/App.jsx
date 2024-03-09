
import './App.css'
import Counter from './counter'
import Team from './team'

function App() {

   function handleClick(){
    alert('button click')
   }

   const handleClick2 = () =>{
    alert('button click 2')
   }

 const addToFive = (num) =>{
  alert(num + 5);
 }

  return (
    <>
      <h3>React Core Concepts 2</h3>
        
        <Team></Team>

      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={() =>{alert('third clicked')}}>Third</button>
      <button onClick={() => addToFive(3)}>Four</button>     
    </>
  )
}

export default App
