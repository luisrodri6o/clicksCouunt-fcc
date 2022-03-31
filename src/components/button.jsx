
import '../styleSheeds/button.css'

function Button ({text,ifclicksbutton, driver}){
  return (
    <button className= {ifclicksbutton ? 'click-btn' : 'reset-btn' }
    onClick={driver}
    >
    {text} 
    </button>

  )
}      
export default Button;                                             