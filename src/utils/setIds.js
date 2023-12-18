export const setIds = (array) =>
  array.map((el) => {
    return { ...el, id: crypto.randomUUID() };
  });