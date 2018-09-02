import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  Mykey: string = "123";
  constructor() { }

  writeText(storageKey: string, storageValue: string) {

    let EncryptedText = CryptoJS.AES.encrypt(storageValue, this.Mykey);
    localStorage.setItem(storageKey, EncryptedText);
    return EncryptedText;
  }

  readText(storageKey: string) {

    let EncryptedText = localStorage.getItem(storageKey);//ex:"U2FsdGVkX1+snGEhaVKcVOXLe322u1UokmSEDpZ9XhU="

    if (EncryptedText) {
      let bytes = CryptoJS.AES.decrypt(EncryptedText.toString(), this.Mykey);
      /*
       WordArray.init(sigBytes:13
                      words:Array(4)[
                                0:1634494784
                                1:1735221609
                                2:1814979439
                                3:1828913923]
)
                  
      */
      let textValue = bytes.toString(CryptoJS.enc.Utf8);

      return textValue;

    }
  }


  writeObject(storageKey: string, storageValue: object) {

    let EncryptedText = CryptoJS.AES.encrypt(JSON.stringify(storageValue), this.Mykey);
    localStorage.setItem(storageKey, EncryptedText);

    return EncryptedText;


  }

  readObject(storageKey: string) {

    let EncryptedText = localStorage.getItem(storageKey);

    if (EncryptedText) {
      let bytes = CryptoJS.AES.decrypt(EncryptedText.toString(), this.Mykey);
      let objectValue = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

      return objectValue;
    }
  }
}
/*

Object encryption
var CryptoJS = require("crypto-js");

var data = [{id: 1}, {id: 2}]

// Encrypt
var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), 'secret key 123');

// Decrypt
var bytes  = CryptoJS.AES.decrypt(ciphertext.toString(), 'secret key 123');
var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

console.log(decryptedData);
*/