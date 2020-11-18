// #region infrastructure
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
// #endregion

// #region base
import { AppRoutingModule } from './app-routing.module';
import { NavbarModule } from './navbar/navbar.module';
import { SharedModule } from '@shared/shared.module';
import { AppComponent } from './app.component';
// #endregion

// #region pipe
import { JalaliPipe } from '@pipe/jalali.pipe';
import { SqrtPipe } from '@pipe/sqrt.pipe';
import { FilterPipe } from '@pipe/filter.pipe';
// #endregion

import { ModalComponent } from '@component/modal/modal.component';
import { TemplateReferenceVariableComponent } from '@component/template-reference-variable/template-reference-variable.component';
import { DatepickerJalaliComponent } from '@component/datepicker-jalali/datepicker-jalali.component';
import { PipeExampleComponent } from '@component/pipe-example/pipe-example.component';
import { AsyncPipeExampleComponent } from '@component/async-pipe-example/async-pipe-example.component';
import { StyleExampleComponent } from '@component/style-example/style-example.component';
import { NgClassExampleComponent } from '@component/ng-class-example/ng-class-example.component';
import { NgStyleExampleComponent } from '@component/ng-style-example/ng-style-example.component';
import { NotFoundComponent } from '@component/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    TemplateReferenceVariableComponent,
    DatepickerJalaliComponent,
    PipeExampleComponent,
    JalaliPipe,
    SqrtPipe,
    FilterPipe,
    AsyncPipeExampleComponent,
    StyleExampleComponent,
    NgClassExampleComponent,
    NgStyleExampleComponent,
    NotFoundComponent

  ],
  imports: [
    BrowserModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    NavbarModule,
    SharedModule.forRoot()

  ],
  providers: [], // Using the @Injectable() providedIn property is preferable to the @NgModule() providers
  bootstrap: [AppComponent]
})
export class AppModule { }

/*
url: https://www.typescriptlang.org/
Starting with ECMAScript 2015, JavaScript has a concept of modules. TypeScript shares this concept.
Modules are executed within their own scope, not in the global scope; this means that variables, functions, classes, etc.
declared in a module are not visible outside the module unless they are explicitly exported using one of the export forms.
Conversely, to consume a variable, function, class, interface, etc.
exported from a different module, it has to be imported using one of the import forms.

Module imports are resolved differently based on whether the module reference is relative or non-relative.
A relative import is one that starts with /, ./ or ../. Some examples include:
  import Entry from "./components/Entry";
Any other import is considered non-relative. Some examples include:
  import * as $ from "jquery";
  import { Component } from "@angular/core";
*/

/*
We have 3 types of modules by The Angular style guide:
 -Feature modules
 -Core Module
 -Shared Module

 1-Feature Modules: those are the modules that encapsulate a specific feature at a logic level, for example you have a dashboard page
  that allows the users to see their projects.

 2-Core Module: Here we include functionality that will be used only ONCE, The Core module is used ONLY in the root (app) Module!
  Common services are placed in the Core Module to ensure we have only a single instance of the services to avoid unexpected behaviors.

  import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once.guard';
  export class CoreModule extends EnsureModuleLoadedOnceGuard {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
       super(parentModule);
    }
  }

 3-Shared Module: We use the SharedModule in the feature modules to make common functionality available. We also make sure to have only one Shared Module.
  We avoid placing services here! This is the most missunderstooded kind of Module! The purpose of the SharedModule is to make available commonly used:
   - components
   - directives
   - pipes

 Note the following:
  - It imports the CommonModule because the module's component needs common directives.
  - It declares and exports the utility pipe, directive, and component classes.
  - It re-exports the CommonModule and FormsModule.

 @NgModule({
  imports:      [ CommonModule ],
  declarations: [ CustomerComponent, NewItemDirective, OrdersPipe ],
  exports:      [ CustomerComponent, NewItemDirective, OrdersPipe, CommonModule, FormsModule ]
 })
 export class SharedModule { }

 Using components vs services from other modules:
  There is an important distinction between using another module's component and using a service from another module.
  Import modules when you want to use directives, pipes, and components.
  Importing a module with services means that you will have a new instance of that service,
  which typically is not what you need (typically one wants to reuse an existing service). Use module imports to control service instantiation.
*/

/*
 An NgModule describes how the application parts fit together. Every application has at least one Angular module,
 the root module, which must be present for bootstrapping the application on launch. By convention and by default, this NgModule is named AppModule.
 The @NgModule decorator identifies AppModule as an NgModule class. @NgModule takes a metadata object that tells Angular how to compile and launch the application.
  -declarations: this application's lone component. declarations: [
     YourComponent,
     YourPipe,
     YourDirective
    ]
  -imports: import BrowserModule to have browser specific services such as DOM rendering, sanitization, and location. The module's imports array
   appears exclusively in the @NgModule metadata object. It tells Angular about other NgModules that this particular module needs to function properly.
  -providers: the service providers.
  -bootstrap: the root component that Angular creates and inserts into the index.html host web page.

-Feature modules vs. root modules:
  A feature module is an organizational best practice, as opposed to a concept of the core Angular API.
  A feature module delivers a cohesive set of functionality focused on a specific application need such as a user workflow, routing, or forms.
   While you can do everything within the root module, feature modules help you partition the app into focused areas.
  A feature module collaborates with the root module and with other modules through the services it provides and the components, directives,
  and pipes that it shares.

There are five general categories of feature modules which tend to fall into the following groups:
 -Domain feature modules.
 -Routed feature modules.
 -Routing modules.
 -Service feature modules.
 -Widget feature modules.

1- Domain feature modules deliver a user experience dedicated to a particular application domain like editing a customer or placing an order.
 They typically have a top component that acts as the feature root and private, supporting sub-components descend from it.
 Domain feature modules consist mostly of declarations. Only the top component is exported.
 Domain feature modules rarely have providers. When they do, the lifetime of the provided services should be the same as the lifetime of the module.
 Domain feature modules are typically imported exactly once by a larger feature module.
 They might be imported by the root AppModule of a small application that lacks routing.

2- Routed feature modules are domain feature modules whose top components are the targets of router navigation routes.
 All lazy-loaded modules are routed feature modules by definition.
 Routed feature modules don’t export anything because their components never appear in the template of an external component.
 A lazy-loaded routed feature module should not be imported by any module. Doing so would trigger an eager load,
  defeating the purpose of lazy loading.That means you won’t see them mentioned among the AppModule imports.
 An eager loaded routed feature module must be imported by another module so that the compiler learns about its components.
 Routed feature modules rarely have providers for reasons explained in Lazy Loading Feature Modules.
 When they do, the lifetime of the provided services should be the same as the lifetime of the module.
 Don't provide application-wide singleton services in a routed feature module or in a module that the routed module imports.

3- A routing module provides routing configuration for another module and separates routing concerns from its companion module.
 A routing module typically does the following:
  - Defines routes.

  - Adds router configuration to the module's imports.

  - Adds guard and resolver service providers to the module's providers.

  - The name of the routing module should parallel the name of its companion module, using the suffix "Routing".
   For example, FooModule in foo.module.ts has a routing module named FooRoutingModule in foo-routing.module.ts.
   If the companion module is the root AppModule, the AppRoutingModule adds router configuration to its imports with RouterModule.forRoot(routes).
   All other routing modules are children that import RouterModule.forChild(routes).

  - A routing module re-exports the RouterModule as a convenience so that components of the companion module have access to router directives such as RouterLink and RouterOutlet.

  - A routing module does not have its own declarations. Components, directives, and pipes are the responsibility of the feature module, not the routing module.

 A routing module should only be imported by its companion module.

4- Service modules provide utility services such as data access and messaging.
 Ideally, they consist entirely of providers and have no declarations. Angular's HttpClientModule is a good example of a service module.
 The root AppModule is the only module that should import service modules.

5- A widget module makes components, directives, and pipes available to external modules.
 Many third-party UI component libraries are widget modules.
 A widget module should consist entirely of declarations, most of them exported.
 A widget module should rarely have providers.
 Import widget modules in any module whose component templates need the widgets.
*/

/*
If a component, directive, or pipe belongs to a module in the imports array, don't​ re-declare it in the declarations array.
If you wrote it and it should belong to this module, ​do​ declare it in the declarations array.
*/

/*
HttpClientModule:
 Configures the dependency injector for HttpClient with supporting services for XSRF. Automatically imported by HttpClientModule.
*/
