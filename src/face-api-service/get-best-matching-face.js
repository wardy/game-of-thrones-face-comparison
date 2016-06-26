import verify from './verify';
import getCharactersFaces from './get-characters-faces';

function sortBySimilarityScore (characterA, characterB) {
  if (characterA.confidence > characterB.confidence) return -1;
  if (characterA.confidence < characterB.confidence) return 1;
  return 0;
}

export default function getBestMatchingFace (faceId, gender) {
  return getCharactersFaces(gender).then((charactersFaces) => {
    return Promise.all(charactersFaces.map((currentCharacter) => {
      return verify({ faceId1: faceId, faceId2: currentCharacter.faceId });
    })).then((verficationResults) => {
      return verficationResults.map((verificationScore, currentIndex) => {
        return Object.assign(charactersFaces[currentIndex], verificationScore);
      });
    }).then((enrichedCharacterData) => {
      return enrichedCharacterData.sort(sortBySimilarityScore);
    });
  });
}