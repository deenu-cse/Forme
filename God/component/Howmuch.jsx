import React, { useState } from 'react';
import axios from 'axios';
import '../style/Howmuch.css';

export default function Howmuch() {
  const [message, setMessage] = useState('');
  const [loveLevel, setLoveLevel] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (event) => {
    setLoveLevel(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!loveLevel || !message) {
      setError('Please fill all the requirements! 💌');
    } else {
      setError('');
      try {
        await axios.post('https://forme-a509.onrender.com/submit', { loveLevel, message });
        console.log(response.data);
        setSuccess(true);
        setSubmitted(true);
      } catch (err) {
        setError('Failed to save data. Please try again. 💔');
      }
    }
  };

  const loveMessages = {
    Unlimited: 'You are my everything! 💖',
    Limited: 'You mean so much to me! 🌟',
    Some: 'You are special! 💕',
    ALittle: 'You have a special place in my heart! 💘'
  };

  return (
    <div className="bigcon8">
      <div className="card8">
        <div className="card-content">
          <h1>How Much Do You Love Me...🥲</h1>
          {submitted ? (
            <div className="thank-you-message">
              <h2>Thank you! ❤️</h2>
              <p>Your love means the world to me!</p>
            </div>
          ) : (
            <form className="love-form" onSubmit={handleSubmit}>
              <div className="love-level">
                <input
                  type="radio"
                  id="unlimited"
                  name="love"
                  value="Unlimited"
                  checked={loveLevel === 'Unlimited'}
                  onChange={handleChange}
                />
                <label htmlFor="unlimited">Unlimited</label>
              </div>
              <div className="love-level">
                <input
                  type="radio"
                  id="limited"
                  name="love"
                  value="Limited"
                  checked={loveLevel === 'Limited'}
                  onChange={handleChange}
                />
                <label htmlFor="limited">Limited</label>
              </div>
              <div className="love-level">
                <input
                  type="radio"
                  id="some"
                  name="love"
                  value="Some"
                  checked={loveLevel === 'Some'}
                  onChange={handleChange}
                />
                <label htmlFor="some">Some</label>
              </div>
              <div className="love-level">
                <input
                  type="radio"
                  id="a_little"
                  name="love"
                  value="ALittle"
                  checked={loveLevel === 'ALittle'}
                  onChange={handleChange}
                />
                <label htmlFor="a_little">A Little</label>
              </div>
              {loveLevel && !submitted && (
                <div className="love-message">
                  <h3>{loveMessages[loveLevel]}</h3>
                </div>
              )}
              <div className="message-box">
                <label htmlFor="message">What do you think about me?</label>
                <textarea
                  className="final-message"
                  rows="4"
                  placeholder="Write your message here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              {error && <p className="error-message">{error}</p>}
              <button type="submit">Submit</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
