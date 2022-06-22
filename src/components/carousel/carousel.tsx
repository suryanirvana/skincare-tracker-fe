import { CustomCard, SkincareData } from "./carousel.item";

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
      <div className="container1"><div className="container2">
        {skincareData.map(({ skincareStep, skincareName, skincareType, skincareBrand }) => (
          <CustomCard skincareStep={skincareStep} skincareName={skincareName} skincareType={skincareType} skincareBrand={skincareBrand}/>
        ))}
      </div></div>
    )
}