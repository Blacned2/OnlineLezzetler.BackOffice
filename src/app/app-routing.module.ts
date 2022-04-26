import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { TypographyComponent } from "./pages/typography/typography.component";
import { UserComponent } from "./pages/user/user.component";
import { NotificationsComponent } from "./pages/notifications/notifications.component";
import { IconsComponent } from "./pages/icons/icons.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { TableComponent } from "./pages/tables/tables.component";
import { CategoryComponent } from "./pages/tables/category/category.component";
import { CityComponent } from "./pages/tables/city/city.component";
import { RegionsComponent } from "./pages/tables/regions/regions.component";
import { CountryComponent } from "./pages/tables/country/country.component";
import { SupplierComponent } from "./pages/tables/supplier/supplier.component";
import { EmployeeComponent } from "./pages/tables/employee/employee.component";

const routes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "icons", component: IconsComponent },
  { path: "notifications", component: NotificationsComponent },
  {
    path: "tables", component: TableComponent, children: [
      { path:'',component:CategoryComponent},
      { path: "categories", component: CategoryComponent }, 
      { path: "cities", component: CityComponent }, 
      { path: "regions", component: RegionsComponent }, 
      { path: "countries", component: CountryComponent }, 
      { path: "suppliers", component: SupplierComponent }, 
      { path: "employees", component: EmployeeComponent }, 
    ]
  },

  { path: "user", component: UserComponent },
  { path: "typography", component: TypographyComponent },
  { path: "", redirectTo: "dashboard", pathMatch: "full" },
  { path: "**", redirectTo: "dashboard" }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
