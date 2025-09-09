import { useState } from 'react'
import './App.css'
import Modal from './component/Modal'

function App() {
  const [open, setIsOpen] = useState(false)

  return (
    <>
    <div className='main'>
      <h1>User Details Modal</h1>
      <button onClick={()=>setIsOpen(true)}>Open Form</button>
      {open && <Modal setIsOpen={setIsOpen} />}
    </div>
    </>
  )
}

export default App
