import React from "react"

export const Carousel = ({children}) => {
  const [slideIndex, setSlide] = React.useState(0);
  const style = {
    width: `calc(100% * ${children.length})`,
    transform: `translateX(-${100*slideIndex/children.length}%)`
  };
  return (
   <div className="my-coursel">
      <ul style={style}>
      {children.map((child, index) => (
        <li
          className={index === slideIndex ? "selected" : ""}
          onClick={() => setSlide((index + 1)%children.length)}
          key={index}>{child}</li>
      ))}
    </ul>
   </div>
  );
}