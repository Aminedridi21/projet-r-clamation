import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Config } from 'datatables.net';
import {Subject} from 'rxjs';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tickets-annulees',
  templateUrl: './tickets-annulees.component.html',
  styleUrl: './tickets-annulees.component.css'
})
export class TicketsAnnuleesComponent {
  dtOptions:Config={};
  dtTrigger:Subject<any>=new Subject<any>();
  categories:any;
  tickets:any;
  recherche:boolean=false;
  searchForm=new FormGroup({
    id_categorie: new FormControl(),
    f_date:new FormControl(),
    l_date:new FormControl,
    id_etat:new FormControl(1)
  })
  constructor(private http:HttpClient,private apiService: ApiService,private router:Router){}
  
  ngOnInit(){
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      autoWidth: false,
    };
     this.apiService.get_Categories().subscribe(
      (response)=>{
        this.categories=response;
      }
     )
  
    this.apiService.get_Tickets(2).subscribe(
      (response)=>{
        this.tickets=response;
        this.dtTrigger.next(null)
      }
    )
    
}
Search(){
  this.recherche=true;
  console.log(this.searchForm.value);
  this.apiService.search_ticket(this.searchForm.value).subscribe(
    (response)=>{
      this.tickets=response;
      console.log(this.tickets);
      this.searchForm.reset({ 
        f_date: null,     
        l_date: null,
        id_etat: 1
      })
    }
  )
}
Modify_Ticket(value:any){
this.router.navigate(['/espace-ticket'],{ queryParams: { id:value } });
}

}
