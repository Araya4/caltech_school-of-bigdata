const myVideo = document.getElementById("myVideo");

const videoID = ["k3oleRNLy7J0aQBnv9u","k7DZP8PohA6i2WBnv9C","","","","","k1qU19sAOu7wchBnv9A","k2ELflla5ecHfxBnv9E",
"k3xfBkrk2K6usbBnv9G","k13eA7jTxjjT9iBnv9I","k6QS0CDEsOKVhlBnv9K"];
const videoUrl = videoID.map(v=>{
    if(v==="") { 
        return "about:blank";
    }else{ 
        return `https://www.dailymotion.com/embed/video/${v}?autoplay=1`;
    }
})


const textS = document.querySelectorAll(".text-box");
textS.forEach((element,idx)=>{
    element.addEventListener('click',function(e){
        e.preventDefault();
        myVideo.src = videoUrl[Number(idx)];
       
    })
})
