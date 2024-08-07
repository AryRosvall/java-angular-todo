import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { API_URL } from '../app.constants';

export const TOKEN = "authToken"
export const AUTHENTICATED_USER = "authenticatedUser"

@Injectable({
  providedIn: 'root'
})
export class JWTAuthenticationService {

  constructor(private http: HttpClient) { }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER)
    return !(user === null)
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER)
  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser())
      return sessionStorage.getItem(TOKEN)

    return null
  }

  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER)
    sessionStorage.removeItem(TOKEN)
  }

  executeAuthenticationBeanService(username: string, password: string) {

    return this.http.post<any>(`${API_URL}/authenticate`, { username, password }).pipe(
      map(data => {
        sessionStorage.setItem(AUTHENTICATED_USER, username)
        sessionStorage.setItem(TOKEN, `Bearer ${data.token}`)
        return data
      })
    )
  }
}
