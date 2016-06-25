import gameOfThrones from '../face-lists/game-of-thrones';
import detectFromURL from './detect-from-url'

export default function getCharactersFaces () {
  return Promise.all(gameOfThrones.seasonOne.male.reduce((acc, cur) => {
    let newAcc = acc;
    newAcc.push(detectFromURL(cur[Object.keys(cur)]));
    return newAcc;
  },[]));
}