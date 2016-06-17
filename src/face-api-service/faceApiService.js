var myHeaders = new Headers();

myHeaders.append("Content-Type", "application/json");
myHeaders.append("Ocp-Apim-Subscription-Key", "2f79c9a6299f4a5c88df99ada04ca8a8");

var myInit = {
  method: 'POST',
  headers: myHeaders,
  body: JSON.stringify({
    'url': 'https://stachepublic.blob.core.windows.net/samples/face5.png'
  })
};

export default function faceApiService () {
  fetch('https://api.projectoxford.ai/face/v1.0/detect?returnFaceId=true&returnFaceLandmarks=false', myInit)
    .then((data) => data.json())
    .then((data) => console.log("success", data))
    .catch((err) => {
      console.log("error", err);
    });
}

