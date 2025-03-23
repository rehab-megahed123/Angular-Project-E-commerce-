import { Routes } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { ProductsComponent } from './components/products/products.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { VisionComponent } from './components/vision/vision.component';
import { ValuesComponent } from './components/values/values.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

export const routes: Routes = [
   {path:'',redirectTo:'Home',pathMatch:'full'} ,
    {path:'Home',component:HomeComponentComponent} ,// /Home
    {path:'Products',component:ProductsComponent}  ,  // /Products
    {path:'AboutUs',component:AboutUsComponent,children:[
        {path:'',redirectTo:'Vision',pathMatch:'full'},
        {path:'Vision',component:VisionComponent}, // /AboutUs/Vision
        {path:'Values',component:ValuesComponent}  // /AboutUs/Values
      
    ]}  ,    // /AboutUs
    {path:'Details/:id',component:ProductDetailsComponent}, // /Details
    {path:'**',component:NotFoundComponent}     //undefined 
];
