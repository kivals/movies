export const prepareUserRating = (rating: string, maxValue = '10') => {
  const userRating = Number(rating).toFixed(1);
  return `${userRating}/${maxValue}`;
};
