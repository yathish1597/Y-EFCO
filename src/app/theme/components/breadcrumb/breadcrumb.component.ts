import { Component } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, UrlSegment, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';

@Component({
    selector: 'app-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {

    public pageTitle: string;
    public moduleTitle: string;
    public subTitle: string = 'test';
    public description: {};
    public breadcrumbs: {
        name: string;
        url: string
    }[] = [];

    public settings: Settings;
    constructor(public appSettings: AppSettings,
        public router: Router,
        public activatedRoute: ActivatedRoute,
        public title: Title) {
        this.settings = this.appSettings.settings;
        this.description = {
            "Manage Job Cards":"This screen is used to add and manage job cards.",
            "Spares":"This screen is used to View All the Spares",
            "Assets": "This screen is used to view and manage the Assets",
            "Users": "This screen is intended to control the list of allocated users based on the type of role",
            "Lookup": "Choices in drop down boxes all over the application are managed here with some restrictions.",
            "Settings": "This is a list of application wide parameters that can be updated in this section.",
            "Checklist": "This page is used to create a checklist for qualification of prospect",
            "Master Data": "This screen covers Comprehensive list of Data across the application. New data can be added, deleted or modified according to fuctionality. ",
            "Manage Kanban for Projects": 'This screen is intended to incorporate and control the Kanban measures that are retained in the kanban-view',
            "Manage Vendors": 'Vendors who are associated with OM are added and managed here with respect to item type they cater to. These list of vendors are available in RFQ’s for ease of access.',
            "Lookup Options":"This screen is used to view and manage the Lookup Options",
            "Dashboard": "This section provides a overview of jobs and claims. Summary of various upcoming and overdue orders can be viewed from this section along with the graphical representation showing distribution trends.",
            "Clients": "This screen allows to add and manage client information. Additionally, project information associated to each client can be reviewed from here.",
            "Logistics": "To view all the details of a shipment and to track them accordingly is provided here in this screen",
            "Job Orders": "This Screen is used to add and manage the Job Orders in the Organization",
            "Job Order-Dashboard": "This Screen is used to view and manage the Job Orders in the Organization",
            "Plan Of Work":"Details of POW can be updated here.",
            "Job Cards":"This screen is used to add and manage job cards.",
            "Isolation Valve - Preview" : "This screen is used to view and download Isolation Valve Preview ",
            "Safety Valve - Preview" : "This screen is used to view and download Safety Valve Preview ",
            "Grid View": "The list of clients information associated to the projects is listed here. Ability to add and manage client information can be done here",
            "Map View": "The location of all the clients based on the city is listed in this screen",
            "Activity": "This is Activity Screen",
            "Project Dashboard": "Activities that are carried on selected project can be viewed and managed",
            "Project-Updates":"This Screen is used to View All the Updates of the Project.",
            "Task Log":"This Screen is used to View All the Task Logs.",
            "Team":"This Screen is used to View Team Status.",
            "Service Reports":"This Screen is used to View Service Reports.",
            "Documents":"This Screen is used to View the Documents.",
            "Message Center": "All messages can be viewed here",
            "Tracking": "This screen is used to track shipments",
            "Event-Log" : "Key events of the application are logged here along with user names and timestamps",
            "Error-Log" : "Unexpected technical errors that occur in the application can be viewed here",
            "Manage Claims" : "This section is used to approve or reject claims. New claims can also be created from here with the ability to browse and manage claims using filter",
            "Permissions": "All the screen level and special permissions for users can be managed from this screen",
            "Purchase": "This screen is used to view and manage the Purchases",
            "Requisitions": "Requisition is an item requirements list that can be initiated and approved on this screen by authorized personal only. User selects type, category, item and other details and needs an approval before it is submitted for approval.",
            "Enquiries": "Approved requisitions are validated and fine tuned here. Items from a requisitions can also be availabel at a different project site and for this is a request to check it. If the product is availabel then there is no need to procure from a vendor, it can be transferred internally.",
            "RFQ": "All Quotation requests are displayed here. User can view all requisition types then list of requisitions, category and list of vendors who are available in the system, and approve the Quotation Requests.",
            "Quotation-Review": "Approved requisitions are validated and fine tuned here. Items from a requisitions can also be available at a different project site and for this is a request to check it. If the product is available then there is no need to procure from a vendor, it can be transferred internally.",
            "Indents": "Approved requisitions are validated and fine tuned here. Items from a requisitions can also be available at a different project site and for this is a request to check it. If the product is available then there is no need to procure from a vendor, it can be transferred internally.",
            "Purchase-Orders": "PO’s are generated automatically when the indents are approved. PO’s are for procurement of items mentioned in the requisitions. There can be multiple PO’s for a single approved indent.",
            "Work-Orders": "WO’s are generated automatically when the indents are approved. WO’s are for procurement of items mentioned in the requisitions. There is single WO for a single approved indent.",
            "Consignments": "User can work (create / modify / view) on Consignment for a PO that is delivered from corresponding Vendor. User can request Vendor or update the Waybill details for an Invoice. User can provide Transportation details for a Consignment.",
            "Service-Challans": "Aggregates moving out of the project site to the vendor location for service or repair are logged here and if WO or PO reference are present they are also managed here.",
            "Status": "All the requisitions from start to end till the purchase orders are marked here with the clearance gained at each level. This screen shows the stage at which each requisition is so that it can be tracked easily.",
            "Reports": "The list of entries here show the inventory at any point of time by selecting the filter criteria. This report shows the available stock along with consumption.",
            "Resources": "This is resources screen",
            "Inventory": "This screen is used to view and manage inventory",
            "CRM": "This is CRM screen",
            "GRN": "All the goods that are received at the gate are recorded in the system using this screen. User needs to select the indent and then the consignment and add the GRN for that particular consignment.",
            "Gate Passes": "All material movement happening on the gate either incoming or outgoing are all recorded here.",
            "Stock Transfers": "This can be used to manage and view the Stock Transfers",
            "Material Issues": "Spare Parts & Materials are issued within the site for Maintenance and for this, Job Card to be filled by Mechanic. This form will have issued item details and who is receiving it and the person issuing it from the stores.",
            "Opening Stock": "User can import a csv sheet which can have all the spare parts present at the project during commissioning of the site. This page provides the facility to record the inventory just by uploading the document.",
            "Stock Update": "This is a temporary screen to capture receivables and issues and check the updated stock for your project. User can update the entries as required manually or by CSV upload.",
            "Pre-Sales": "This is presales screen",
            "Post-Sales": "This is post-sales screen",
            "Store In Charge":"This screen shows Store in charge details",
            "tech-engineer": "This screen shows tech Engineer details",
            "Records": {
                "Material Rates": "This screen is used to view and manage material list",
                "Records": "This screen is used to manage Records"
            }, 
            "Tenders": "This screen is used to view and manage tenders",
            "Contracts": "This screen allows to add and manage client specific contracts.",
            "Variations": "This is Variations screen.",
            "Rentention": "This is Rentention screen.",
            "Contract Dashboard": "This screen is used to add and manage client specific contracts",
            "Contractors": "This screen covers the list of contracts associated with Organisation. Contractors can be managed by Adding, update and delete. ",
            "Finance": "This is Finance Screen",
            "Vehicles": "This is Vehicles Screen",
            "Reconciliations": "This is Renconciliations Screen",
            "Fixed Assets": "This is Fixed Assets Screen",
            "Rentals": "This is Rentals Screen",
            "Order Requests": "This Screen is used to request for an item pertaining to respective sites",
            "Property": "This is Property Screen",
            "Budget": "This is Budget Screen",
            "Manage": "This is Manage Screen",
            "Hours": "This is Hours Screen",
            "Quotes": "This screen is used to manage budget, BOQ, update.",
            "Expenses": "This is Expenses Screen",
            "Invoices": "This is Invoices Screen",
            "Summary": "This is Summary Screen",
            "BOQ": "This is BOQ Screen",
            "Overview": "This is Overview Screen",
            "Manage User": "This screen covers comprehensive list of users managed across the application. User profiles can be created, deleted or modified. Each user profile can be assigned to one or more projects and their respective project role(s) can be designated here.",
            "Manage Personnel": "This screen covers comprehensive list of employees managed within the company. User profiles can be created, deleted or modified. Each user profile can be assigned to one or more projects and their respective project role(s) can be designated here.",
            "Scheduling Grid View": "This screen is used to manage and view schedule",
            "Scheduled": "This is Scheduled", 
            "Unscheduled": "This screen is used to manage and view schedule",
            "Scheduling Board View": "This is Scheduling Board View",
            "Manage Categories": "List of equipment types that are added in Store Inventory can be viewed here. Also vendors who cater to each of these types can be reviewed here.",
            "Purchase Setup": "Admin can add stores with a specific name and incharge to different projects in the system.",
            "Quotations": "Approved requisitions are validated and fine tuned here. Items from a requisitions can also be availabel at a different project site and for this is a request to check it. If the product is availabel then there is no need to procure from a vendor, it can be transferred internally.",
            "Purchase Orders": "POs are generated automatically when the indents are approved. PO’s are for procurement of items mentioned in the requisitions. There can be multiple PO’s for a single approved indent.",
            "Work Orders": "WOs are generated automatically when the indents are approved. WO’s are for procurement of items mentioned in the requisitions. There is single WO for a single approved indent.",
            "Service Challans": "Aggregates moving out of the project site to the vendor location for service or repair are logged here and if WO or PO reference are present they are also managed here.",
            "inventory analysis":"This can be used to analize the inventory",
            "Store Incharge" :"This screen is used to manage Store Incharge",
            "Tech Engineer" :"This screen is used to manage Tech Engineer",
            "consignment Details":"This screen is used to manage consignment Details",
            "Categories": "List of equipment types that are added in Store Inventory can be viewed here. Also vendors who cater to each of these types can be reviewed here.",
            "Item Master" :"This screen covers Comprehensive list of Items Data across the Module. New data can be added, deleted or modified according to fuctionality.",
            "Store Master" :"Admin can add stores with a specific name and incharge to different projects in the system.",
            "Unit Master" :"Admin can add all the units that are used across projects for all item types here and this list will be available throughout the Module.",
            "Job Codes" :"Admin can add and update Jobcodes, titles, categories and their standard Chargeout rate based on the project requirements.",
            "Floor Location" :"This page helps to create different location on different floors in a particular store of the site.",
            "Rack/Bin" :"User can define different racks in the store along with assigning bin locations along with it on this screen.",
            "Vendors": 'Vendors who are associated with OM are added and managed here with respect to item type they cater to. These list of vendors are available in RFQ’s for ease of access.',
            "Terms Master" : "This screen can used to Add, edit and delete terms and conditions based on purchase orders and work orders.",
            "Terms Template" : "This screen can be used to Add, select and delete terms and arrange them in order for a template.",
             "Payables":"This screen is used to view and manage the Payables",
             "Receivables":"This screen is used to view and manage the Receivables ",
             "Gantt Chart": "User can view, edit the entire project and its milestone and task on a single page."














        };
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.breadcrumbs = [];
                this.parseRoute(this.router.routerState.snapshot.root);
                this.pageTitle = '';
                this.breadcrumbs.forEach(breadcrumb => {
                    this.pageTitle += ' | ' + breadcrumb.name;
                })
                this.pageTitle ? null : this.pageTitle = ' | Dashboard';
                var temp = this.pageTitle.split(' | ');
                if (temp.length > 5) {
                    this.subTitle = temp.pop();
                    this.moduleTitle = temp[temp.length - 1];
                } else if (temp.length > 4) {
                    this.subTitle = temp.pop();
                    this.moduleTitle = temp[temp.length - 1];
                } else if (temp.length > 3) {
                    this.subTitle = temp.pop();
                    this.moduleTitle = temp[temp.length - 1];
                } else {
                    this.moduleTitle = temp.pop();
                }
                if (this.subTitle === 'Permissions') {
                    this.moduleTitle = 'Permissions';
                    this.subTitle = 'test';
                }
                this.title.setTitle(this.settings.name + this.pageTitle);
            }
        })
    }

    private parseRoute(node: ActivatedRouteSnapshot) {
        if (node.data['breadcrumb']) {
            if (node.url.length) {
                let urlSegments: UrlSegment[] = [];
                node.pathFromRoot.forEach(routerState => {
                    urlSegments = urlSegments.concat(routerState.url);
                });
                let url = urlSegments.map(urlSegment => {
                    return urlSegment.path;
                }).join('/');
                this.breadcrumbs.push({
                    name: node.data['breadcrumb'],
                    url: '/' + url
                })
            }
        }
        if (node.firstChild) {
            this.parseRoute(node.firstChild);
        }
    }

    public closeSubMenus() {
        let menu = document.querySelector('.sidenav-menu-outer');
        if (menu) {
            for (let i = 0; i < menu.children[0].children.length; i++) {
                let child = menu.children[0].children[i];
                if (child) {
                    if (child.children[0].classList.contains('expanded')) {
                        child.children[0].classList.remove('expanded');
                        child.children[1].classList.remove('show');
                    }
                }
            }
        }
    }
}


