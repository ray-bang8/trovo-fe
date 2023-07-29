import { useRef } from "react";

export const useScrollTo = () => {
  const elementRef = useRef(null);

  const scrollToRefElement = () => {
    if (!elementRef) return;

    const current_Y_axis = elementRef?.current?.getBoundingClientRect().y; //top

    window.scrollTo(0, current_Y_axis);
  };

  return { elementRef, scrollToRefElement };
};
