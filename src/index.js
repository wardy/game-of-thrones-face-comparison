import getCharacterFaces from './face-api-service/get-characters-faces'
import detectFaceLocal from './face-api-service/detect-local';
import verify from './face-api-service/verify';
import getBestMatchingFace from './face-api-service/get-best-matching-face'
import convertDataURItoBlob from './utils/convert-data-url-to-blob';

document.addEventListener('DOMContentLoaded', function() {
  const fileInputElement = document.getElementById('imageInput');

  getCharacterFaces().then((characters) => {

  fileInputElement.addEventListener('change', (event) => {

    const reader = new FileReader();
    reader.onerror = (e) => (console.log(e));
    reader.onabort = function(e) {
      alert('File read cancelled');
    };
    reader.onload = function(e) {
      detectFaceLocal(convertDataURItoBlob(e.target.result))
          .then((faces) => {
            return getBestMatchingFace(faces[0].faceId, characters);
          })
          .then((comparisonResults) => {
            console.log(comparisonResults)
            const bestMatch = comparisonResults[0];
            const mountPoint = document.getElementById('matched-character');
            mountPoint.innerHTML = `<p>Your closest matching character is...</p>
            <div class="image-container">
              <img class="characters-image" src="${e.target.result}"/>
              <img class="characters-image" src="${bestMatch.imageURL}" />
            </div>
            <p>${bestMatch.name}</p>
            <p>You are ${Math.round(bestMatch.confidence * 100)}% similar</p>`;
          })
          .catch((err) => {
            console.log("error", err);
          });
    };

    reader.readAsDataURL(event.target.files[0]);
  }, false);
  });
});