import "./title.css";
import { useEffect } from 'react';
const Title: React.FC = () => {
  useEffect(() => {
    const title = document.querySelector('.title');
    const letters: NodeListOf<HTMLElement> = title!.childNodes as NodeListOf<HTMLElement>;
    letters.forEach((letter, i) => {
      setTimeout(() => {
        letter.style.animation = "3s ease 1s infinite forwards pulseLetter";
      }, 100 * i);
    })
  })
  return (
    <div className="title">
      <span>J</span>
      <span>a</span>
      <span>v</span>
      <span>a</span>
      <span>S</span>
      <span>c</span>
      <span>r</span>
      <span>i</span>
      <span>p</span>
      <span>t</span>
      <span className="space"></span>
      <span>R</span>
      <span>e</span>
      <span>t</span>
      <span>r</span>
      <span>o</span>
      <span className="space"></span>
      <span>C</span>
      <span>o</span>
      <span>l</span>
      <span>l</span>
      <span>e</span>
      <span>c</span>
      <span>t</span>
      <span>i</span>
      <span>o</span>
      <span>n</span>
    </div>
  )
}
export default Title;