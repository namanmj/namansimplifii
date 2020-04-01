import { Component , OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'generic-detail-page';
  data2;
  maintitle;
 
  constructor( private http: HttpClient ){
     
     
     
    }
    ngOnInit(): void{
      this.http.get('https://private-07900c-assignment1config.apiary-mock.com/questions')
      .subscribe(data => {
       console.log(data);
      this.data2=data['config']['data_source']['api'];
      this.http.get(this.data2)
      .subscribe(data1 => {
       console.log(data1);
       this.maintitle=data1['response']['data']['title'];

      });
      });
      

     
      

    }}
  

