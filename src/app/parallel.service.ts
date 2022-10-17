import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ParallelService {
  api: string | undefined
  constructor(private http:HttpClient) { }

  getJokes(){
    this.api = 'https://v2.jokeapi.dev/joke/Any?amount=10'
    return this.http.get<any>(this.api)
  }

  getSimilarThings(){
    this.api = 'https://animechan.vercel.app/api/random'
    return this.http.get<any>(this.api);
  }
  getAnimals(){
    this.api = 'https://zoo-animal-api.herokuapp.com/animals/rand/10'
    return this.http.get<[]>(this.api);
  }
}
