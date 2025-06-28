// import React, { useState } from 'react';
// import Carousel from 'react-bootstrap/Carousel';
//
// function ControlledCarousel() {
//     const [index, setIndex] = useState(0);
//
//     const handleSelect = (selectedIndex) => {
//         setIndex(selectedIndex);
//     };
//
//     return (
//         <Carousel activeIndex={index} onSelect={handleSelect}>
//             <Carousel.Item>
//                 <iframe className="mb-10 responsive-iframe" src="https://onaonline.netlify.app/" width="300" height="300px" frameBorder="0"></iframe>
//                 <Carousel.Caption>
//                     <h3>OnaOnline - A personal, self expressive website</h3>
//                     <p>This is one of the very first ..</p>
//                 </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item>
//                 <iframe className="responsive-iframe" src="https://suadeclothing.netlify.app/" width="300" height="300px" frameBorder="0"></iframe>
//                 <Carousel.Caption>
//                     <h3>Suade</h3>
//                     <p>A clothing label</p>
//                 </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item>
//                 <iframe className="responsive-iframe" src="https://ona0nlineweatherapp.netlify.app/" width="300" height="300px" frameBorder="0"></iframe>
//                 <Carousel.Caption>
//                     <h3>Weather app yea whatever</h3>
//                     <p>
//                         Api handling and understanding, react etc.
//                     </p>
//                 </Carousel.Caption>
//             </Carousel.Item>
//         </Carousel>
//     );
// }
//
// export default ControlledCarousel;