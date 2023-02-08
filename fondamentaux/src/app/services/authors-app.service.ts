import { Injectable } from '@angular/core';

export interface Author {
  name:string;
}

export interface Test {
  
}

@Injectable({
  providedIn: 'root'
})
export class AuthorsAppService {

  constructor() { }

  getAllAuthor():Author[] {
    return [
      {
        name: "James"
      },
      {
        name: "Bibinbou"
      },
      {
        name: "Cameron"
      }
    ]
  }

  getTest():string[] {
    return [
      "salut",
      "ça",
      "va",
      "?"
    ]
  }
}
