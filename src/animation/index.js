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

export const topRightIn = {
  out: {
    y: "-100vh",
    x: "100%",
  },
  in: {
    y: "0",
    x: "0",
  },
  exit: {
    y: "100vh",
    x: "-100%",
  },
};
export const topIn = {
  out: {
    y: "-100vh",
    opacity: 0,
  },
  in: {
    y: 0,
    opacity: 1,
  },
};

export const zoomIn = {
  out: {
    scale: 0,
    opacity: 0,
  },
  in: {
    scale: 1,
    opacity: 1,
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
    y: "-10vh",

    opacity: 0,
  },
  in: {
    y: 0,

    opacity: 1,
  },
};

export const bottomIn = {
  out: {
    y: "100vh",

    opacity: 0,
  },
  in: {
    y: 0,

    opacity: 1,
  },
};
export const transition = {
  duration: 6,
  type: "spring",
  stiffness: 100,
  when: "beforeChildren",
};
