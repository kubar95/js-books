import "./styles/main.scss"
import './assets/cross.png'
import init from './js/init';
document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        init()
    }
  };
  
