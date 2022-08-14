import { Component, OnInit } from '@angular/core';
import { QuizServiceService } from 'src/app/services/quiz-service.service';
@Component({
  selector: 'app-socialscience',
  templateUrl: './socialscience.component.html',
  styleUrls: ['./socialscience.component.css']
})
export class SocialscienceComponent implements OnInit {
  SevenData:any;
  constructor(private sixdata:QuizServiceService) {
     this.sixdata.getSevenData().subscribe((result)=>{
      this.SevenData=result;
     })
  }

  ngOnInit(): void {
  }
  qdatas:any;
  getValue(data:any, question: { answer: any; }){
    this.qdatas=data
    console.log(data.rb == question.answer)
 }
}
