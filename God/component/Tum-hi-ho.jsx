import React from 'react'
import '../style/Tumhiho.css'
import { useNavigate } from 'react-router-dom'


export default function Tumhiho() {
    const navigate = useNavigate()
    const next7 = ()=>{
        navigate('/You_love_me')
    }
    return (
        <>
            <div className="bigcon6">
                <div className="card6">
                    <img
                        src='https://i.pinimg.com/564x/9a/e4/ec/9ae4ecf1d166c68c1bcaa03e79f6af5b.jpg'
                        alt="Background"
                        className="card-img"
                    />
                    <div className="card-content">
                        <h1>Please read this carefully! Aur haan poora padhana</h1>
                        <p>
                            Aaj pehali bar me kisi ke liye kuch likh rha hu
                            pta nahi tumhe ye sab pasand aa bhi rha hoga ya nahi ye mat sochana ki ye sab main tumhe ptane ke liye kar rha hu. Ye sab main is liye kar rha hu ki pta nahi main tumhe apni fillings kabhi bta paunga ki nahi is liye main ye tumhe apne passion(development) se bta rha hu.
                            Us pehale din jab mene tumse bat ki tab such me mujhe esa laga ki i had found someone like me.
                            Pta hai ek bat jo ye likhate huee mere dil se jor jor se aa rahi hai vo hai ki tum mere sath raho ya na raho par tum mere dil ke ek kone me hamesa rahogi chahe vo ek memory  ya main khu ki ek best moment ki tarah ho.
                            Wese to mene tumhe message apni girlfriend bnane ke liye hi kiya tha par ab main tumhe force nahi karna chahta ki tum mujhse bat karo hi ya tum meri gf bno hi tumhara jo man hai vo karna mujhe saf mna karne me bhi kabhi mat sarmana bas kah dena! , wese bhi pyar(sayad mujhe ise ab pyar kah dena chahiye 😅) ka matlab hi hota hai ki ek doosre ko khush dekhana
                            Pta hai agar meri life main aani wali ladki tum nahi ho to koi bat nahi par agar vo tum hi ho to mere khushi ka koi thikana nahi....
                        </p>
                        <button onClick={next7}>Next</button>
                    </div>
                </div>
            </div>
        </>
    )
}
