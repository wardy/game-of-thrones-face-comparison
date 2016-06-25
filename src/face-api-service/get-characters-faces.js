import gameOfThrones from '../face-lists/game-of-thrones';
import detectFromURL from './detect-from-url'

export default function getCharactersFaces () {
  return Promise.all(gameOfThrones.seasonOne.male.map((currentCharacter) => {
    return detectFromURL(currentCharacter[Object.keys(currentCharacter)]);
  })).then((characters) => {
    return Promise.resolve(characters.map((char, idx) => {
      return Object.assign(char[0], gameOfThrones.seasonOne.male[idx]);
    }));
  });
}