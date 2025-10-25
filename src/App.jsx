import { useState } from 'react'
import './App.css'
import yakubovichSvg from './assets/yakubovich.svg'
import alexanderSvg from './assets/alexander.svg'

function App() {
  const [isSpinning, setIsSpinning] = useState(false)
  const [selectedName, setSelectedName] = useState('')
  const [showResult, setShowResult] = useState(false)
  const [yakubovichSpeech, setYakubovichSpeech] = useState('Крутите барабан!')

  const wheelSegments = ["Anton", "Mikhail", "Ivan", "Vlad", "Yauheni"]

  const spinWheel = () => {
    if (isSpinning) return

    setIsSpinning(true)
    setShowResult(false)
    setSelectedName('')
    setYakubovichSpeech('Крутится барабан...')

    // Simulate spinning for 3 seconds
    setTimeout(() => {
      const randomSegment = wheelSegments[Math.floor(Math.random() * wheelSegments.length)]
      setSelectedName(randomSegment)
      setIsSpinning(false)
      setShowResult(true)

      // Reset speech after 5 seconds
      setTimeout(() => {
        setYakubovichSpeech('Крутите барабан!')
      }, 5000)
    }, 3000)
  }

  return (
    <div className="game-container">
      {/* Leonid Yakubovich behind wheel */}
      <div className="yakubovich-behind">
        <div className="yakubovich">
          <div className="speech-bubble">
            <p>{yakubovichSpeech}</p>
          </div>
          <div className="yakubovich-body">
            <img
              src={selectedName === 'Yauheni' ? alexanderSvg : yakubovichSvg}
              alt={selectedName === 'Yauheni' ? 'Alexander' : 'Leonid Yakubovich'}
            />
          </div>
        </div>
      </div>

      {/* Game title */}
      <h1 className="game-title">ПОЛЕ ЧУДЕС</h1>

      {/* Main game area */}
      <div className="game-area">
        {/* People around the wheel */}
        <div className="people-container">
         </div>

        {/* The wheel */}
        <div className="wheel-container">
          {/* External triangle pointer */}
          <div className="external-pointer">◄</div>
          <div
            className={`wheel ${isSpinning ? 'spinning' : ''}`}
            onClick={spinWheel}
          >
            <div className="wheel-center">
              {!isSpinning && !showResult && <p>Нажмите для<br/>вращения</p>}
              {isSpinning && <p>Крутится...</p>}
            </div>
            {/* Wheel segments */}
            {wheelSegments.map((name, index) => (
              <div key={index} className={`wheel-segment segment-${index + 1}`}>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Result display */}
      {showResult && (
        <div className="result-display">
          <h2>Выпало: {selectedName}</h2>
        </div>
      )}
    </div>
  )
}

export default App
