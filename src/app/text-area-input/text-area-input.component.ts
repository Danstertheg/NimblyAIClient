import { Component, OnInit, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { SpinnerOverlayComponentComponent } from '../spinner-overlay-component/spinner-overlay-component.component';
import io from "socket.io-client";

// Socket Io (Glitch) URL:
const serverUrl = "https://nimbly.glitch.me"
@Component({
  selector: 'app-text-area-input',
  templateUrl: './text-area-input.component.html',
  styleUrls: ['./text-area-input.component.scss']
})
@Injectable()
export class TextAreaInputComponent implements OnInit {
  socket:any;
  @Input() AIresponse: string = '';
  @Input() tabOne: boolean = true;
  @Input() tabTwo: boolean = false;
  creditAmount = 0;
  sessionToken = localStorage.getItem("sessionToken");
  AIWriter: FormGroup;
  // AITab: FormGroup;
  // AITabZero: FormGroup;
  constructor(private modalOpener: MatDialog) { 
    this.socket = io(serverUrl);
    this.AIWriter = new FormGroup({
      AIInput: new FormControl('')
    });
    // this.AITabZero = new FormGroup({
    //   tabRadioZero: new FormControl('')
    // })
    // this.AITab = new FormGroup({
    //   tabRadio : new FormControl('')
    // });
  }
  
  set data(val: string){
    // this.AIWriter.value.AIInput = val;
    this.AIresponse = val;
    console.log(this.AIresponse)
  }
  get input(){
    return this.AIWriter.value.AIInput;
  }
  async ngOnInit(){
    await fetch("https://finaltest-ten.vercel.app/api/user/creditBalance", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${this.sessionToken}`
        },
      })
        .then(response => response.json())
        .then(data => {
          console.log(data)
          this.creditAmount = data.credits;
        })
        .catch(error => {
          this.creditAmount = 0;
          console.error("Error:", error);
        });
  }
  generateIdeas(){
    this.openAI("Please generate ideas about: ")
  }
  improveText(){
    this.openAI("Please Improve the following text: ")
  }
  fixGrammar(){
    this.openAI("Please fix the grammar mistakes in the followng text: ")
  }
  writeDraft(){
    this.openAI("Please write a draft on the prompt: ")
  }
  summarize(){
    this.openAI("Please summarize the following text: ")
  }
  complete(){
    this.openAI("Please add more to the following text and complete it if possible : ")
  }
  translate(){
    this.openAI("Please find out the language used and translate the following text into english: ")
  }
  createPoem(){
    this.openAI("Please create a poem using the prompt: ")
  }
  createScript(){
    this.openAI("Please create a script using the prompt: ")
  }
  createStory(){
    this.openAI("Please create story using the prompt: ")
  }
  rephrase(){
    this.openAI("Please rephrase the following text: ")
  }
  test(){
    console.log(this.AIWriter.value.AIInput)
  }

  selectTabOne(){
    this.tabOne = true;
    this.tabTwo = false;
  }
  selectTabTwo(){
    this.tabOne = false;
      this.tabTwo = true;
  }
  async openAI(promptz : string){
    if (!this.socket.connected){
      this.AIresponse = "Error establishing connection to the server. Please try again.";
      this.tabOne = false;
      this.tabTwo = true;
      return
    }
    let prompt = promptz + this.AIWriter.value.AIInput;
    let engine = 'text-davinci-002';
    let sessionToken = localStorage.getItem("sessionToken");
  const request = new XMLHttpRequest();
  request.open('POST', 'https://finaltest-ten.vercel.app/api/handleAI/premium');
  request.setRequestHeader('Content-Type', 'application/json');
  request.setRequestHeader('Authorization', `Bearer ${sessionToken}`);

  request.onload = () =>  {
    if (request.status >= 200 && request.status < 400) {
      // Success!
      loader.close(SpinnerOverlayComponentComponent);
      const response = JSON.parse(request.responseText);
      const completedText = response.completedText;
      if (response.credits){
        console.log(response.credits + " new credit amount")
        this.creditAmount = response.credits;
      }
      this.AIresponse = completedText;
      this.tabOne = false;
      this.tabTwo = true;
      // this.AITabZero.value.tabRadioZero = false;
      // this.AITab.value.tabRadio = true;
      // const output = document.getElementById("output");
      // output.value = completedText;
      // document.getElementById("loader").innerHTML = '';
    } else {
      // There was an error
      this.AIresponse = request.responseText
    }
  };

  request.onerror = function() {
    console.error('An error occurred while making the request');
  };

  const data = {
    model: engine,
    prompt: prompt
  };
  var loader = this.modalOpener.open(SpinnerOverlayComponentComponent);
  // document.getElementById("loader").innerHTML = '<span>Loading, Please wait...</span>'; // Set here the image before sending request
  request.send(JSON.stringify(data));
  }








}
