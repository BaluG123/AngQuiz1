import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizServiceService {
  sixurl="http://competativequiz.pythonanywhere.com/quiz/sixapi/"
  sevenurl="http://competativequiz.pythonanywhere.com/quiz/sevenapi/"
  eighturl="http://competativequiz.pythonanywhere.com/quiz/eightapi/"
  nineurl="http://competativequiz.pythonanywhere.com/quiz/nineapi/"
  caurl="http://competativequiz.pythonanywhere.com/quiz/Currentapi/"
  gurl="http://competativequiz.pythonanywhere.com/quiz/generalapi/"
  tenurl="http://competativequiz.pythonanywhere.com/quiz/tenapi/"
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
