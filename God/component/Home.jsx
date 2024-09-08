import React from 'react';
import '../style/Home.css';
import { useNavigate } from 'react-router-dom';

export default function Home() {

    const navigate = useNavigate()
    const next = ()=>{
        navigate('/Firstday')
    }

  return (
    <>
      <div className="bigcon">
        <div className="card1">
          <img
            src='https://i.pinimg.com/564x/be/aa/e1/beaae1fe62f47d2d9aaa089752ad0f53.jpg'
            alt="Background"
            className="card-img"
          />
          <div className="card-content">
            <h1>Tumhare Liye Ek Khaas Paigham</h1>
            <p>
              Hi Himanshi! Main chahata hoon ki tumhe yeh special site dikhau. Yeh sirf ek website nahi hai, yeh meri taraf se tumhare liye ek heartfelt paigham hai. Ismein main tumhe batane ki koshish karunga ki tum meri zindagi mein kitni important ho aur tumhare aane se meri zindagi me kya huaa hai.
            </p>
            <button onClick={next}>Next</button>
          </div>
        </div>
      </div>
    </>
  );
}
