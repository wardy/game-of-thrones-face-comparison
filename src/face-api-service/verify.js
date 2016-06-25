var myHeaders = new Headers();

myHeaders.append("Content-Type", "application/json");
myHeaders.append("Ocp-Apim-Subscription-Key", "2f79c9a6299f4a5c88df99ada04ca8a8");

var myInit = {
  method: 'POST',
  headers: myHeaders
};

export default function verify ({ faceId1, faceId2 }) {
  let isIdentical, confidence;

  const x = {body: { faceId1, faceId2 }};
  console.log(x);

  return fetch('https://api.projectoxford.ai/face/v1.0/verify', Object.assign({}, myInit, {body: JSON.stringify({ faceId1, faceId2 })}))
      .then((data) => data.json())
}