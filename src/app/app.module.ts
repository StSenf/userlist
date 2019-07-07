import {NgModule} from "@angular/core";
import {MatTableModule} from "@angular/material";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {UserListComponent} from "./user-list/user-list.component";

import {UserAddressPipe} from "./shared/pipes/user-address.pipe";
import {AlbumService} from "./shared/services/album.service";
import {PhotoService} from "./shared/services/photo.service";
import {UserService} from "./shared/services/user.service";
import {AlbumResolver} from "./user-detail/resolver/album.resolver";
import {PhotoResolver} from "./user-detail/resolver/photo.resolver";
import {UserDetailResolver} from "./user-detail/resolver/user-detail.resolver";
import {UserDetailComponent} from "./user-detail/user-detail.component";
import {UserListResolver} from "./user-list/resolver/user-list.resolver";

@NgModule({
  bootstrap: [
    AppComponent,
  ],
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailComponent,
    UserAddressPipe,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
  ],
  providers: [
    AlbumService,
    AlbumResolver,
    PhotoService,
    PhotoResolver,
    UserService,
    UserDetailResolver,
    UserListResolver,
  ],
})
export class AppModule { }
