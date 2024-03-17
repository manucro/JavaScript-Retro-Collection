import './App.css';
import { useState } from 'react';
import Game from './components/game/game';
import Title from './components/title/title';
import { GlobalContext } from './globalContext';
function App() {
  const [modal, setModal] = useState<[boolean, string]>([false, '']);
  return (
    <div className='app'>
      {(modal[0]) ? <div className='modal'>
        <div className='modal-box'>
          <div className='modal-x-button' onClick={() => setModal([false, ''])}>X</div>
          <pre className='modal-text'>{modal[1]}</pre>
        </div>
      </div> : void 0}
      <Title />
      <GlobalContext.Provider value={{ setModal }}>
        <div className='game-box'>
          <Game name='Space Invaders' image='si.jpg' linkPlay='https://spaceinvaders32.glitch.me/' linkGitHub='https://github.com/ManuMan32/Space-Invaders' controls={`Arrows: Move
Space: Shoot
The objective of the game is to beat the first ten levels.`} />
          <Game name='Snake' image='sn.jpg' linkPlay='https://snake-javascript.glitch.me/' linkGitHub='https://github.com/ManuMan32/Snake-Game' controls={`Arrows: Move
Get as many points as you can by avoiding crashing into walls or your own body.`} />
          <Game name='Pong' image='pn.jpg' linkPlay='https://pong32.glitch.me/' linkGitHub='https://github.com/ManuMan32/Pong' controls={`Arrows: Move Player 1
A - D: Move Player 2
Local multiplayer game in which each player must try to get the ball to the opponent's court.`} />
        </div>
        <div className='credits'>
          Games made by <a href='https://manuelcrocco.glitch.me/'>Manuel Crocco</a>. Read more about me <a href='https://twitter.com/ManuCro32'>here</a>.
        </div>
      </GlobalContext.Provider>
    </div>
  )
}
export default App;