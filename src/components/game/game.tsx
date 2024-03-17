import { useGlobalContext } from '../../globalContext';
import './game.css';
import GameButton from './gamebutton/gamebutton';
interface Props {
  name: string,
  image: string,
  linkPlay: string,
  linkGitHub: string,
  controls: string
}
const Game: React.FC<Props> = ({ name, image, linkPlay, linkGitHub, controls }) => {
  const { setModal } = useGlobalContext();
  return (
    <div className='game'>
      <img className='game-img' src={image} alt={name} />
      <div className='game-buttons'>
        <GameButton text='' action={() => {
          window.open(linkPlay, "_blank");
        }} icon='play.svg' />
        <GameButton text='' action={() => {
          window.open(linkGitHub, "_blank");
        }} icon='github.svg' />
      </div>
      <div className='game-buttons'>
        <GameButton text='Controls' action={() => {
          document.querySelector(".app")?.scrollTo(0, 0);
          setModal([true, controls]);
        }} />
      </div>
    </div>
  )
}
export default Game;