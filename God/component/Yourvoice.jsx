import React from 'react'
import '../style/Yourvoice.css'
import { useNavigate } from 'react-router-dom'

export default function Yourvoice() {
    const navigate = useNavigate()
    const next3 =()=>{
        navigate('/Hellostyle')
    }
  return (
    <>
      <div className="bigcon3">
                <div className="card3">
                  
                    <div className="card-content">
                        <h1>Tumhari Awaaz</h1>
                        <p>
                        Tumhari awaaz sunna mere din ka sabse accha hissa hota hai. Tumhari baatein itni pyari aur energizing hoti hain ki main har baar tumhari call ka intezaar karta hoon. Tumhari awaaz jaise ek musical note hai jo mere dil ko chhoo jata hai. Har bar jab tum mujhe call karti ho, mujhe ek nayi umeed aur khushi milti hai. Tumhari awaaz mere liye ek anmol tohfa hai.
                        </p>
                        <button onClick={next3}>Next</button>
                    </div>
                </div>
            </div>
    </>
  )
}
