var myHeaders = new Headers();

myHeaders.append("Content-Type", "application/json");
myHeaders.append("Ocp-Apim-Subscription-Key", "KEY_GOES_HERE");

var myInit = {
  method: 'POST',
  headers: myHeaders,
  body: JSON.stringify({
    'url': 'https://stachepublic.blob.core.windows.net/samples/face5.png'
  })
};

fetch('https://api.projectoxford.ai/face/v1.0/detect?returnFaceId=true&returnFaceLandmarks=false', myInit)
  .then((data) => data.json())
  .then((data) => console.log("success", data))
  .catch((err) => {
    console.log("error", err);
  });
