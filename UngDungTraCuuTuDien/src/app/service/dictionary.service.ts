import { Injectable } from '@angular/core';
import {Iword} from "../model/iword";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  dictionary: Iword[] = [{
    word: 'Cho',
    mean: 'Dog'
  },
    {
      word: 'Meo',
      mean: 'Cat'
    }]

  constructor() { }

  translate(word: string | null) {
    return this.dictionary.find(wordFrom => wordFrom.word === word)
  }
}
