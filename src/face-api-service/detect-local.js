var myHeaders = new Headers();

myHeaders.append("Content-Type", "application/octet-stream");
myHeaders.append("Ocp-Apim-Subscription-Key", "2f79c9a6299f4a5c88df99ada04ca8a8");

var myInit = {
  method: 'POST',
  headers: myHeaders
};

export default function detectFaces (binaryString) {
  return fetch('https://api.projectoxford.ai/face/v1.0/detect?returnFaceId=true&returnFaceLandmarks=false&returnFaceAttributes=gender', Object.assign({}, myInit, {body: binaryString}))
      .then((data) => data.json())
}