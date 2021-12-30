import { Component, OnInit } from '@angular/core';
import {DictionaryService} from "../../service/dictionary.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.scss']
})
export class DictionaryDetailComponent implements OnInit {

  word: any;

  constructor(
    private dictionaryService: DictionaryService,
    private activeRouted: ActivatedRoute,
    private domSanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.activeRouted.paramMap.subscribe((paramMap: ParamMap) => {
      const word = paramMap.get('word');
      this.word = this.dictionaryService.translate(word);
    });
  }

}
