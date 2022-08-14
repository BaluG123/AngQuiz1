import { Component, OnInit } from '@angular/core';
import { QuizServiceService } from 'src/app/services/quiz-service.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-maths',
  templateUrl: './maths.component.html',
  styleUrls: ['./maths.component.css']
})
export class MathsComponent implements OnInit {
  TenData:any;
  constructor(private tendata:QuizServiceService) {
     this.tendata.getTendata().subscribe((result)=>{
      this.TenData=result;
     })
  }

  ngOnInit(): void {
  }
  qdatas:any;
  getValue(data:NgForm, question: { answer: any; }){
    this.qdatas=data
    console.log(data == question.answer)
 }
}
