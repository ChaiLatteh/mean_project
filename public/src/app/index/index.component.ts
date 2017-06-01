import { Component, OnInit } from '@angular/core';
import { IndexService } from './index.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  user:any;
  constructor(
    private _indexService:IndexService,
    private _router:Router,
  ) { }

  ngOnInit() {
    this.getCurrentUser()
  }
  getCurrentUser(){
    this._indexService.getCurrentUser()
    .then((user)=> {
      this.user = user
      this._router.navigate(['/index'])
    })
    .catch( (err) => this._router.navigate(['/']))
  }
  updateCurrentUser(){
    this._indexService.updateCurrentUser()
    .then((user)=>{
      this.user=user
    })
    .catch((err)=>console.log(err))
  }
  buttonClicked(user){
    this._indexService.buttonClicked(user)
    .then((user)=>{
      console.log("SUCCESS");
      this.updateCurrentUser()
    })
    .catch((err)=>console.log(err))
  }
  playAudio(){
    let audio = new Audio();
    audio.src="/anvil.mp3"
    audio.load();
    audio.play();
  }

}
