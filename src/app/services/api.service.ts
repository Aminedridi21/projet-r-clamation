import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 private baseUrl ='http://localhost:3000';
   constructor(private http : HttpClient) {}
   get_Categories(): Observable<any>{
    return this.http.get(`${this.baseUrl}/categories`);
   }
   get_Tickets(id_etat:any){
    return this.http.post("http://localhost:3000/get-pending-tickets",{ etat: id_etat })
   }
   add_ticket(uploadData:any){
    return this.http.post('http://localhost:3000/upload-et-ajouter', uploadData, { responseType: 'text' })
   }
   search_ticket(searchForm:any){
    return this.http.post("http://localhost:3000/search-tickets",searchForm)
   }
   delete_ticket(id:any){
    return this.http.delete("http://localhost:3000/delete-ticket/"+id)
   }
   find_ticket(id:any){
    return this.http.get("http://localhost:3000/find-ticket/"+id);
   }
   update_ticket(id: any, id_etat: number){
    return this.http.put("http://localhost:3000/update-ticket/"+id,{id_etat});
   }
   user_login(LoginForm:any){
   return this.http.post<any>("http://localhost:3000/admin-users",LoginForm);
   }
   display_image(lien:any){
      console.log(lien); 
      let transformedPath = lien.replace(/\\/g, "\\\\");
      return this.http.post<any>("http://localhost:3000/display-image",{imgPath:transformedPath})
   }

}
