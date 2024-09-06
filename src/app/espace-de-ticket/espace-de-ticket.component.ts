import { Component, Input } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-espace-de-ticket',
  templateUrl: './espace-de-ticket.component.html',
  styleUrl: './espace-de-ticket.component.css'
})
export class EspaceDeTicketComponent {
  imagepaths:any=[]
  image_URL:any
  directoryPath: string = 'C:\\Users\\Public\\upload\\ticket 3';
  tickets:any;
  receivedData: any;
  constructor(private apiService:ApiService,private router:Router,private route: ActivatedRoute){}
  ngOnInit(){
    this.route.queryParams.subscribe(params => {
      this.receivedData = params;
      parseInt(this.receivedData)
      console.log(this.receivedData)
    });
  
    this.apiService.find_ticket(this.receivedData.id).subscribe(
      (response)=>{
        this.tickets=response;
        console.log(`les données de cet ticket sont : ${this.tickets[0].lien_image}`);
        this.image_URL=this.tickets[0].lien_image;
        console.log(typeof(this.image_URL))
        
        this.apiService.display_image(this.image_URL).subscribe(
          (path)=>{
            this.imagepaths=path;
            this.imagepaths = path.map((img: string) => `http://localhost:3000${img}`);
            console.log(this.imagepaths)
          }
        )
      }
    )
    
  }
  
  
    Update_Ticket(id:any,id_etat:any){
      this.apiService.update_ticket(id,id_etat).subscribe(
       (response)=>{
        console.log(response);
       } 
      )
      if(id_etat===1){
        this.router.navigate(['/tickets-en-attente'])
      }
      else if(id_etat===2){
        this.router.navigate(['/tickets-annules'])
      }
      else if(id_etat===3){
        this.router.navigate(['/tickets-traites']) 
      }
      
      }
      
}
