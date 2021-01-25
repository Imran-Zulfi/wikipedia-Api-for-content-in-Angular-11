import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  constructor(public http: HttpClient) { }

  newHero: string;
  items:Array<string>;
  links:Array<string>;
  desc:Array<string>;
    
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];

  
  
  searchForData(term: string){

    const Result = this.GetAlldata(term);

    console.log(Result);
   

  }

  GetAlldata(term: string)
  {

    let search = new HttpParams();
    search = search.append('action', 'opensearch');
    search = search.append('search', term);
    search = search.append('format', 'json');
    search = search.append('origin', '*');

    return this.http.get('https://en.wikipedia.org/w/api.php?', {params:search}).subscribe(response=>{
      if(response!=null && response != ''){
        this.items= response[1],
        this.desc= response[2],
          this.links= response[3]
      }
    });
      

    
    /*
    this.http.get('http://en.wikipedia.org/w/api.php'
    ).subscribe(response=>{
      if(response!=null && response != ''){
        this.heroes.push(value);
      }
    })
    */
  
   

  }

  ngOnInit(): void {

  }


}
