const videoElement = document.getElementById('video')
const button = document.getElementById('button')

//Prompt to select media stream, pass to video elem, then play
//let's use aync style

async function selectMediaStream(){
    try{
        //setting mediaStream that will contain our data
        //we are waiting for user to select the media screen that will b streamed
        //user's selection will be assigned to mediaStream-the data
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        //passing that mediaStream to our video object, by grabbing the video element
        videoElement.srcObject = mediaStream;
        //When video is loaded on metadata, it will play
        videoElement.onloadedmetadata = ()=> {
            videoElement.onplay();
        }
    }catch (error){
        alert('Video not videoing')
    }
}

button.addEventListener('click', async()=>{
    //Disable button
    button.disabled= true;
    //Start Picture in Picture
    await videoElement.requestPictureInPicture()
    //Reset Button
    button.disabled = false;
});
//On load'

selectMediaStream()