import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from "./app.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgSelectModule } from '@ng-select/ng-select'
import { AppRoutingModule } from "./app-routing.module";
import { ComponentsModule } from "./components/components.module";
import { CommonModule } from "@angular/common";
import { LocationStrategy, PathLocationStrategy } from "@angular/common";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { IconsComponent } from "./pages/icons/icons.component";
import { NotificationsComponent } from "./pages/notifications/notifications.component";
import { UserComponent } from "./pages/user/user.component";
import { TypographyComponent } from "./pages/typography/typography.component";
import { CategoryComponent } from './pages/tables/category/category.component';
import { CategoryModalComponent } from './pages/tables/category/category-modal.component';
import { TableComponent } from './pages/tables/tables.component';
import { CityComponent } from './pages/tables/city/city.component';
import { CityModalComponent } from './pages/tables/city/city-modal.component';
import { RegionsComponent } from './pages/tables/regions/regions.component';
import { RegionsModalComponent } from './pages/tables/regions/regions-modal.component';
import { CountryComponent } from './pages/tables/country/country.component';
import { CountryModalComponent } from './pages/tables/country/country-modal.component';
import { SupplierComponent } from './pages/tables/supplier/supplier.component';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { SupplierModalComponent } from './pages/tables/supplier/supplier-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { EmployeeComponent } from './pages/tables/employee/employee.component'

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    NgSelectModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    ToastrModule.forRoot()
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    NotificationsComponent,
    DashboardComponent,
    IconsComponent,
    UserComponent,
    TypographyComponent,
    CategoryComponent,
    CategoryModalComponent,
    TableComponent,
    CityComponent,
    CityModalComponent,
    RegionsComponent,
    RegionsModalComponent,
    CountryComponent,
    CountryModalComponent,
    SupplierComponent,
    SupplierModalComponent,
    EmployeeComponent,
  ],
  providers: [
    { provide: LocationStrategy, useClass: PathLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
