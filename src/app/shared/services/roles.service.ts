import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor() { }
 
  getRoleDetails(){
    return [
      {roleName: 'Unit Head', users :"3", screenPermissions : "251/251" },
      {roleName: 'Field Officer', users :"3", screenPermissions : "251/251" },
      {roleName: 'Worker', users :"3", screenPermissions : "251/251" },
      {roleName: 'No Role', users :"3", screenPermissions : "251/251" },
     
    ]
  }
}
