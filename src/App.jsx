import "./App.css";
import { CarouseImage } from "./components/CarouseImage";
import { CarouseImageB } from "./components/CarouseImageB";
import { Carousel } from "./components/Carousel";
import { CarouselLoop } from "./components/CarouseLoop";
import { CarouseLoopImage } from "./components/CarouseLoopImage";
import { CarouseLoopImageB } from "./components/CarouseLoopImageB";

import { slides } from "./data/carouselData.json";

function App() {
  return (
    <div className="App flex flex-col gap-10 p-4 m-4">
      <div>
        <Carousel data={slides} />
      </div>
      <div>
        <CarouselLoop data={slides} />
      </div>
      <div>
        <CarouseLoopImage data={slides} />
      </div>
      <div>
        <CarouseImage data={slides} />
      </div>
      <div>
        <CarouseLoopImageB data={slides} />
      </div>
      <div>
        <CarouseImageB data={slides} />
      </div>
    </div>
  );
}

export default App;
