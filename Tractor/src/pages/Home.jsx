
// import { useState, useEffect } from 'react';
// import styles from '../CSS/home.module.css';
// import HomeData from '../components/HomeData';
// import { ToastContainer } from 'react-toastify';
// const HeroSection = () => {

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const slideCount = 4; // Total number of slides
//   let autoplayInterval = null;

//   // Function to move to a specific slide
//   const moveToSlide = (index) => {
//     setCurrentIndex(index);
//   };
//   // 1+1%4

//   // Function to start autoplay
//   const startAutoplay = () => {
//     autoplayInterval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % slideCount);
//     }, 3000); // Change slide every 3 seconds
//   };

//   // Function to stop autoplay
//   const stopAutoplay = () => {
//     if (autoplayInterval) {
//       clearInterval(autoplayInterval);
//       autoplayInterval = null;
//     }
//   };

//   // Set up autoplay when component mounts
//   useEffect(() => {
//     startAutoplay();
//     return () => stopAutoplay(); // Clean up interval on component unmount
//   }, []);

//   // Indicators click event handler
//   const handleIndicatorClick = (index) => {
//     stopAutoplay();
//     moveToSlide(index);
//     startAutoplay();
//   };


//   return (
//     <>

//       <div className={styles.body}>
//         {/* Slider container */}
//         <div className={styles.sliderContainer}>
//           <div className={styles.slider}>
//             <img
//               src="/images/9.jpg"
//               alt="Slide 1"
//               className={`${styles.slide} ${currentIndex === 0 ? styles.active : ''}`}
//             />
//             <img
//               src="/images/12.jpg"
//               alt="Slide 2"
//               className={`${styles.slide} ${currentIndex === 1 ? styles.active : ''}`}
//             />
//             <img
//               src="/images/13.jpg"
//               alt="Slide 3"
//               className={`${styles.slide} ${currentIndex === 2 ? styles.active : ''}`}
//             />
//             <img
//               src="/images/6.jpg"
//               alt="Slide 4"
//               className={`${styles.slide} ${currentIndex === 3 ? styles.active : ''}`}
//             />
//           </div>
//           <div className={styles.indicators}>
//             {[...Array(slideCount)].map((_, index) => (
//               <button
//                 key={index}
//                 className={`${styles.indicator} ${currentIndex === index ? styles.active : ''}`}
//                 onClick={() => handleIndicatorClick(index)}
//               ></button>
//             ))}
//           </div>
//         </div>
//       </div>
//       <div>
//             <HomeData />
//       </div>
//       <ToastContainer />
//    </>
//   );
// };

// export default HeroSection;


// new 06-05-2026
import HeroSection from "../components/HeroSection";
import styles from "../CSS/home2.module.css";

const Home = () => {
  return (
    <>

      {/* HERO */}
      <HeroSection />

      {/* FEATURES */}
      <section className={styles.features}>

        <div className={styles.card}>
          <h2>🚜 Easy Rentals</h2>
          <p>Book farming tools anytime with ease.</p>
        </div>

        <div className={styles.card}>
          <h2>⚡ Fast Delivery</h2>
          <p>Quick equipment delivery to your farm.</p>
        </div>

        <div className={styles.card}>
          <h2>💰 Affordable Prices</h2>
          <p>Best pricing for every farmer.</p>
        </div>

      </section>

      {/* EQUIPMENT */}
      <section className={styles.equipment}>

        <h1>Popular Equipment</h1>

        <div className={styles.grid}>

          <div className={styles.equipmentCard}>
            <img src="images/3.jpg" alt="" />
            <h3>Modern Tractor</h3>
            <button>Rent Now</button>
          </div>

          <div className={styles.equipmentCard}>
            <img src="images/cultivator.jpg" alt="" />
            <h3>Disc Harrow</h3>
            <button>Rent Now</button>
          </div>

          <div className={styles.equipmentCard}>
            <img src="images/14.jpg" alt="" />
            <h3>Seeder Machine</h3>
            <button>Rent Now</button>
          </div>

        </div>

      </section>

      {/* HOW IT WORKS */}
      <section className={styles.work}>

        <h1>How It Works</h1>

        <div className={styles.steps}>

          <div>
            <span>1</span>
            <p>Select Equipment</p>
          </div>

          <div>
            <span>2</span>
            <p>Choose Rental Time</p>
          </div>

          <div>
            <span>3</span>
            <p>Get Delivered</p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className={styles.cta}>

        <h1>Start Renting Today 🚜</h1>
        <button>Browse Tools</button>

      </section>

    </>
  );
};

export default Home;