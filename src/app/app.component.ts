import { Component } from '@angular/core';
import { lorem, random } from 'faker';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'typing';
  randomText = lorem.sentences();
  solved = false;
  typedText='';

  changeText(){
    this.randomText = lorem.sentences();
    this.typedText='';
  }
  checkText(event:any){
      this.typedText = event.target.value;
  }

  compare(enteredChar:string, randomText:string){
    if(!enteredChar){
      return 'pending';
    }
    return (enteredChar ===randomText)? 'correct' : 'incorrect';
  }
}
