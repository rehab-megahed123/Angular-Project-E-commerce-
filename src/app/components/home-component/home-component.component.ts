import { Component, OnDestroy, OnInit } from '@angular/core';
import { NotificationService } from '../../Services/notification.service';
import { filter, startWith, Subscription } from 'rxjs';

@Component({
  selector: 'app-home-component',
  imports: [],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent implements OnInit,OnDestroy{
  subScription!:Subscription
  constructor(private _notificationService:NotificationService){


  }
  ngOnDestroy(): void {
    this.subScription.unsubscribe()
  }
  ngOnInit(): void {
    this.subScription= this._notificationService.getNotifications().pipe(
      filter((msg)=>msg.startsWith('hamada'))
    ).subscribe({
      next:(notification)=>{console.log(notification)},
      error:(error)=>{console.log(error)},
      complete:()=>{console.log("notifications are completed")},
      

     })
    // ((notification)=>{
    //   console.log(notification);
    // },(error)=>{
    //   console.log(error)

    // })
  }

}
