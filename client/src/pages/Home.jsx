import React from 'react';
import { useSpring, animated } from 'react-spring'; 
import '../components/css/home.css';
import image1 from '../assets/member.png';
import image2 from '../assets/spritual.jpg';

const HomePage = () => {
  // Define las animaciones para los elementos que deseas animar
  const sideSpring = useSpring({ opacity: 1, from: { opacity: 0 } });
  const mainSpring = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <div className="container">
      <animated.div className="side" style={sideSpring}>
        <h2>DEBRE MIHRET ST. MICHAEL ETHIOPIAN ORTHODOX TEWAHEDO CHURCH OF ILLINOIS</h2>
        <p>Our Church is growing in the number of people who attend Sunday worship and in its capacity to provide spiritual services to the parishioners. It provides Divine Liturgy, bible study, spiritual counselling, baptism, Christian matrimonies, visitations of the sick, and assistance for the needy.</p>
      </animated.div>
      <animated.div className="main" style={mainSpring}>
        <h2>BIBLE STUDY</h2>
        <img src={image1} alt="Image" style={{ height: '200px' }} />
        <p>Holy Matrimony is based on the Bible. (Gen. 1:27,28, 2:18, Mt. 19:4-6). The Canon of the Church requires that before matrimony is affected the following conditions should be met.</p>
        <br />
        <h2>SPIRITUAL COUNSELING</h2>
        <img src={image2} alt="Image" style={{ height: '200px' }} />
        <p>Regarding the holy mission of the Ethiopian Orthodox Tewahedo Church of St. Michael, I want to express the spiritual messages you are conveying through Him, both in the local and global aspects, for the spiritual guidance and encouragement you are providing.</p>
      </animated.div>
    </div>
  );
};

export default HomePage;
