import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app'; // Ensure this path matches your file
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient() // This is essential for your TaskService to work
  ]
}).catch((err) => console.error(err));