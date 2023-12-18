export const fetchRandomPhoto = async (id) => {
    try {
      const response = await fetch(`https://picsum.photos/id/${id}/150/150`);
      if (response.status !== 200) {
        console.error("Image not found.");
        return -1;
      }
      return response.url;
    } catch (error) {
      console.error("Fetch error: ", error);
    }
  }