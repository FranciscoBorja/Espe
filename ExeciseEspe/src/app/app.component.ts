import { Component } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ExeciseEspe';

  paises: any = {};
  rotatorio: any = [];
  consumoWebExterno: any =[];
  url = environment.api;
  options = new RequestOptions();

  ngOnInit(): void {
 
   
    
  }

  constructor(private http:Http) {
    for (let index = 0; index < 18; index++) {
      this.paises.nombre = 'Ecuador';
      this.rotatorio.push(this.paises);
    }
  }



 
  


}


