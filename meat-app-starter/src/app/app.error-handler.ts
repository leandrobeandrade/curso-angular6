import { HttpErrorResponse } from '@angular/common/http'
import { Observable } from 'rxjs'

export class ErrorHandler {
  static handleError(error: HttpErrorResponse | any){
    let errorMessage: string
    
    if (error instanceof HttpErrorResponse) {
      const body = error.message || ''
      const err = body || JSON.stringify(body)
      errorMessage = `${error.url}: ${error.status} - ${error.statusText || ''} ${err}`
    }
    else {
      errorMessage = error.message ? error.message : error.toString()
    }
    console.log(errorMessage)
    return Observable.throw(errorMessage)
  }
}