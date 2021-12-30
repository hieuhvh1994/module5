import { Component, OnInit } from '@angular/core';
import {Iword} from "../../model/iword";
import {DictionaryService} from "../../service/dictionary.service";

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.scss']
})
export class DictionaryPageComponent implements OnInit {

  dictionary: Iword[] = [];

  constructor(private dictionaryService: DictionaryService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.dictionary = this.dictionaryService.dictionary;
  }
}
