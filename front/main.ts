import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { HttpClientModule } from '@angular/common/http';

platformBrowserDynamic().bootstrapModule(AppModule, {
  providers: [
    { provide: HttpClientModule, useClass: HttpClientModule }
  ]
}).catch(err => console.error(err));
