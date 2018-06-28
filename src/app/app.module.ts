import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { SearchPage } from '../pages/search/search';
import { MainScreenPage } from '../pages/main-screen/main-screen';
import { MapPage } from '../pages/map/map';
import { CreateProfilePage } from '../pages/create-profile/create-profile';
import { ListsPage } from '../pages/lists/lists';
import { FavoritesPage } from '../pages/favorites/favorites';
import { OrderHistoryPage } from '../pages/order-history/order-history';
import { OnlineShopsPage } from '../pages/online-shops/online-shops';

import { SQLite} from '@ionic-native/sqlite';
import{ SQLitePorter } from '@ionic-native/sqlite-porter';
import { ComponentsModule } from '../components/components.module';
import { SearchResultsPage } from '../pages/search-results/search-results';
import { DatabaseProvider } from '../providers/database/database';
import{ IonicStorageModule } from '@ionic/storage';
import{ HttpModule } from '@angular/http';
import { CartPage } from '../pages/cart/cart';
import { ProductListPage } from '../pages/product-list/product-list';
import { ProductPage } from '../pages/product/product';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
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
    SearchResultsPage,
    CartPage,
    ProductPage, 
    ProductListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule,
    IonicStorageModule.forRoot(),
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
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
    SearchResultsPage,
    CartPage,
    ProductPage, 
    ProductListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    DatabaseProvider,
    SQLitePorter
  ]
})
export class AppModule { }
