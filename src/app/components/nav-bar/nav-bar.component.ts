import { Component, OnInit } from '@angular/core';
import { StaticProductsService } from '../../Services/static-products.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UserAuthService } from '../../Services/user-auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink,RouterLinkActive,CommonModule],
  providers:[StaticProductsService],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {
  isUserLogged:boolean=false
  constructor(private _userAuthService:UserAuthService){
   
  }
  ngOnInit(): void {
   //this.isUserLogged= this._userAuthService.getUserLogged()
   this._userAuthService.getAuthSubject().subscribe({
    next:(value)=>{this.isUserLogged=value}
   })
  }

}
