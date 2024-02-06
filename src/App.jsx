import { useState } from 'react';
import { faqData } from './data.js';

const App = () => {
  const [isClicked, setIsClicked] = useState(false);

  const toggleFaq = (index) => {
    if (isClicked === index) {
      return setIsClicked(false);
    } else {
      setIsClicked(index);
    }
  };

  return (
    <>
      <div className="accordion">
        {faqData.map((item, index) => (
          <div key={index} className="faq" onClick={() => toggleFaq(index)}>
            <div className="title">
              <h1>{item.question}</h1>
              {isClicked === index ? (
                <i className="fa-solid fa-minus"></i>
              ) : (
                <i className="fa-solid fa-plus"></i>
              )}
            </div>

            <div className={`content ${isClicked === index ? 'show' : ''}`}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
