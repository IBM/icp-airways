import { Injectable } from '@angular/core';
@Injectable()
export class Provider {
    public apiUrl: any;
    public userData: any = null;
    public token: any = null;
    public rawData: any = null;
    public url: any = "169.61.62.89";
    public gethURL: any = "http://169.61.62.89:30001"
    public abi: any;
    constructor() {
        this.abi = [
            {
                "constant": true,
                "inputs": [],
                "name": "value",
                "outputs": [
                    {
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_value",
                        "type": "string"
                    }
                ],
                "name": "set",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "get",
                "outputs": [
                    {
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            }
        ]
        this.apiUrl = {
            login: "http://" + this.url + ":30093/login",
            signup: "http://" + this.url + ":30094/createUser",
            book: "http://" + this.url + ":30090/book",
            listBookingByUser: "http://" + this.url + ":30090/listBookingByUser",
            checkin: "http://" + this.url + ":30091/checkin",
            listFlightsByID: "http://" + this.url + ":30092/listFlightsByID",
            listFlights: "http://" + this.url + ":30092/listFlights",
            getBlockchain: "http://" + this.url + ":30089/getBlockchain",
            setBlockchain: "http://" + this.url + ":30089/setBlockchain",
            setODM: "http://" + this.url + ":30095/odm",
            postEmail: "http://" + this.url + ":30989/postEmail"
        }
        console.log(this.apiUrl)
    }
}