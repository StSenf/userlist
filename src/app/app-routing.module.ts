import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UserListComponent} from './user-list/user-list.component';
import {UserDetailComponent} from './user-detail/user-detail.component';
import {UserDetailResolver} from './user-detail/resolver/user-detail.resolver';
import {UserListResolver} from './user-list/resolver/user-list.resolver';
import {AlbumResolver} from './user-detail/resolver/album.resolver';
import {PhotoResolver} from './user-detail/resolver/photo.resolver';

const routes: Routes = [
  {
    path: "users",
    component: UserListComponent,
    resolve: {
      userList: UserListResolver,
    }
  },
  {
    path: 'user/:id',
    component: UserDetailComponent,
    resolve: {
      singleUser: UserDetailResolver,
      albums: AlbumResolver,
      photos: PhotoResolver,
    },
  },
  {
    path: "",
    redirectTo: "/users",
    pathMatch: 'full',
  },
  {
    path: "**",
    redirectTo: "/users",
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
