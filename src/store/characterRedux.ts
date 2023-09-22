import { createStore } from "redux";
import { Character, IParametrs, ICharacter, IAction } from "../models/Character";

const defaultParametrs: IParametrs = {
  strength: 0,
  agility: 0,
  intelligence: 0,
  charisma: 0,
}

const defaultCharacter: Character = new Character('User', defaultParametrs);
const defaultState: ICharacter = defaultCharacter.getICharacter();

function characterReducer(state = defaultState, action: IAction) {
  switch (action.type) {
    case 'character/set/name':
      return { ...state, name: action.payload };
    case 'character/set/parametrs':
      return { ...state, parametrs: action.payload };
    case 'character/set/skills':
      return { ...state, skills: action.payload };
    default:
      return state;
  }
}

export const store = createStore(characterReducer);