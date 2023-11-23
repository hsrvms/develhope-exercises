import { useContext,  } from 'react'
import { LanguageContext } from '../../LanguageContext'
import './Clock.css'


const Clock = () => {

  const lang = useContext(LanguageContext)

  return (
    <div className="clock">
      <div>{lang === 'en' ? 'Current Time' : 'Simdiki Zaman'}</div>
      <div>Clock</div>
      <br />
    </div>
  )
}

export default Clock