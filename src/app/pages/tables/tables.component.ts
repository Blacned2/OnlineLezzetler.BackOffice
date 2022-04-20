import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-table-list',
    templateUrl: './tables.component.html'
})

export class TableComponent implements OnInit { 
    
    tables1 = [
        { icon: 'icon-align-center', label: 'Categories', path: '/tables/categories' },
        { icon: 'icon-basket-simple', label: 'Products', path: '/tables/products' },
        { icon: 'icon-world', label: 'Regions', path: '/tables/regions' },
        { icon: 'icon-istanbul', label: 'Cities', path: '/tables/cities' },
        { icon: 'icon-single-02', label: 'Employees', path: '/tables/employees' },
        { icon: 'icon-square-pin', label: 'Countries', path: '/tables/countries' },


    ]
    tables2 = [
        { icon: 'icon-delivery-fast', label: 'Shippers', path: '/tables/shippers' },
        { icon: 'icon-atom', label: 'Suppliers', path: '/tables/suppliers' },
        { icon: 'icon-components', label: 'Customers', path: '/tables/customers' },
        { icon: 'icon-notes', label: 'Orders', path: '/tables/orders' },
        { icon: 'icon-zoom-split', label: 'Order Details', path: '/tables/orders-details' },
    ]

    ngOnInit(): void {

    }

}