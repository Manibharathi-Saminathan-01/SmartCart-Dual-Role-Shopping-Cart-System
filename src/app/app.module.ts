import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentFormComponent } from './component-form/component-form.component';
import { ComponentAdminPageComponent } from './component-admin-page/component-admin-page.component';
import { ComponentUserPageComponent } from './component-user-page/component-user-page.component';
import { RowColorDirectiveDirective } from './Directives/row-color.directive.directive';
import { TrimePipePipe } from './pipes/trime.pipe.pipe';
import { PriceTagPipePipe } from './pipes/price-tag.pipe.pipe';
import { NumberNotAloowDirectiveDirective } from './Directives/number-not-aloow.directive.directive';
import { TooltipDirectiveDirective } from './Directives/tooltip.directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    ComponentFormComponent,
    ComponentAdminPageComponent,
    ComponentUserPageComponent,
    RowColorDirectiveDirective,
    TrimePipePipe,
    PriceTagPipePipe,
    NumberNotAloowDirectiveDirective,
    TooltipDirectiveDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
