import './App.css';
import { CustomTypography } from './components/typography/typography';

import "react-multi-carousel/lib/styles.css";

import dayjs from 'dayjs';
import { CustomCarousel, SkincareTypes } from './components/carousel/carousel';
import { SkincareType } from './components/carousel/carousel.item';

function App() {
  const hour = dayjs().hour()
  let dayOrNight = ""

  if(hour >= 7 && hour <=18) {
    dayOrNight = "day-time"
  } else if (hour <= 6 || hour >= 19) {
    dayOrNight = "night-time"
  }

  //useeffect
  
  let skincareTypes: SkincareType[] = []
  const skincareTypeDictionary = {
    1: "Face Wash",
    2: "Hydrating Toner",
    3: "Eye Cream",
    4: "Moisturizer",
    5: "Sunscreen"
  }

  Object.entries(skincareTypeDictionary).forEach(
    ([key, value]) => {
      const skincareType: SkincareType = {
        skincareTypeStep: key,
        skincareTypeName: value
      }
      skincareTypes.push(skincareType)
    }
  )

  return (
    <div className="App">
      <CustomTypography dayOrNight={dayOrNight}/>
      <CustomCarousel skincareType={skincareTypes}/>
    </div>
  );
}



export default App;
