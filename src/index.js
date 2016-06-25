import getCharacterFaces from './face-api-service/get-characters-faces'
import detectFaceLocal from './face-api-service/detect-local';
import verify from './face-api-service/verify';
import getBestMatchingFace from './face-api-service/get-best-matching-face'
import convertDataURItoBlob from './utils/convert-data-url-to-blob';

document.addEventListener('DOMContentLoaded', function() {
  const fileInputElement = document.getElementById('imageInput');

  console.log('calling', getCharacterFaces());


  fileInputElement.addEventListener('change', (event) => {

    const reader = new FileReader();
    reader.onerror = (e) => (console.log(e));
    reader.onabort = function(e) {
      alert('File read cancelled');
    };
    reader.onload = function(e) {
      detectFaceLocal(convertDataURItoBlob(e.target.result))
          .then((faces) => {
            return verify({ faceId1: faces[0].faceId, faceId2: faces[0].faceId });
            //getBestMatchingFace(faces[0].faceId, faces);
          })
          .then((match) => {
            console.log('match', match);
          })
          .catch((err) => {
            console.log("error", err);
          });
    };

    reader.readAsDataURL(event.target.files[0]);
  }, false);
});