import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MyFruit } from '../Models/my-fruit';

@Injectable({
  providedIn: 'root'
})
export class FruitsService {
      constructor(private httpClient: HttpClient) { }
      getAllFruits(path: string): Observable<object> {
        return this.httpClient.get(path);   }

      getOneProduct(path: string): Observable<object> {

       return  this.httpClient.get(path);

      }
      editFruit(path: string, data: MyFruit): Observable<object> {
                return this.httpClient.put(path, data);
      }
      deleteFruit(path: string): Observable<object> {
                return this.httpClient.delete(path);
    }

    addFruit(path: string, data: MyFruit): Observable<object>  {
      return this.httpClient.post(path, data);
    }

}
