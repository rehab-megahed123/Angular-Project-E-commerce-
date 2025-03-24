import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  notification:string[]
  getNotifications():Observable<string>{
    return new Observable((observer)=>{
    //  observer.next()
   // observer.error()
    //observer.complete()
    let counter=0
   let notificationInterval= setInterval(()=>{
      
      if(counter==this.notification.length){
            observer.complete()
      }
      if(this.notification[counter]==""){
        observer.error("this is empty")
      }
      
      observer.next(this.notification[counter])
      counter++
      
    },2000);
    return {
      unsubscribe:()=>{
        clearInterval(notificationInterval)
      }
    }
    
    }

    );
  }

  constructor() { 
    this.notification=[
      "you have  un read messages",
      "people reacting to your post",
      "hamada sent you a friendv request",
      "",
      "post shared successfully"
    ]
  }
}
