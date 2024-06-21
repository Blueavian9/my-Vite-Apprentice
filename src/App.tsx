import * as React from 'react';
import './App.css'
import { Button } from './components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"



function App(): React.ReactElement {

  return (
    <div className=' flex flex-col text-center justify-around h-[100vh] w-[100vw]'>
      <Carousel>
        <CarouselContent>
          <CarouselItem><h1>A</h1></CarouselItem>
          <CarouselItem><h2>B</h2></CarouselItem>
          <CarouselItem><h3>C</h3></CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default App
