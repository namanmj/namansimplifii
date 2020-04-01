import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-rightsection',
  templateUrl: './rightsection.component.html',
  styleUrls: ['./rightsection.component.css']
})
export class RightsectionComponent implements OnInit {

  data2;
 
 rightsectiontitle;
  constructor( private http: HttpClient ){
     
     
     
  }
  ngOnInit(): void{
    this.http.get('https://private-07900c-assignment1config.apiary-mock.com/questions')
    .subscribe((data:any) => {
    
    this.data2=data.config.data_source.api;
    this.http.get(this.data2)
    .subscribe((data1:any) => {
      this.rightsectiontitle= data1.response.data.section_right_title;
      var value=data1.response.data;
      var c=0;
      for(let a of data.config.main_section_right.rows)
    {var save=a.rhs;
      var savelhs=a.lhs;
        let d1=document.createElement('div');
        d1.className='row';
        d1.innerHTML=`<div class="col-sm-6">${a.lhs}</div>
        <div id="${savelhs}" class="col-sm-6">${add(value,save)}</div>`;
        
        document.querySelector('.container-right').appendChild(d1);
       
        }
        function add(value,save)
    {var arr1=save.split('.');
   
    for( var i=0;i<arr1.length;i++)
    {
        value=(value[arr1[i]]);
    }
    
   
    return value;
       
       
    }
});
    
  });
}
}
