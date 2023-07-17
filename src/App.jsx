import './App.css'

export default function App() {
  function startTimer(){
    
  }
  function stopTimer(){
    
  }
  function resetTimer(){
    
  }
  return (
    <main className='container'>
      <h1 className='text-center text-info'>Timer</h1>
      <textarea  className='d-block w-100 form-control resize-none' rows='7'>
     
      </textarea>
      <button className="m-2 btn btn-success" onClick={startTimer}>Start</button>
      <button className="m-2 btn btn-primary" onClick={stopTimer}>Stop</button>
      <button className="m-2 btn btn-danger" onClick={resetTimer}>Reset</button>
    </main>
  )
}
