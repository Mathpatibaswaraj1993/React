import { useRef } from "react";

function UseRef() {
  const refElement = useRef();

  const clickHandler = () => {
    refElement.current.style.color = "green";
    refElement.current.style.fontSize = "25px";
    refElement.current.style.fontFamily = "Serif";
  };

  const clickHandler1 = () => {
    refElement.current.style.color = "";
    refElement.current.style.fontSize = "";
    refElement.current.style.fontFamily = "";
  }

  return (
    <>
      <div ref={refElement}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium dolor neque accusamus deserunt atque. Accusantium sint possimus dolor earum, ratione, velit quas impedit fugit quos molestiae praesentium harum labore perspiciatis.</div>

      <button className="btn btn-danger" onClick={clickHandler}>
        on
      </button>
      &nbsp; <button className="btn btn-primary" onClick={clickHandler1}>
off      </button>
    </>
  );
}

export default UseRef;
