import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contracts-permission',
  templateUrl: './contracts-permission.component.html',
  styleUrls: ['./contracts-permission.component.scss']
})
export class ContractsPermissionComponent implements OnInit {

  constructor() { }

  items = [
    {screen: 'Contracts', create: true, read: true, update: true, delete: true },
    {screen: 'Contracts dashboard - BOQ', create: true, read: true, update: true, delete: true },
    {screen: 'Contracts dashboard - WBS dashboard', create: false, read: true, update: true, delete: true },
    {screen: 'Contracts dashboard - WBS Setup', create: true, read: true, update: true, delete: true },
    {screen: 'Contracts dashboard - Scheduling', create: false, read: true, update: false, delete: false },
    {screen: 'Contracts dashboard - Requisitions', create: true, read: true, update: true, delete: true },
    {screen: 'Contracts dashboard - Issues', create: true, read: true, update: true, delete: true },
    {screen: 'Contracts dashboard - Hours', create: false, read: true, update: false, delete: false },
    {screen: 'Contracts dashboard - Expenses', create: false, read: true, update: false, delete: false },
    {screen: 'Contracts dashboard - Billing - Claims', create: true, read: true, update: true, delete: true },
    {screen: 'Contracts dashboard - Billing - Invoices', create: false, read: true, update: false, delete: false },
    {screen: 'Contracts dashboard - Billing - Allocations', create: false, read: true, update: true, delete: true },
    {screen: 'Contracts dashboard - Closure - Defect Liability', create: true, read: true, update: true, delete: true },
    {screen: 'Contracts dashboard - Closure - Final Bill', create: false, read: true, update: true, delete: false },
    {screen: 'Contracts dashboard - Closure - Guarantees', create: true, read: true, update: true, delete: true },
    {screen: 'Contracts dashboard - Closure - Inventory Shifting', create: true, read: true, update: true, delete: true },
    {screen: 'Contracts dashboard - Closure - Reports', create: true, read: true, update: true, delete: true },
    {screen: 'Contracts dashboard - Closure - Returns', create: true, read: true, update: true, delete: true },
    {screen: 'Contracts dashboard - Summary Report - Progress', create: false, read: true, update: false, delete: false },
    {screen: 'Contracts dashboard - Summary Report - Financial', create: false, read: true, update: false, delete: false }
  ];

  ngOnInit() {
  }

}
