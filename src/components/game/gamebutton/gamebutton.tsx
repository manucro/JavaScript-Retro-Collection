import './gamebutton.css';
interface Props {
  text: string,
  action: () => void,
  icon?: string
}
const GameButton: React.FC<Props> = ({ text, action, icon }) => {
  return (
    <div className='game-button' onClick={action}>
      {(icon !== undefined) ? <img className='game-button-icon' src={icon} alt={icon} />
        : text}
    </div>
  )
}
export default GameButton;