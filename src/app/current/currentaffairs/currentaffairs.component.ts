import { Component, OnInit } from '@angular/core';
import { QuizServiceService } from 'src/app/services/quiz-service.service';

@Component({
  selector: 'app-currentaffairs',
  templateUrl: './currentaffairs.component.html',
  styleUrls: ['./currentaffairs.component.css']
})
export class CurrentaffairsComponent implements OnInit {
  CurrentData:any;
  constructor(private currentdata:QuizServiceService) {
    this.currentdata.getCurrentData().subscribe((result)=>{
      this.CurrentData=result;
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
