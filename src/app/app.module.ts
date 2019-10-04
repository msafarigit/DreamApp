import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ModalComponent } from './modal/modal.component';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { TemplateReferenceVariableComponent } from './template-reference-variable/template-reference-variable.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';

import { HighlightDirective } from './directive/highlight.directive';
import { LifecycleChildComponent } from './lifecycle-child/lifecycle-child.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ModalComponent,
    StructuralDirectiveComponent,
    AttributeDirectiveComponent,
    TemplateReferenceVariableComponent,
    LifecycleComponent,



    HighlightDirective,



    LifecycleChildComponent






  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


// Shift + Alt + F
