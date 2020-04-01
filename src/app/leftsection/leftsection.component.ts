import { Component ,Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-leftsection',
  templateUrl: './leftsection.component.html',
  styleUrls: ['./leftsection.component.css']
})
export class LeftsectionComponent implements OnInit   {
 data2;
 
 leftsectiontitle;
  constructor( private http: HttpClient ){
     
     
     
  }
  ngOnInit(): void{
    this.http.get('https://private-07900c-assignment1config.apiary-mock.com/questions')
    .subscribe((data:any) => {
     console.log(data);
    this.data2=data.config.data_source.api;
    this.http.get(this.data2)
    .subscribe((data1:any) => {
     console.log(data1);
     var value=data1.response.data;
     var c=0;

this.leftsectiontitle=data1.response.data.section_left_title;
for(let a of data.config.main_section_left.rows)
    {
      
      var save=a.rhs;
      
      var savelhs=a.lhs;
  
    let d=document.createElement('div');
    d.className='row';
    d.innerHTML=`
    <div class="col-sm-6">${a.lhs}</div>
    <div id="${savelhs}" class="col-sm-6">${add(value,save)}</div>
    `;
    document.querySelector('.container-left').appendChild(d);
    if(a.hasOwnProperty('edit'))
        {
          var x=document.getElementById(`${savelhs}`);
        x.contentEditable="true";
       
        }
        
        if(a.edit.hasOwnProperty('data_submit'))
        {
          let button1=document.createElement('BUTTON');
          let button=document.createElement('BUTTON');
          c=c+1;
          button.id=`${c}`;
          
        button.innerHTML = "SUBMIT";
        button1.innerHTML = "EDIT";
        
        document.querySelector('.container-left').appendChild(button);
        document.querySelector('.container-left').appendChild(button1);
        show(c,savelhs);
        }
    }
    function add(value,save)
    {var arr1=save.split('.');
   
    for( var i=0;i<arr1.length;i++)
    {
        value=(value[arr1[i]]);
    }
    console.log('HELLO');
   
    return value;
       
       
    }
    function show(c,savelhs)
    {
      var p=document.getElementById(c);
      
      
      
      p.addEventListener("click", async function(){
        let d1 =document.getElementById(`${savelhs}`).innerHTML;
        var d2=parseInt(d1);
        var m1={[savelhs] : d1};
        var lenn=d1.length;
        console.log(lenn);
        var b=data.config.main_section_left.rows[c-1].edit;
        if(b.hasOwnProperty('constraints'))
        {var min=data.config.main_section_left.rows[0].edit.constraints.min_length;
          var max=data.config.main_section_left.rows[0].edit.constraints.max_length;
          var min1=parseInt(data.config.main_section_left.rows[1].edit.constraints.min);
          var max1=parseInt(data.config.main_section_left.rows[1].edit.constraints.max);
          if(c==1)
          {
          if(lenn>=min&&lenn<=max)
        {
        const r = await fetch(data.config.main_section_left.rows[c-1].edit.data_submit.api, {
          method: data.config.main_section_left.rows[c-1].edit.data_submit.method,
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(m1)
        });
        console.log(r);
        }
        else{
          alert(`length should be greater than ${min} and less than ${max}`);
          
        }
      }
        if(c==2)
        {
    if(d2>=min1&&d2<=max1)
    {
      const r = await fetch(data.config.main_section_left.rows[c-1].edit.data_submit.api, {
        method: data.config.main_section_left.rows[c-1].edit.data_submit.method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(m1)
      });
      console.log(r);
    }
    else{
      alert(`input should be greater than ${min1} and less than ${max1}`);
    }
        
        }
      }
        else{
          const r = await fetch(data.config.main_section_left.rows[c-1].edit.data_submit.api, {
            method: data.config.main_section_left.rows[c-1].edit.data_submit.method,
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(m1)
          });
          console.log(r);
        }
        
    
    
      });
    }
    });
    });
    

   
  

}
}