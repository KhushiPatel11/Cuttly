import React, { useEffect, useRef, useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import 'aos/dist/aos.css';
import '../Component/Home.css';
import Images_Video from '../Images_Video/sidebg.png';

const useIntersectionObserver = (elementRef, options) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting),
      options
    );
    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [elementRef, options]);

  return isIntersecting;
};

function Home() {
  const sectionRef = useRef(null);
  const isIntersecting = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  return (
    <>
      <div className="absolute-background"></div>
      <div style={{ paddingTop: '70px' }}>
        <Container>
          <Row>
            <Col md={6} className="d-flex align-items-center justify-content-center order-md-2 order-1">
              <img src={Images_Video} alt="Description" className="img-fluid" />
            </Col>
            <Col md={6} className="d-flex align-items-center justify-content-center text order-md-1 order-2">
              <div>
                <h1>URL Shortener</h1>
                <h2>Experience full control over short links</h2>
                <p className='para'>
                  Comprehensive URL Shortener platform: manage, analyze, and brand your links with ease. Features include deep links, QR codes, bio links, surveys, and more. Start shortening and tracking your links effortlessly.
                </p>
                <div className='urlShort'>
                  <div className='urlInputContainer'>
                    <input type="text" className='urlText' placeholder='Paste long url and shorten it' />
                    <Button variant="primary" className='urlBtn'>Short</Button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="info">
        <div className={`py-4 ${isIntersecting ? 'animate-fade-up' : ''}`} ref={sectionRef}>
          <h1 className='h1'>What is Cuttly?</h1>
        </div>
        <div className="paragraph">
          <p className="para1">Cuttly is a URL shortening tool and an all-in-one Link Management Platform for all your links and needs. It is an advanced URL Shortener with extensive Link Analytics. Cuttly offers solutions that allow you to manage your links effectively, helping you grow your business while keeping your links under control. Additionally, Cuttly enables you to create your own Link in bio microsites, generate QR Codes, and conduct surveys, combining offline and online solutions seamlessly.</p>
        </div>
      </div>
    </>
  );
}

export default Home;
