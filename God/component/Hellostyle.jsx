import React from 'react'
import '../style/Hellostyle.css'
import { useNavigate } from 'react-router-dom'


export default function Hellostyle() {
    const navigate = useNavigate()
    const next5 =()=>{
        navigate('/Chat')
    }
    return (
        <>
            <div className="bigcon4">
                <div className="card4">
                   
                    <div className="card-content">
                        <h1>Tumhara Hello Style</h1>
                        <p>
                            Tumhara “Hello Hanji, kaise ho?” kehne ka style itna cute aur energetic hai ki main hamesha tumhare call ka intezaar karta hoon. Tumhari har baat, tumhara har shabd mere liye ek special moment hota hai. Tumhara unique style mere din ko ek naya rang de dete hain. Tumhara yeh style mere liye ek pyara surprise hai jo hamesha mere chehre par muskurahat le aata hai.
                        </p>
                        <button onClick={next5}>Next</button>
                    </div>
                </div>
            </div>
        </>
    )
}
