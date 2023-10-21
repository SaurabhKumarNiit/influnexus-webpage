import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EditingDataService {
  constructor(private http: HttpClient) {}

  data: any;

  baseurl = 'https://api.themoviedb.org/3';
  apikey = '08cc33bd5ae3a747598ce2ad84376e66';

  getVedioRequestDatav(): Observable<any> {
    return this.http.get(
      `${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=35`
    );
  }

  getVedioRequestData(): Observable<any> {
    return this.http.get<any>('http://localhost:1001/videoRequestData');
  }

  getThumbnailData(): Observable<any> {
    return this.http.get<any>('http://localhost:1001/imgData');
  }

  registerCustomer(data: any) {
    console.log(data);
    return this.http.post<any>('http://localhost:1001/userRegister', data);
  }

  registerAdmin(data: any) {
    console.log(data);
    return this.http.post<any>('http://localhost:1001/addAdmin', data);
  }

  loginCustomer(data: any): Observable<any> {
    return this.http.post<any>('http://localhost:1001/userLogin', data);
  }

  loginAdmin(data: any): Observable<any> {
    return this.http.post<any>('http://localhost:1001/login', data);
  }

  // addThumbnail(t:any) {
  //   console.log(data);
  //   return this.http.post<any>("http://localhost:1001/videoUpload",data);
  // }

  // uploadVideo(thumbnails: any, videos: any, name: any) {
  //   const formData = new FormData();
  //   formData.append('thumbnails', thumbnails);
  //   formData.append('videos', videos);
  //   formData.append('name', name);

  //   return this.http.post('http://localhost:1001/videoUpload', formData);
  // }

  uploadVideo(data: any) {
    return this.http.post('http://localhost:1001/videoUpload', data);
  }

  videoRequest(data: any) {
    console.log(data);
    return this.http.post('http://localhost:1001/videoRequest', data);
  }

  saveGoogleInfo(data: any) {
    console.log(data);
    return this.http.post('http://localhost:1001/googleLogin', data);
  }

  getEmail() {
    return localStorage.getItem('email');
  }

  getSingleUser(): Observable<any> {
    this.data = this.getEmail();
    return this.http.get<any>(`${'http://localhost:1001/user'}/${this.data}`);
  }

  saveFeedbacks(formData:any) {

    // const formData = new FormData();
    // email=this.getEmail;
    // formData.append('email',email);
    // formData.append('rating', rating);
    // formData.append('experience', experience);
    console.log(formData);
    return this.http.post('http://localhost:1001/feedback', formData);
  }
}
