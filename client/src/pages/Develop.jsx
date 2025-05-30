import React, { useState, useEffect, useRef } from 'react';

const developers = [
  {
    id: 1,
    name: 'Jeikishore K',
    regNo: '22BEECE019',
    course: 'Electronics And Communication Engineering',
    photo: '/images/jei.jpg',
    email: 'jeikishore222@gmail.com',
    contact: '+91-6374251659',
  },
  {
    id: 2,
    name: 'Afsal Mohamed K',
    regNo: '22BEECE001',
    course: 'Electronics And Communication Engineering',
    photo: '/images/afsa.jpg',
    email: 'afsalmohamedece@gmail.com',
    contact: '+91-8778917358',
  },
  {
    id: 3,
    name: 'Dharan Vignesh S',
    regNo: '22BEECE009',
    course: 'Electronics And Communication Engineering',
    photo: '/images/dha.jpg',
    email: 'dharanvignesh8@gmail.com',
    contact: '+91-6374360066',
  },
];

const CARD_WIDTH = 280;

const DeveloperCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const startXRef = useRef(null);
  const draggingRef = useRef(false);

  const prev = () => {
    setCurrentIndex((i) => (i === 0 ? developers.length - 1 : i - 1));
  };

  const next = () => {
    setCurrentIndex((i) => (i === developers.length - 1 ? 0 : i + 1));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleStart = (clientX) => {
    startXRef.current = clientX;
    draggingRef.current = true;
  };

  const handleEnd = (clientX) => {
    if (!draggingRef.current) return;
    const diff = startXRef.current - clientX;
    if (diff > 50) next();
    else if (diff < -50) prev();
    draggingRef.current = false;
  };

  return (
    <div style={styles.container}>
      <div style={styles.overlay}>
        <h1 style={styles.title}>Developer Page</h1>
        <div
          style={styles.sliderWrapper}
          onMouseDown={(e) => handleStart(e.clientX)}
          onMouseUp={(e) => handleEnd(e.clientX)}
          onTouchStart={(e) => handleStart(e.touches[0].clientX)}
          onTouchEnd={(e) => handleEnd(e.changedTouches[0].clientX)}
        >
          <button onClick={prev} style={{ ...styles.navButton, left: 20 }} aria-label="Previous">
            ‹
          </button>
          <div style={styles.slider}>
            {developers.map((dev, i) => {
              let offset = i - currentIndex;
              if (offset < -1) offset += developers.length;
              if (offset > 1) offset -= developers.length;

              const absOffset = Math.abs(offset);
              const scale = absOffset === 0 ? 1 : 0.85;
              const rotateY = offset * 25;
              const translateX = offset * (CARD_WIDTH + 30);
              const zIndex = developers.length - absOffset;

              return (
                <div
                  key={dev.id}
                  style={{
                    ...styles.card,
                    transform: `translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
                    opacity: absOffset > 1 ? 0 : 1,
                    zIndex,
                  }}
                >
                  <img src={dev.photo} alt={dev.name} style={styles.image} />
                  <h2 style={styles.name}>{dev.name}</h2>
                  <p><strong>Reg No:</strong> {dev.regNo}</p>
                  <p><strong>Course:</strong> {dev.course}</p>
                  <p><strong>Email:</strong> <a href={`mailto:${dev.email}`} style={styles.link}>{dev.email}</a></p>
                  <p><strong>Contact:</strong> <a href={`tel:${dev.contact}`} style={styles.link}>{dev.contact}</a></p>
                </div>
              );
            })}
          </div>
          <button onClick={next} style={{ ...styles.navButton, right: 20 }} aria-label="Next">
            ›
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: '100vh',
    backgroundColor: '#fff',
    backgroundImage:
      "url('https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Chaucer, sans-serif',
  },
  overlay: {
    background: 'rgba(218, 216, 216, 0.64)',
    padding: 40,
    borderRadius: 20,
    width: CARD_WIDTH * 3 + 100,
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
  },
  title: {
    color: '#333',
    fontSize: '2.5rem',
    marginBottom: 30,
    background: 'none',
    textShadow: 'none',
    padding: 0,
  },
  sliderWrapper: {
    position: 'relative',
    width: CARD_WIDTH * 3,
    height: 420,
    perspective: 1500,
    cursor: 'grab',
  },
  slider: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    height: '100%',
    transformStyle: 'preserve-3d',
    transition: 'transform 0.5s ease',
  },
  card: {
    position: 'absolute',
    width: CARD_WIDTH,
    height: 370,
    background: 'linear-gradient(135deg, #eee, #ddd)',
    borderRadius: 20,
    padding: 20,
    boxShadow: '0 4px 8px rgba(0,0,0,0.1), inset 0 0 10px #fff',
    color: '#333',
    textAlign: 'center',
    transition: 'transform 0.5s ease, opacity 0.5s ease',
    backfaceVisibility: 'hidden',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: 20,
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
  name: {
    fontSize: '1.5rem',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  link: {
    color: '#007BFF',
    textDecoration: 'underline',
  },
  navButton: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'transparent',
    border: '2px solid #007BFF',
    borderRadius: '50%',
    color: '#007BFF',
    fontSize: '2rem',
    width: 50,
    height: 50,
    cursor: 'pointer',
    zIndex: 10,
    transition: '0.3s ease',
  },
};

export default DeveloperCarousel;
