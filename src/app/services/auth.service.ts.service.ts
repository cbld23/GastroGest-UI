import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post<{ token: string }>(`${this.baseUrl}/login`, { username, password });
  }

  saveToken(token: string): void {
    localStorage.setItem('jwt', token);
  }

  getToken(): string | null {
    return localStorage.getItem('jwt');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('jwt');
  }

  logout(): void {
    localStorage.removeItem('jwt');
  }
}
/*
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authUrl = 'http://localhost:8000/api/login'; 
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.isLoggedIn());

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post<{ token: string }>(this.authUrl, { username, password });
  }

  saveToken(token: string): void {
    localStorage.setItem('token', token);
    this.isAuthenticatedSubject.next(true); 
  }

  logout(): void {
    localStorage.removeItem('token');
    this.isAuthenticatedSubject.next(false); 
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getAuthStatus(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable(); 
  }
}

*/