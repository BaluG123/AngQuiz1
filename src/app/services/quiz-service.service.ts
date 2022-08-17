import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizServiceService {
  sixurl="https://restquizz.herokuapp.com/quiz/sixapi/"
  sevenurl="https://restquizz.herokuapp.com/quiz/sevenapi/"
  eighturl="https://restquizz.herokuapp.com/quiz/eightapi/"
  nineurl="https://restquizz.herokuapp.com/quiz/nineapi/"
  caurl="https://restquizz.herokuapp.com/quiz/Currentapi/"
  gurl="https://restquizz.herokuapp.com/quiz/generalapi/"
  tenurl="https://restquizz.herokuapp.com/quiz/tenapi/"
  constructor(private http:HttpClient) { }
  getSixData(){
    return this.http.get(this.sixurl)
  }
  getSevenData(){
    return this.http.get(this.sevenurl)
  }
  getEightData(){
    return this.http.get(this.eighturl)
  }
  getCurrentData(){
    return this.http.get(this.caurl)
  }
  getNineData(){
    return this.http.get(this.nineurl)
  }
  getGkData(){
    return this.http.get(this.gurl)
  }
  getTendata(){
    return this.http.get(this.tenurl)
  }
}
