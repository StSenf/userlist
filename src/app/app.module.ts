import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UserListComponent} from './user-list/user-list.component';
import {HttpClientModule} from '@angular/common/http';

import {AlbumResolver} from './user-detail/resolver/album.resolver';
import {UserAddressPipe} from './shared/pipes/user-address.pipe';
import {UserDetailComponent} from './user-detail/user-detail.component';
import {UserDetailResolver} from './user-detail/resolver/user-detail.resolver';
import {UserListResolver} from './user-list/resolver/user-list.resolver';
import {PhotoResolver} from './user-detail/resolver/photo.resolver';
import {PhotoService} from './shared/services/photo.service';
import {AlbumService} from './shared/services/album.service';
import {UserService} from './shared/services/user.service';

@NgModule({
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
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
