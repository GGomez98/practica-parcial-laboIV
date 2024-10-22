import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"parctica-parcial-1","appId":"1:156582038643:web:c8883516267fe59e4a6e06","storageBucket":"parctica-parcial-1.appspot.com","apiKey":"AIzaSyCqs3iBv9bAyS-nTD6rkbf5qcw1l3tCweM","authDomain":"parctica-parcial-1.firebaseapp.com","messagingSenderId":"156582038643"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()),
  provideHttpClient()]
};
