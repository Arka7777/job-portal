import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const category=[
  "Frontend developer",
  "Backend developer",
  "Fullstack developer",
  "Data Science",
  "Graphic Designer",
]
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false, // Hides left/right arrows for a simpler look
};

export default function Category() {
  return (
    <>
   <div>
   <div className="max-w-2xl mx-auto my-8">
      <h2 className="text-2xl font-semibold text-center mb-6">Category Carousel</h2>
      <Slider {...settings}>
        {category.map((item, index) => (
          <div key={index} className="p-8 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-medium text-center text-gray-800">{item}</h3>
          </div>
        ))}
      </Slider>
    </div>
   </div>
    
    
    </>
  )
}
