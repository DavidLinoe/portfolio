import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { LoadingComponent } from './loading/loading.component';

export const routes: Routes = [

    { path: '', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'gallery', component: GalleryComponent },

];
