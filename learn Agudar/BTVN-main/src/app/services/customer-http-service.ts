import { HttpClient } from '@angular/common/http';
import { ICustomer } from '../classes/ICustomer';
import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, shareReplay, startWith, tap } from 'rxjs/operators';

@Injectable()
export class CustomerHttpService {
    private _url = '/assets/data/customers.json';
    private _customers: ICustomer[] | null = null;
    private _customersRequest$: Observable<ICustomer[]> | null = null;
    // Sample ages and fictional emails for the anime character exercise.
    private readonly _initialCustomers: ICustomer[] = [
    {
        "CustomerTypeId": 1,
        "CustomterTypeName": "VIP",
        "Customers": [
            {
                "Id": "Cus123",
                "Name": "Nezuko Kamado",
                "Email": "nezuko.kamado@example.com",
                "Age": 14,
                "Image": "assets/avatars/a226759ca595fff34624127de2349734.png"
            },
            {
                "Id": "Cus456",
                "Name": "Rem",
                "Email": "rem@example.com",
                "Age": 17,
                "Image": "assets/avatars/bang-xep-hang-top-20-nhan-vat-nu-anime-xinh-dep-nhat-1_UJXS.webp"
            },
            {
                "Id": "Cus789",
                "Name": "Emilia",
                "Email": "emilia@example.com",
                "Age": 18,
                "Image": "assets/avatars/bang-xep-hang-top-20-nhan-vat-nu-anime-xinh-dep-nhat-9_LKEN.webp"
            }
        ]
    },
    {
        "CustomerTypeId": 2,
        "CustomterTypeName": "Normal",
        "Customers": [
            {
                "Id": "Cus000",
                "Name": "Shinobu Kocho",
                "Email": "shinobu.kocho@example.com",
                "Age": 18,
                "Image": "assets/avatars/OIP (1).jpg"
            },
            {
                "Id": "Cus111",
                "Name": "Violet Evergarden",
                "Email": "violet.evergarden@example.com",
                "Age": 14,
                "Image": "assets/avatars/OIP.jpg"
            }
        ]
    }
];

    constructor(private _http: HttpClient) { }

    getCustomers(): Observable<ICustomer[]> {
        if (this._customers) {
            return of(this._customers);
        }

        if (!this._customersRequest$) {
            this._customersRequest$ = this._http.get<ICustomer[]>(this._url).pipe(
                tap((customers) => this._customers = customers),
                catchError((error) => {
                    console.error('Unable to load customers', error);
                    this._customersRequest$ = null;
                    return of(this._initialCustomers);
                }),
                startWith(this._initialCustomers),
                shareReplay({ bufferSize: 1, refCount: false }),
            );
        }

        return this._customersRequest$;
    }
}
