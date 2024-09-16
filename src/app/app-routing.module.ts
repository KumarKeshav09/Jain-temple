import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { TeamComponent } from './team/team.component';
import { ProductsComponent } from './products/products.component';
import { BlogComponent } from './blog/blog.component';
import { CareersComponent } from './careers/careers.component';
import { NewsComponent } from './news/news.component';
import { GalleryComponent } from './gallery/gallery.component';
import { JainBhajanComponent } from './jain-bhajan/jain-bhajan.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutUsComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'bhajan',component:JainBhajanComponent},
  {path:'services',component:OurServicesComponent},
  {path:'team',component:TeamComponent},
  {path:'contact',component:ContactUsComponent},
  {path:'products',component:ProductsComponent},
  {path:'blogs',component:BlogComponent},
  {path:'blogs/:id',component:BlogDetailComponent},
  {path:'careers',component:CareersComponent},
  {path:'news',component:NewsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
