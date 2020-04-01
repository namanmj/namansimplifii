import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-arraysection',
  templateUrl: './arraysection.component.html',
  styleUrls: ['./arraysection.component.css']
})
export class ArraysectionComponent implements OnInit {
save3;
  data2;
  viewMode;
  constructor( private http: HttpClient ){
     
     
     
  }
  ngOnInit(): void{
     this.viewMode="Project";
    this.http.get('https://private-07900c-assignment1config.apiary-mock.com/questions')
    .subscribe((data:any) => {
    
    this.data2=data.config.data_source.api;
    this.http.get(this.data2)
    .subscribe((data1:any) => {
      var value=data1.response.data;
     for( var i=0;i<data.config.array_sections.length;i++)
      { this.save3=data.config.array_sections[i].title;
         
          createtab(this.save3);
      }  
      function createtab(save3)
      {
let d1=document.createElement('li');
console.log(save3);
d1.innerHTML=`
<li  [class.active]="viewMode=='${save3}'"><a (click)="viewMode = '${save3}'">${save3}</a></li>
`;
document.getElementById("mickey").appendChild(d1);
let d2=document.createElement('li');
d2.innerHTML=`
<div *ngSwitchCase="'${save3}'" id="${save3}"></div>
`;
document.getElementById("mouse").appendChild(d2);

      }
      for( var i=0;i<data.config.array_sections.length;i++)
    {
       this.save3=data.config.array_sections[i].title;
        var arrayname=data.config.array_sections[i].data_array;
        
        for(let a of data.config.array_sections[i].rows)
        { var save2=a.rhs;
            
           var len=(value[arrayname].length);
            for (var j=0;j<len;j++)
            {
                let d2=document.createElement('div');
                d2.className='row';
                d2.innerHTML=`<div class="col-sm-6">
                <strong> ${j+1}. <h7>${a.lhs}  </h7> :</strong> <h7>${value[arrayname][j][save2]}</h7>
              </div>`
              
              document.getElementById(`${this.save3}`).appendChild(d2);
              
            }
        }

        
    }
  });

});
  }
}
