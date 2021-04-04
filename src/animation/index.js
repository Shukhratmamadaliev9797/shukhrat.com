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
export const animationSkills = {
  in: {
    opacity: 1,
    scale: 1,
    x: 0,
  },
  out: {
    scale: 0,
    opacity: 0,
    x: "100%",
  },
};
export const transition = {
  duration: 0.8,
};
