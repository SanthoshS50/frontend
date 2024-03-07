import React from 'react';
import BootstrapCarousel from 'react-bootstrap/Carousel';

export default function MyCarousel() {
    return (
            <BootstrapCarousel>
                <BootstrapCarousel.Item interval={3000}>
                    <div className="carousel-image">
                        <img src='/images/carousal_1.jpg' alt="First slide"  style={{ width: '100%', height: 'auto' }} />
                    </div>
                    <BootstrapCarousel.Caption style={{ borderRadius: '10px', padding: '10px', background: 'rgba(0,0,0,0.5)' }}>
                        <h3>Aqua Hobby</h3>
                        <p>Walking into the aquarium is like exploring a different world</p>
                    </BootstrapCarousel.Caption>

                </BootstrapCarousel.Item>
                <BootstrapCarousel.Item interval={3000}>
                    <div className="carousel-image">
                        <img src='/images/carousal_2.jpg' alt="Second slide" style={{ width: '100%', height: 'auto' }}/>
                    </div>
                    <BootstrapCarousel.Caption style={{ borderRadius: '10px', padding: '10px', background: 'rgba(0,0,0,0.5)' }}>
                        <h3>Fact...</h3>
                        <p>Life is better surrounded by sea creatures</p>
                    </BootstrapCarousel.Caption>
                </BootstrapCarousel.Item>
                <BootstrapCarousel.Item interval={3000}>
                    <div className="carousel-image">
                        <img src='/images/carousal_3.jpg' alt="Third slide"  style={{ width: '100%', height: 'auto' }}/>
                    </div>
                    <BootstrapCarousel.Caption style={{ borderRadius: '10px', padding: '10px', background: 'rgba(0,0,0,0.5)' }}>
                        <h3>Aquascaping</h3>
                        <p>Aquascaping is as much an art-form as painting or sculpting</p>
                    </BootstrapCarousel.Caption>
                </BootstrapCarousel.Item>
            </BootstrapCarousel>
    );
}
