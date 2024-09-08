import React from 'react'
import '../style/Chat.css'
import { useNavigate } from 'react-router-dom'

export default function Chat() {
    const navigate = useNavigate()
    const next6 = () => {
        navigate('/tum-hi-ho')
    }
    return (

        <>
            <div className="bigcon5">
                <div className="card5">
                  
                    <div className="card-content">
                        <h1>Jab Main Chat Karte Karate Ruk Jata Hu</h1>
                        <p>
                            Arre, jab main chat karte karte ruk jata hoon, toh kabhi yeh mat samajhna ki main tumse baat nahi karna chahta.
                            Actually,jab main chat rukta hoon, toh iska matlab yeh nahi ki meri feelings khatam ho gayi hain. Bas kuch samay ke liye mere paas words khatam ho jate hain. Tumhare saath chat karte waqt, main hamesha chahata hoon ki tumhara din achha rahe aur tumhara chehra khilte rahe.Ho sakta hai mere messages ki quantity kam ho, par unka quality bada hi hota hai! Tumhare liye meri feelings hi toh important hain, aur woh kabhi kam nahi hoti. Tumhare saath baat karna mere liye hamesha special hai, chahe mere messages jitni bhi short kyun na ho.Agar kabhi tumhe lage ki main chup hoon, toh samajh lo ki main bas tumhare baare mein soch raha hoon aur tumhe smile dekhne ke liye wait kar raha hoon.
                        </p>
                        <button onClick={next6}>Next</button>
                    </div>
                </div>
            </div>
        </>
    )
}
