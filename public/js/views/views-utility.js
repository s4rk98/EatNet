// Draws a lazy load rectangle
export const lazyLoadRectangle = (gCxt, color, width, height) => {
  gCxt.fillStyle = color;
  gCxt.fillRect(0, 0, width, height);
  gCxt.fill();
};
