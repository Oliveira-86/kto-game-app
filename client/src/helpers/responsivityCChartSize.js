export const onHandleChartWidth = (w) => {
  if (w <= 768) {
    return w - 50;
  }

  if (w > 768 && w <= 1024) {
    return 900;
  }

  if (w > 1024 && w <= 1400) {
    return 750;
  }

  if (w > 1400) {
    return 900;
  }
};

export const onHandleChartHeight = (w) => {
  if (w <= 425) {
    return 212;
  }

  if (w <= 558) {
    return 280;
  }

  return 400;
};
