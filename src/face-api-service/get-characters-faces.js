import gameOfThrones from '../face-lists/game-of-thrones';
import detectFromURL from './detect-from-url'

export default function getCharactersFaces () {
  const result = gameOfThrones.seasonOne.male.reduce((acc, cur) => {
    let newAcc = acc;
    detectFromURL(cur[Object.keys(cur)]).then((characterFaceId) => {
      newAcc.push(characterFaceId);
    });
    return newAcc;
  },[]);
  console.log(result);
}