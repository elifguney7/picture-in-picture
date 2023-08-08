const videoElement = document.getElementById('video');
const button = document.getElementById('button');

async function selectMediaStream(){
    try{
        // Prompt to select media stream
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        // Pass to video element and then play video
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = ()=> {
            videoElement.play();
        }
    } catch (error){
        //Catch error
    }
} 

button.addEventListener('click', async() => {
    //Disbale button
    button.disabled = true;
    //Start picture in picture
    await videoElement.requestPictureInPicture();
    // Reset button
    button.disabled = false;
});

//on Load
selectMediaStream();