export function getYoutubeImg(url: string) {
  const videoId = url.substring(url.lastIndexOf('=') + 1, url.length);
  return `https://img.youtube.com/vi/${videoId}/0.jpg`;
}
