import { Component } from '@angular/core';
import { StaticProductsService } from '../../Services/static-products.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink,RouterLinkActive],
  providers:[StaticProductsService],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  constructor(private _stataicProductService:StaticProductsService){
   // this._stataicProductService.products=[]  //here instance not shared between other components
  }

}
