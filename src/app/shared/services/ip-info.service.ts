import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root',
})
export class IpInfoService {

    constructor(private http: HttpClient) { }

    // Uses http.get() to load data from a single API endpoint
    getIpInfo():any {
        return this.http.get('https://ipinfo.io/json');
    }
}