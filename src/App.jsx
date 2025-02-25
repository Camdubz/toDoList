import { useState } from 'react'
import './App.css'

function createInitialToDos() {
const initialToDos = [];
for (let i = 0; i < 50; i++) {
  initialToDos.push ({
    id: i,
    text: 'Item ' +  (i+1)
    });
}
return initialToDos
}

export default function toDoList() {
const [todos, setToDos] = useState(createInitialToDos)
const [text, setText] = useState('')
return (
  <>
  <input 
  value={text}
    onChange={e => setText(e.target.value)}
    />
  <button 
    onClick={() => {
      setText('');
      setToDos([{
        id: todos.length,
        text: text
      }, ...todos])
    }}
    >
      Add
  </button>
<ul>
  {todos.map(item => (
<li key={item.id}>
  {item.text}
</li>
  ))}
</ul>
    </>
  )
}


