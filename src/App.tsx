import './App.css';
import { CustomTypography } from './components/typography/typography';

import "react-multi-carousel/lib/styles.css";

import dayjs from 'dayjs';
import { CustomCarousel } from './components/carousel/carousel';
import { SkincareData } from './components/carousel/carousel.item';
import RetrieveSkincareData from './service/skincare.read';
import { Paper } from '@mui/material';

import map from "lodash/map";
import range from "lodash/range";

const Container = () => {
  return (
    <div style={{ height: "2300px", width: "514px", margin: "16px" }}>
      <Paper style={{ height: "100%", width: "514px" }}>Hello</Paper>
    </div>
  );
};

function App() {
  const currentDateTime = dayjs()
  let dayOrNight = ""

  if(currentDateTime.hour() >= 7 && currentDateTime.hour() <=18) {
    dayOrNight = "day-time"
  } else if (currentDateTime.hour() <= 6 || currentDateTime.hour() >= 19) {
    dayOrNight = "night-time"
  }
  
  let skincareDataArray: SkincareData[] = []
  const skincareDataResult = RetrieveSkincareData(currentDateTime)

  for(let i = 1; i < Object.keys(skincareDataResult).length+1; i++) {
    const data = skincareDataResult[i.toString()]
    const skincareData: SkincareData = {
      skincareStep: i,
      skincareName: data['skincareName'],
      skincareType: data['skincareTypeID']['skincareTypeName'],
      skincareBrand: data['skincareBrandID']['skincareBrandName']
    }
    skincareDataArray.push(skincareData)
  }

  return (
    <div className="App">
      <CustomTypography dayOrNight={dayOrNight}/>
      <CustomCarousel skincareData={skincareDataArray}/>
    </div>
  );
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <div style={{ width: "100%", overflow: "auto", display: "flex" }}>
        {map(range(10), _ => (
          <Container />
        ))}
      </div>
    </div>
  );
}



export default App;
