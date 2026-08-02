const FAVORITES_KEY = 'ertiga_favorite_cars';

export const getFavoritesFromStorage = (): number[] => {
  try {
    const data = localStorage.getItem(FAVORITES_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error('Failed to parse favorites', e);
    return [];
  }
};

export const toggleFavoriteInStorage = (carId: number): number[] => {
  const favorites = getFavoritesFromStorage();
  const index = favorites.indexOf(carId);
  if (index > -1) {
    favorites.splice(index, 1);
  } else {
    favorites.push(carId);
  }
  try {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  } catch (e) {
    console.error('Failed to save favorites', e);
  }
  return favorites;
};
