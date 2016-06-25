var myHeaders = new Headers();

myHeaders.append("Content-Type", "application/json");
myHeaders.append("Ocp-Apim-Subscription-Key", "2f79c9a6299f4a5c88df99ada04ca8a8");

var myInit = {
  method: 'POST',
  headers: myHeaders
};

export default function detectFaces (url) {
  return fetch('https://api.projectoxford.ai/face/v1.0/detect?returnFaceId=true&returnFaceLandmarks=false',
      Object.assign({}, myInit, {
        body: JSON.stringify({url:url})
      }))
      .then((data) => data.json())
}