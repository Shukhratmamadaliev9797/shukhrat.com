export const fadeIn = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

export const rightIn = {
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: "100%",
  },
};

export const bottomRightIn = {
  in: {
    opacity: 1,
    x: 0,
    y: 0,
  },
  out: {
    opacity: 0,
    x: "100%",
    y: "100vh",
  },
};

export const littleRightBottomIn = {
  in: {
    opacity: 1,
    y: "0",
    x: "0",
  },
  out: {
    opacity: 0,
    y: "100vh",
    x: "20%",
  },
};

export const littleleftBottomIn = {
  in: {
    opacity: 1,
    y: "0",
    x: "0",
  },
  out: {
    opacity: 0,
    y: "100vh",
    x: "-20%",
  },
};

export const rightOut = {
  out: {
    x: "-100%",
    opacity: 1,
  },
};

export const animatedSelection = {
  start: {
    x: "-100%",
    opacity: 0,
  },
  in: {
    x: 0,
    opacity: 1,
  },
  out: {
    x: "100%",
    opacity: 0,
  },
};
export const transition = {
  duration: 0.5,
};

//

export const topIn = {
  out: {
    y: "-100vh",
    opacity: 0,
  },
  in: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
};

export const zoomIn = {
  out: {
    scale: 0,
  },
  in: {
    scale: 1,
  },
};

export const leftIn = {
  out: {
    x: "-100vw",
  },
  in: {
    x: 0,
  },
};

export const RightIn = {
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: "100%",
  },
  exit: {
    opacity: 0,
    x: "-100%",
  },
};

export const rotateLeftIn = {
  out: {
    x: "-30vw",
    rotate: "-360deg",
    opacity: 0,
  },
  in: {
    x: 0,
    rotate: "0deg",
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.2,
    },
  },
  exit: {
    x: "40vw",
    rotate: "360deg",
    opacity: 0,
  },
};
