import { useRef } from "react";

function useThrottle({callback, time}){
  const timer = useRef(null);

  return () => {
    if (!timer.current) {
      timer.current = setTimeout(() => {
        callback?.();
        timer.current = null;
      }, time);
    }
  }
}

export default useThrottle;
