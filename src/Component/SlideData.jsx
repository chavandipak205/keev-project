import React, { useState } from 'react';
import '../CSS files/Slide.css';
import { marketData } from '../handel';
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

const SlideData = () => {
  const [data, setData] = useState(marketData[0]?.data?.news || []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardWidth = 320; // Width of each card including margin

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, data.length - 3));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const transformValue = -currentIndex * cardWidth;

  return (
    <div>
      <h5 className='hearercs'>News & Updates</h5>
      <div className="news-container" style={{ transform: `translateX(${transformValue}px)` }}>
        {data.map((news, i) => (
          <div key={i} className={`news-card ${i === currentIndex ? 'active' : ''}`}>
            <h6 className='title'>{news.title}</h6>
            <p>{new Date(news.newsDateTime * 1000).toLocaleString()}</p>
            <p className='niftycs'><strong>Nifty</strong><br />{news.nifity}</p>
            <p className='pricecs'>{news.price}</p>
          </div>
        ))}
      </div>
      <div className="arrow-buttons">
        <FaArrowLeftLong className='forarr' onClick={handlePrev} />
        <FaArrowRightLong className='forarr' onClick={handleNext} />
      </div>
    </div>
  );
};

export default SlideData;
