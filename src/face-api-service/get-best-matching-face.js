import verify from './verify';

function sortBySimilarityScore (characterA, characterB) {
  if (characterA.confidence > characterB.confidence) return -1;
  if (characterA.confidence < characterB.confidence) return 1;
  return 0;
}

export default function getBestMatchingFace (faceId, charactersFaces) {
  return Promise.all(charactersFaces.map((currentCharacter) => {
    return verify({ faceId1: faceId, faceId2: currentCharacter.faceId });
  })).then((verficationResults) => {
    return Promise.resolve(verficationResults.map((verificationScore, currentIndex) => {
      return Object.assign(charactersFaces[currentIndex], verificationScore);
    }));
  }).then((enrichedCharacterData) => {
    return Promise.resolve(enrichedCharacterData.sort(sortBySimilarityScore));
  });
}