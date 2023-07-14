import React, { useEffect, useState } from 'react';
import RecomendedItemCard from './RecomendedItemCard';
import './RecomendedItems.css';
import { CarouselWrapper } from "react-pretty-carousel";

function RecomendedItems() {
  const [items, setItems] = useState(3);

  useEffect(() => {
    if (window.innerWidth < 576 || window.screen.width <576) setItems(1);
    else setItems(3);
    window.addEventListener("resize", () => {
      if (window.innerWidth < 576 || window.screen.width <576) setItems(1);
      else setItems(3);
    });
  }, []);
  return (
    <div className='classContainer'>
      <h1><strong>Recomended Items:</strong></h1>
      <div className="Itemcards"> 
      <CarouselWrapper className="car" items={items} mode="gallery">
      <RecomendedItemCard/>
        <RecomendedItemCard/>
        <RecomendedItemCard/>
        <RecomendedItemCard/>
        <RecomendedItemCard/>
        <RecomendedItemCard/>
        <RecomendedItemCard/>
        <RecomendedItemCard/>
      </CarouselWrapper>
      </div> 
    </div>
  )
}

export default RecomendedItems