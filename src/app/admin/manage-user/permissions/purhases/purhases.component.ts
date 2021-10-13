import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purhases',
  templateUrl: './purhases.component.html',
  styleUrls: ['./purhases.component.scss']
})
export class PurhasesComponent implements OnInit {

  constructor() { }

  items = [
    {screen:'Procurement - Requisitions',create: true, read: true, update: true, delete: true},
    {screen:'Procurement - Requisitions - Items',create: true, read: true, update: true, delete: true},
    {screen:'Procurement - RFQ',create: true, read: true, update: true, delete: true},
    {screen:'Procurement - RFQ - Quotes',create: true, read: true, update: true, delete: true},
    {screen:'Procurement - Quotations',create: false, read: true, update: true, delete: true},
    {screen:'Procurement - Quotations - Items & Quotes',create: false, read: true, update: false, delete: false},
    {screen:'Procurement - Quotations - Items & Quotes - Quotes',create: false, read: true, update: false, delete: false},
    {screen:'Procurement - Purchase Orders - Pending',create: false, read: true, update: true, delete: false},
    {screen:'Procurement - Purchase Orders - Published',create: false, read: true, update: true, delete: false},
    {screen:'Procurement - Purchase Orders - Archived',create: false, read: true, update: false, delete: false},
    {screen:'Procurement - Consignments - Active',create: true, read: true, update: true, delete: false},
    {screen:'Procurement - Consignments - Archived',create: false, read: true, update: false, delete: false},
    {screen:'Store Management - GRN',create: false, read: true, update: true, delete: false},
    {screen:'Store Management - GRN - QA Log',create: false, read: true, update: false, delete: false},
    {screen:'Store Management - Gate Passes - IN',create: true, read: true, update: true, delete: true},
    {screen:'Store Management - Gate Passes - OUT',create: true, read: true, update: true, delete: true},
    {screen:'Store Management - Stock Transfers - Active',create: true, read: true, update: true, delete: true},
    {screen:'Store Management - Stock Transfers - Items and Quantities',create: false, read: true, update: false, delete: false},
    {screen:'Store Management - Stock Transfers - Archives',create: false, read: true, update: false, delete: false},
    {screen:'Store Management - Stock Transfers - Archives - Items and Quantities',create: false, read: true, update: false, delete: false},
    {screen:'Material Issues - Actives',create: true, read: true, update: true, delete: true},
    {screen:'Material Issues - Archives',create: false, read: true, update: false, delete: false},
    {screen:'Inventory Control - Opening Stock',create: false, read: true, update: false, delete: false},
    {screen:'Inventory Control - Reorder Levels',create: false, read: true, update: false, delete: false},
    {screen:'Inventory Control - Stock Reconciliation',create: false, read: true, update: false, delete: false},
    {screen:'Inventory Control - Stock Reconciliation - Items',create: false, read: true, update: false, delete: false},
    {screen:'Inventory Control - Stock Reconciliation - Variance',create: false, read: true, update: false, delete: false},
    {screen:'Inventory Control - Stock Adjustments',create: true, read: true, update: true, delete: true},
    {screen:'Inventory Control - Inventory Analysis - List of High Value Items',create: false, read: true, update: false, delete: false},
    {screen:'Inventory Control - Inventory Analysis - List of Low Value Items',create: false, read: true, update: false, delete: false},
    {screen:'Inventory Control - Inventory Analysis - List of Medium Value Items',create: false, read: true, update: false, delete: false},
    {screen:'Inventory Control - Inventory Analysis - List of Fast Moving Items',create: false, read: true, update: false, delete: false},
    {screen:'Inventory Control - Inventory Analysis - List of Slow Moving Items',create: false, read: true, update: false, delete: false},
    {screen:'Inventory Control - Inventory Analysis - List of No Moving Items',create: false, read: true, update: false, delete: false},
    {screen:'Service Contracts - Requisitions',create: true, read: true, update: true, delete: true},
    {screen:'Service Contracts - Requisitions - Items',create: true, read: true, update: true, delete: true},
    {screen:'Service Contracts - RFQ',create: true, read: true, update: true, delete: true},
    {screen:'Service Contracts - RFQ - Quotes',create: true, read: true, update: true, delete: true},
    {screen:'Service Contracts - Quotations',create: false, read: true, update: true, delete: true},
    {screen:'Service Contracts - Quotations - Items & Quotes',create: false, read: true, update: false, delete: false},
    {screen:'Service Contracts - Quotations - Items & Quotes - Quotes',create: false, read: true, update: false, delete: false},
    {screen:'Service Contracts - Work Orders - Pending',create: false, read: true, update: true, delete: false},
    {screen:'Service Contracts - Work Orders - Published',create: false, read: true, update: true, delete: false},
    {screen:'Service Contracts - Work Orders - Archived',create: false, read: true, update: false, delete: false},
    {screen:'Service Contracts - Service Challans - Active',create: true, read: true, update: true, delete: false},
    {screen:'Setup - Item master',create: true, read: true, update: true, delete: true},
    {screen:'Setup - Categories - Item Categories',create: true, read: true, update: true, delete: true},
    {screen:'Setup - Categories - Item Sub Categories',create: true, read: true, update: true, delete: true},
    {screen:'Setup - Categories - Service Categories',create: true, read: true, update: true, delete: true},
    {screen:'Setup - Categories - Cross Reference',create: false, read: true, update: true, delete: false},
    {screen:'Setup - Stores Mater',create: true, read: true, update: true, delete: true},
    {screen:'Setup - Unit Master',create: true, read: true, update: true, delete: true},
    {screen:'Setup - Job Codes',create: true, read: true, update: true, delete: true},
    {screen:'Setup - Contractors',create: true, read: true, update: true, delete: true},
    {screen:'Setup - Vendors',create: true, read: true, update: true, delete: true},
    {screen:'Setup - Terms Master',create: true, read: true, update: true, delete: true},
    {screen:'Setup - Termsd Template',create: true, read: true, update: true, delete: true}
  ];

  ngOnInit() {
  }

}
