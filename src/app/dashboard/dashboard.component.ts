import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { ChartOptions } from 'chart.js';
import Chart from 'chart.js/auto';
import LinearScaleBase from 'chart.js/dist/scales/scale.linearbase';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  public chart: any;
  public label:any[]=[]
  public chartdata: any[]=[]
constructor(private http:HttpClient){}
 data:any=[];
ngOnInit(){
  this.gettickets();
  this.createChart(this.label,this.chartdata);
}
  gettickets(){
  this.http.get('http://localhost:3000/count-tickets').subscribe(
    (response)=>{
      console.log(response);
      this.data = response;
      for(let i = 0; i < this.data.length; i++){
        this.label.push(this.data[i].id_etat);
        this.chartdata.push(this.data[i].count);
      }
      
    }
  )
 }
 ConvertToInt(val:any){
   return parseInt(val);
 }
 createChart(labeldata: any, chartdata: any){

  this.chart = new Chart("MyChart", {
    type: 'line', //this denotes tha type of chart

    data: {// values on X-Axis
       labels: labeldata, 
         datasets: [
        {
          label: "number of tickets",
          data: chartdata,
          backgroundColor: ['blue','limegreen','red'],
          //barThickness:50,
          borderColor: 'blue',
        },
        
      ]
    },
    options: {
      aspectRatio:2,
      responsive:true,
    }

  });
}
 
 
}
