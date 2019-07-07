import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {AlbumResolver} from "./user-detail/resolver/album.resolver";
import {PhotoResolver} from "./user-detail/resolver/photo.resolver";
import {UserDetailResolver} from "./user-detail/resolver/user-detail.resolver";
import {UserDetailComponent} from "./user-detail/user-detail.component";
import {UserListResolver} from "./user-list/resolver/user-list.resolver";
import {UserListComponent} from "./user-list/user-list.component";

const routes: Routes = [
  {
    component: UserListComponent,
    path: "users",
    resolve: {
      userList: UserListResolver,
    },
  },
  {
    component: UserDetailComponent,
    path: "user/:id",
    resolve: {
      albums: AlbumResolver,
      photos: PhotoResolver,
      singleUser: UserDetailResolver,
    },
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/users",
  },
  {
    path: "**",
    pathMatch: "full",
    redirectTo: "/users",
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
