import { Component, OnInit } from '@angular/core';
import { QuizServiceService } from 'src/app/services/quiz-service.service';

@Component({
  selector: 'app-maths',
  templateUrl: './maths.component.html',
  styleUrls: ['./maths.component.css']
})
export class MathsComponent implements OnInit {
  SixData:any;
  constructor(private sixdata:QuizServiceService) {
     this.sixdata.getSixData().subscribe((result)=>{
      this.SixData=result;
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
