import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import  'rxjs/add/operator/map';

@Injectable()
    export class GithubService{
        private username:string;
        private client_id='020afaf0cc223da26875';
        private client_secret='935b25f904900da7a8f7013f188fd7271283a982';

        constructor(private _http:Http){
            console.log('Github Service Ready...');
            this.username='webken1'
        }
        getUser(){
            return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
        }
    }
