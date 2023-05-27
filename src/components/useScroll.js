import { useEffect } from "react";
import { useInView } from "react-intersection-observer"; // Helps fire an event once a sections is scrolled into view
import { useAnimationControls } from "framer-motion"; // To be able to tell react when to start an animation

export const useScroll = () => {
  const controls = useAnimationControls();
  const [element, inView] = useInView({ threshold: 0.4 }); // Threshold: 0.5 means that when the element is halfway in the frame, the event is activitated.

  useEffect(() => {
    if (inView) {
      controls.start("show");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return [element, controls];
};
