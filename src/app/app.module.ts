import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


import { AppComponent } from './app.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavItemComponent } from './shared/header/nav-item/nav-item.component';
import { LangItemComponent } from './shared/header/lang-item/lang-item.component';
import { HomeComponent } from './public/home/home.component';
import { CookieDesclaimerComponent } from './shared/cookie-desclaimer/cookie-desclaimer.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { MainComponent } from './shared/main/main.component';
import { DataService } from './shared/data.service';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    declarations: [
        AppComponent,
        LoadingComponent,
        HeaderComponent,
        FooterComponent,
        NavItemComponent,
        LangItemComponent,
        HomeComponent,
        CookieDesclaimerComponent,
        NotFoundComponent,
        MainComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        AppRoutingModule,
        BrowserAnimationsModule
    ],
    providers: [
        DataService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
