import { useRef } from "react";

const SwipeWrapper = ({ children, onLeft, onRight, className = "" }) => {
  const startX = useRef(0);

  const onTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX.current - endX;

    if (diff > 80) onLeft(); // swipe left → next
    if (diff < -80) onRight(); // swipe right → prev
  };

  return (
    <div
      className={`flex items-center justify-center ${className}`}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {children}
    </div>
  );
};

export default SwipeWrapper;
