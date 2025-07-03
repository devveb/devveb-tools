import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)
    const [message, setMessage] = useState('') // 서버 메시지 상태 추가

    const handleClick = () => {
        axios.get('http://localhost:8080/api/hello')
            .then(res => {
                console.log(res.data)
                setMessage(res.data)
            })
            .catch(err => {
                console.error('API 호출 오류:', err)
                setMessage('오류 발생')
            })

        setCount((count) => count + 1)
    }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
        <div className="card">
            <button onClick={handleClick}>
                Health Check
            </button>
            <p>
                서버 응답: <strong>{message}</strong>
            </p>
        </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
