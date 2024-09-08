import React from 'react'
import '../style/Firstday.css'
import { useNavigate } from 'react-router-dom'


export default function Firstday() {
    const navigate = useNavigate()

    const next2 = () => {
        navigate('/Your-voice')
    }
    return (
        <>
            <div className="bigcon2">
                <div className="card2">
                  
                    <div className="card-content">
                        <h1>Vo pehla din</h1>
                        <p>
                            30 August ka din mere liye ek sapne se kam nahi tha. Jab humne pehli baar baat ki, toh mere dil ne kuch ajeeb si baat mehsoos ki. Tumhari awaaz sunke laga jaise main tumhe solon se janta hoon, jaise humne zindagi bhar ki dosti ki ho.

                            Woh din mere liye ek nayi kahani ka shuruaat tha, Tumhari awaaz mein ek aisi khushboo thi jo mere dil ko chu gayi.

                            Mujhe yaad hai ki main us din kitna shocked tha, par usi waqt mujhe yeh bhi samajh aa gaya tha ki tum mere liye ek khas aur anmol insan ho.
                        </p>
                        <button onClick={next2}>Next</button>
                    </div>
                </div>
            </div>
        </>
    )
}
