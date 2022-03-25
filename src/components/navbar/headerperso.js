import './headerperso.css'
import image from '../../assets/sid.png'

function headerperso() {
  return (
    <div className="headerperso">
        <img src={image} alt="sid" />
        <p>HEADER</p>
    </div>
  );
}

export default headerperso;
