import { Component, OnInit } from '@angular/core';
import { QuizServiceService } from 'src/app/services/quiz-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-socialscience',
  templateUrl: './socialscience.component.html',
  styleUrls: ['./socialscience.component.css']
})
export class SocialscienceComponent implements OnInit {
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
