import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RestService {
    /** Convenient way to modify request made by the http service both before they are sent and after they return */
    private http: HttpClient;

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

    /**
     * Create a new resource on the server.
     * @param apiName The name of the resource to be created.
     * @param payload The request data to be sent to server.
     * @param endpointUrl The end point url to invoke the api.
     */
    public postResource(apiName: string, payload: {}, endpointUrl: string): Observable<{}> {
        return this.http.post(endpointUrl + apiName, payload);
    }

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
