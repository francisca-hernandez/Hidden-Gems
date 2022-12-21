import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const items = [
  {
    src: 'https://picsum.photos/id/123/1500/500',
    altText: 'Slide 1',
    caption: 'If You Know You Know... Keep Track of your favorite off the beaten path places in Oregon.',
    subcaption: 'Use this app to record hidden Gems here for future use and sharing with friends.',
    key: 1,
  },
  {
    src: 'https://picsum.photos/id/17/1500/500',
    altText: 'Slide 2',
    caption: '"You miss 100% of the shots you dont take" Wayne Gretzky - Micheal G. Scott',
    subcaption: 'Always try new places and new things and you are sure to come across a Gem.',
    key: 2,
  },
  {
    src: 'https://picsum.photos/id/678/1500/500',
    altText: 'Slide 3',
    caption: '"You can always find a diamond in rough" Genie in Aladdin',
    subcaption: 'Oregon has so many beautiful places - none should be overlooked.',
    key: 3,
  },
];

function Header(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.subcaption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default Header;