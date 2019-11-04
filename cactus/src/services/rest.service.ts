import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Logindetails } from '../models/logindetails'
@Injectable({
    providedIn: 'root'
})
export class RestService {
    /** Convenient way to modify request made by the http service both before they are sent and after they return */
    private http: HttpClient;
    private _nodeurl = 'https://192.168.120.89:5001/authenticateuser';
    private jsonurl = '../assets/dummydata.json';
    // Creates an instance of RestService
    constructor(http: HttpClient) {
        this.http = http;
    }

    /**
     * Get a resource from the server which identified by a URI.
     * @param apiName The name of the resource to be retrieved.
     * @param endpointUrl The end point url to invoke the api.
     */
    public getResource(apiName: string, endpointUrl: string): Observable<{}> {
        return this.http.get(endpointUrl + apiName);
    }
    public getJSON(): Observable<any> {
        return this.http.get(this.jsonurl);
        console.log(this.http.get(this.jsonurl));
    }

    /**
     * Create a new resource on the server.
     * @param apiName The name of the resource to be created.
     * @param payload The request data to be sent to server.
     * @param endpointUrl The end point url to invoke the api.
     */
    public postResource(details:Logindetails):Observable <any>{
    return this.http.post<any>(this._nodeurl, details)
    }
    // public postResource({ apiName, payload, endpointUrl }: {
    //     apiName: 'enroll'; payload: {
    //         details: Logindetails;
    //     }; endpointUrl: 'http://localhost:3000/';
    // }): Observable<any> {
    //     return this.http.post(endpointUrl + apiName, payload);
    // }

    // public postResource(apiName: 'enroll', payload: {details:Logindetails}, endpointUrl: 'http://localhost:3000/'): Observable<{}> {
    //     return this.http.post(endpointUrl + apiName, payload);
    /**
     * Modify the resource on the server.
     * @param apiName The name of the resource to be created.
     * @param payload The request data to be sent to server.
     */
    public patchResource(apiName: string, payload: {}, endpointUrl: string): Observable<{}> {
        return this.http.patch(endpointUrl + apiName, payload);
    }

    /**
     * Replace the resource on the server.
     * Uses network binding to send http request if use virtual SatBridge is off, sends normal http request otherwise.
     * @param apiName The name of the resource to be created.
     * @param payload The request data to be sent to server.
     */
    public putResource(apiName: string, payload: {}, endpointUrl: string): Observable<{}> {
        return this.http.put(endpointUrl + apiName, payload);
    }
}
