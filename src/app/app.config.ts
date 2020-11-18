import { InjectionToken } from '@angular/core';

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export interface AppConfig {
  title: string;
  version: string;
  apiEndpoint: string;
}

export const APP_DI_CONFIG: AppConfig = {
  title: 'سامانه',
  version: '1.0.0.0',
  apiEndpoint: '/api/'
};

/* Glossary:
 url: https://angular.io/guide/glossary

 - token: An opaque identifier used for efficient table lookup. In Angular, a DI token is used to find providers of
   dependencies in the dependency injection system.
 - DI token: A lookup token associated with a dependency provider, for use with the dependency injection system.
 - provider: An object that implements one of the Provider interfaces. A provider object defines how to obtain an injectable dependency
   associated with a DI token. An injector uses the provider to create a new instance of a dependency for a class that requires it.
   Angular registers its own providers with every injector, for services that Angular defines. You can register your own
   providers for services that your app needs.
*/
