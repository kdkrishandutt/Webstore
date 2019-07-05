import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WhatsappAPIService {
  // baseUrl: string = 'http://192.168.10.71:8099/api/';
  baseUrl: string = 'http://localhost:49653/api/';
  constructor(private _Http: HttpClient) { }
  CallmsgAPI(queryString: string, phoneNo: string, msgp: string) {
    queryString = queryString + '?Tocken=7b2b36aa6a2e5b10c75b398a2afabe515d00d9aca2893' +
      '&Uid=919873739929' +
      '&Imp_Id=22' +
      '&User_id=User' +
      '&PhoneNo=' + phoneNo +
      '&msg=' + msgp
    let _URL = this.baseUrl + queryString;
    return this._Http.post(_URL, '');
  }

  CallmediaAPI(queryString: string, phoneNo: string, msgp: string) {
    let url_thumb = "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg";
    queryString = queryString + '?Tocken=7b2b36aa6a2e5b10c75b398a2afabe515d00d9aca2893' +
      '&Uid=919873739929' +
      '&Imp_Id=22' +
      '&User_id=User' +
      '&PhoneNo=' + phoneNo +
      '&Media_url=' + msgp +
      '&caption= testcaption' +
      '&description=testdescr' +
      '&url_thumb=' + url_thumb
    let _URL = this.baseUrl + queryString;
    return this._Http.post(_URL, '');
  }

  CallImageAPI(queryString: string, phoneNo: string, msgp: string) {
    queryString = queryString + '?Tocken=7b2b36aa6a2e5b10c75b398a2afabe515d00d9aca2893' +
      '&Uid=919873739929' +
      '&Imp_Id=22' +
      '&User_id=User' +
      '&PhoneNo=' + phoneNo +
      '&Image_url=' + msgp +
      '&caption=testcaption' +
      '&description=testdescr' +
      '&url_thumb=https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg'
    let _URL = this.baseUrl + queryString;
    return this._Http.post(_URL, '');
  }
  CallLinkAPI(queryString: string, phoneNo: string, msgp: string) {
    queryString = queryString + '?Tocken=7b2b36aa6a2e5b10c75b398a2afabe515d00d9aca2893' +
      '&Uid=919873739929' +
      '&Imp_Id=22' +
      '&User_id=User' +
      '&PhoneNo=' + phoneNo +
      '&Link_url=' + msgp +
      '&caption=testcaption' +
      '&description=testdescr' +
      '&url_thumb=https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg'
    let _URL = this.baseUrl + queryString;
    return this._Http.post(_URL, '');
  }
  CallHookAPI(queryString: string, res: string) {
    let values = {};
    let _URL = this.baseUrl + queryString + '?Response=' + res;
    return this._Http.post(_URL, values);
  }
}
