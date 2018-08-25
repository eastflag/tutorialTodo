var links = [
  'https://youtu.be/Cdbgx-rrzRY'
];

var video_links = links.map(item => {
  console.log(item);
  return item.replace("y", "www.youtube.com/embed");
})

console.log(links.toString());
console.log(video_links.toString());
