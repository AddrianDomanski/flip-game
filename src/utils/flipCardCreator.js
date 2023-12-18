import { randomNumber } from "./randomNumber";
import { fetchRandomPhoto } from "../api/fetchRandomPhoto";

export const getImages = async (pairAmount) => {
  const photoArray = [];
  const uniqueIds = new Set();

  while (photoArray.length < pairAmount) {
    const randomId = randomNumber(1, 300);

    if (!uniqueIds.has(randomId)) {
      const photo = await fetchRandomPhoto(randomId);
      if (photo !== -1) {
        photoArray.push(photo);
        uniqueIds.add(randomId);
      }
    }
  }
  return photoArray;
};

export const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array.slice();
};

export const createCards = async (cardPairAmount) => {
  const photoArray = await getImages(cardPairAmount);

  const cards = Array(cardPairAmount)
    .fill()
    .map((_, index) => {
      return {
        pairId: index,
        isCompleted: false,
        isClicked: false,
        imageSrc: photoArray[index],
      };
    });

  let cardsClones = [...cards];
  return shuffle([...cards, ...cardsClones]);
};
