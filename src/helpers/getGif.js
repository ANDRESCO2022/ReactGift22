export const getGift = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=rI5ihpGRFspZUrqVttkq3jndMVSATrvh&q=${category}&limit=20`;
  const res = await fetch(url);
  const {data} = await res.json();
  const gifts = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return gifts;
};
