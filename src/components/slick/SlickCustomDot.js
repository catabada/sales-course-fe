import Slider from "react-slick";
import './_Custom.scss'

function SlickCustomDot({data}) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        appendDots: dots => <ul>{dots}</ul>,
        customPaging: i => (
            <div className='dots-wrapper'>
                <div className='dot'></div>
            </div>
        )

    };
    return <Slider {...settings} className='carousel-show'>
        {
            data.map((item, index) => (
                <div key={index}>
                    <img
                        src={item}
                        alt=' image-1'
                        className='slide-image'/>
                </div>
            ))
        }
    </Slider>
}

export default SlickCustomDot;