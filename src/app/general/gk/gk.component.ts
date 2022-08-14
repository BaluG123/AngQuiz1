import { Component, OnInit } from '@angular/core';
import { QuizServiceService } from 'src/app/services/quiz-service.service';

@Component({
  selector: 'app-gk',
  templateUrl: './gk.component.html',
  styleUrls: ['./gk.component.css']
})
export class GkComponent implements OnInit {
  GkData:any;
  constructor(private gkdata:QuizServiceService) {
    this.gkdata.getGkData().subscribe((result)=>{
      this.GkData=result;
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
