document.addEventListener('click',function myBackground(){
    changeBackground();
})


let images = [
  'https://cdn.discordapp.com/attachments/814607483066646571/873414804415578112/back.png',
  'https://cdn.discordapp.com/attachments/814607483066646571/874156470147616768/cropped-1920-1080-969569.jpg',
  'https://cdn.discordapp.com/attachments/814607483066646571/874144695817752647/723583.png',
  'https://cdn.discordapp.com/attachments/814607483066646571/874158627030700082/cropped-1920-1080-1113344.jpg',
  'https://cdn.discordapp.com/attachments/814607483066646571/874160472432185374/descarga.png',
];

let index = 0;
function changeBackground(){
    document.body.style.backgroundImage = "url('"+images[index]+"')";
  index = (index < images.length-1) ? (index+1) : 0;
}


// change backgroubd every 3 seconds
var interval = window.setInterval(function(){
  changeBackground()
}, 3000); // 1000 = 1 second

// function to stop interval 
// clearInterval(interval) 
