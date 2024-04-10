import { Routes } from '@angular/router';
import { LayoutComponent } from './layouts/layout/layout.component';
import { ProductsComponent } from './components/products/products.component';
import { PostsComponent } from './components/posts/posts.component';
import { QuotesComponent } from './components/quotes/quotes.component';
import { CommentComponent } from './components/comment/comment.component';


export const routes: Routes = [
    {path:"",component: LayoutComponent, children:[
        {path:"products", component:ProductsComponent},
        {path:"posts", component:PostsComponent},
        {path:"quotes", component:QuotesComponent},
        {path:"comment", component:CommentComponent},
    ]}
];
