import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InstagramService {

    constructor(
        private http: Http
    ) { }

    private base_url = 'https://api.chrisburchhardt.com/api/';

    getInstaName() {
        return this.http.get(this.base_url + 'me').map(x => x.json());
    }

    getTopPost() {
        return this.http.get(this.base_url + 'metrics/summary/top_post').map(x => x.json());    
    }

    getTopHashTags() {
        return this.http.get(this.base_url + 'metrics/summary/hashtags').map(x => x.json());
    }

    getFollowersTimeline() {
        return this.http.get(this.base_url + 'metrics/summary/followers_timeline').map(x => x.json());
    }
}
