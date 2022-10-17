import { Component, OnInit } from '@angular/core';
import {NativeCookieService} from "../native-cookie-service.service";
import {ParallelService} from "../parallel.service";
import {combineLatest, forkJoin, Observable} from "rxjs";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  jokes: Array<object> | undefined;
  things:Array<object> | undefined;
  animals:Array<object> | undefined;

  constructor(private cookie:NativeCookieService,
              private parallelService:ParallelService
  ) {}
  ngOnInit() {
    this.cookie.setCookie({
      name: 'user',
      value: 'Jahir',
      session: true,
    });

    this.getDataParallel()
  }

  /**
   *
   * https://www.devcurry.com/2019/11/parallel-http-calls-from-angular.html
   * forkJoin, combineLatest are from rxjs
   * which help to get multiple observable
   * in a parallel way
   * ex: forkJoin(observable1,observable2,...)
   *        .subscribe([stream1,stream2,...])=>{
   *          [code]
   *        }
   */


  private getDataParallel() {
    const jokes = this.parallelService.getJokes()
    const things = this.parallelService.getSimilarThings()
    //const animals = this.parallelService.getAnimals()
    combineLatest(jokes,things)
      .subscribe(([value1,value2])=>{
        console.log(`Value 1: ${value1.jokes}`,`Value 2: ${value2}`)
        this.jokes = value1.jokes
        console.log(this.jokes)
      })
  }
}
