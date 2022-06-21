import Carousel from "react-multi-carousel";
import { BasicCard, SkincareData } from "./carousel.item";

import './carousel.css'

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
};

export interface SkincareDatas {
  skincareData: SkincareData[]
}

export const CustomCarousel = ({skincareData}:SkincareDatas) => {
    return (
        <div className="containerc">
            <Carousel
                swipeable={true}
                draggable={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                autoPlaySpeed={0}
                keyBoardControl={true}
                itemClass="carousel-item-padding-40-px"
                className="carousel"
                removeArrowOnDeviceType={["superlargedesktop", "desktop", "tablet", "mobile"]}
                centerMode={true}
                focusOnSelect={true}
            >
              {skincareData.map(({ skincareStep, skincareName, skincareType, skincareBrand }) => (
                <BasicCard skincareStep={skincareStep} skincareName={skincareName} skincareType={skincareType} skincareBrand={skincareBrand}/>
              ))}
        </Carousel>
      </div>
    )
}