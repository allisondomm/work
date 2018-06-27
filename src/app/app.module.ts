import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { NewAccountPage } from '../pages/newAccount/newAccount';
import { ProfilePage } from '../pages/profile/profile';
import { SearchPage } from '../pages/search/search';
import { MainScreenPage } from '../pages/main-screen/main-screen';
import { MapPage } from '../pages/map/map';
import { CreateProfilePage } from '../pages/create-profile/create-profile';
import { ListsPage } from '../pages/lists/lists';
import { FavoritesPage } from '../pages/favorites/favorites';
import { OrderHistoryPage } from '../pages/order-history/order-history';
import { OnlineShopsPage } from '../pages/online-shops/online-shops';

import { File } from '@ionic-native/file'
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';

import { ComponentsModule } from '../components/components.module';
import { SearchResultsPage } from '../pages/search-results/search-results';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    NewAccountPage,
    ProfilePage,
    SearchPage,
    MainScreenPage,
    MapPage,
    CreateProfilePage,
    ListsPage,
    FavoritesPage,
    OrderHistoryPage,
    OnlineShopsPage,
    FavoritesPage,
    SearchResultsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    NewAccountPage,
    ProfilePage,
    SearchPage,
    MainScreenPage,
    MapPage,
    CreateProfilePage,
    ListsPage,
    FavoritesPage,
    OrderHistoryPage,
    OnlineShopsPage,
    FavoritesPage,
    SearchResultsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
