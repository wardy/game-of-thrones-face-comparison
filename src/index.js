import faceApiService from './face-api-service/faceApiService';
import convertDataURItoBlob from './utils/convert-data-url-to-blob';

document.addEventListener('DOMContentLoaded', function() {
  const fileInputElement = document.getElementById('imageInput');
  fileInputElement.addEventListener('change', (event) => {

    const reader = new FileReader();
    reader.onerror = (e) => (console.log(e));
    reader.onabort = function(e) {
      alert('File read cancelled');
    };
    reader.onload = function(e) {
      faceApiService(convertDataURItoBlob(e.target.result));
    };

    reader.readAsDataURL(event.target.files[0]);
  }, false);


  console.log('document is ready. I can sleep now');
});