export const fadeIn = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

export const topRightIn = {
  in: {
    opacity: 1,
    x: 0,
    y: 0,
    // scale: 1,
  },
  out: {
    opacity: 0,
    x: "100%",
    y: "-100vh",
    // scale: 0,
  },
  end: {
    x: 0,
    y: 0,
    opacity: 1,
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
