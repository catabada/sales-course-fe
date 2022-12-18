import Slider from "react-slick";
import {Box} from "@mui/material";
import CardCourse from "~/components/card-course";
import NextIcon from '@mui/icons-material/ChevronRight';
import PrevIcon from '@mui/icons-material/ChevronLeft';
import './_Custom.scss'

function NextArrow(props) {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{...style}}
            onClick={onClick}
        >
            <NextIcon sx={{color: '#000', height: '3rem', width: '3rem'}}/>
        </div>
    );
}

function PrevArrow(props) {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{...style}}
            onClick={onClick}
        >
            <PrevIcon sx={{color: '#000', height: '3rem', width: '3rem'}}/>
        </div>
    );
}


function SlickCustomArrow({data}) {
    const settings = {
        dot: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        touchMove: false,
        nextArrow: <NextArrow className='next-arrow'/>,
        prevArrow: <PrevArrow className='prev-arrow'/>
    };

    return <Slider {...settings}>
        {data.map((item, index) => {
            if (index <= 8)
                return (
                    <Box sx={{padding: '1rem'}} key={index}>
                        <CardCourse key={item.id} data={item}/>
                    </Box>
                )
        })}
    </Slider>
}

export default SlickCustomArrow