export const sliderFormatter = (value: number) => {
  if (value < 24) {
    return value + "h";
  } else {
    const hours = value % 24;
    const days = (value - hours) / 24;

    return !hours ? `${days}d` : `${days}d ${hours}h`;
  }
};