import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContractEmployeesService {

  constructor() { }

  getContractEmployeeDetails(){
    return   [
      {EmpId:'L128', UserName: 'Purushothaman ',aadhar:'4528819771', email: '	jp@efcoindia.com', phoneNumber: '9705902716',role:'Unit Head', status: 'Active' },
      {EmpId:'L127', UserName: 'Rama Krishna',aadhar:'7542881881', email: 'ramakrishna@efcoindia.com', phoneNumber: '8328150240',role:'Unit Head', status: 'Active' },
      {EmpId:'L126', UserName: 'Sneha Gadam',aadhar:'8765225126', email: 'snehagadam27@gmail.com', phoneNumber: '7702588746',role:'Field Executive', status: 'Inactive'},
      {EmpId:'L125', UserName: 'Divya Chamarthi',aadhar:'8277226721', email: 'qc@efcoindia.com', phoneNumber: '9492326597',role:'Field Executive', status: 'Active'},
      {EmpId:'L124', UserName: 'rajendraprasad nalla',aadhar:'5129001001', email: 'rajendraprasadn94@gmail.com', phoneNumber: '8247734225',role:'Field Executive', status: 'Active'},
      {EmpId:'L123', UserName: 'RajKumar Rampally',aadhar:'4101420201', email: 'raj@efcoindia.com', phoneNumber: '9491240470',role:'Field Executive', status: 'Active'},
      
   
     
    ];
  }
}
