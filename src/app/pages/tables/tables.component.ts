import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-table-list',
    template: `
    <div class="content">
        <div class="container-fluid">
            <div class="row g-0 m-0 p-0">
                <div class="col-lg-3 col-md-3 card" style='height: 100%;right:15px'> 
                    <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <li routerLinkActive="active" class="nav-item menu-open" *ngFor="let table of tables">
                            <a class="nav-link d-flex" style="align-items: center;" [routerLink]="[table.path]">
                                <i class="tim-icons m-1 {{table.icon}}"></i>    
                                <p class="p-0 m-0 g-0 m-1">{{table.label}}</p>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="col-md-9 col-lg-9 col-sm-12">
                    <router-outlet></router-outlet>
                </div>
            </div>
        </div>
    </div>
    `,

})

export class TableComponent implements OnInit {

    tables = [
        { icon: 'icon-align-center', label: 'Categories', path: '/tables/categories' },
        { icon: 'icon-basket-simple', label: 'Products', path: '/tables/products' },
        { icon: 'icon-world', label: 'Regions', path: '/tables/regions' },
        { icon: 'icon-istanbul', label: 'Cities', path: '/tables/cities' },
        { icon: 'icon-single-02', label: 'Employees', path: '/tables/employees' },
        { icon: 'icon-square-pin', label: 'Countries', path: '/tables/countries' },
        { icon: 'icon-delivery-fast', label: 'Shippers', path: '/tables/shippers' },
        { icon: 'icon-atom', label: 'Suppliers', path: '/tables/suppliers' },
        { icon: 'icon-components', label: 'Customers', path: '/tables/customers' },
        { icon: 'icon-notes', label: 'Orders', path: '/tables/orders' },
        { icon: 'icon-zoom-split', label: 'Order Details', path: '/tables/orders-details' },
    ]

    ngOnInit(): void {

    }

}