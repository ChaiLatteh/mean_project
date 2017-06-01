import { Component, OnInit } from '@angular/core';
import { IndexService } from './../index.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  user: any;
  constructor(
    private _indexService: IndexService,
    private _router: Router,
  ) { }

  ngOnInit() {
    this.getCurrentUser()
    this.updateCurrentUser()
  }
  getCurrentUser(){
    this._indexService.getCurrentUser()
    .then((user)=> {
      this.user = user
    })
    .catch( (err) => this._router.navigate(['/login']))
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
    .then((user)=>this.updateCurrentUser())
    .catch((err)=>console.log(err))
  }
  ninjaSound(){
    let ninjasound = new Audio();
    ninjasound.src="/ninjasound.wav";
    ninjasound.load();
    ninjasound.play();
  }
  pickSound(){
    let picksound = new Audio();
    picksound.src="/picksound.wav";
    picksound.load();
    picksound.play();
  }

}
