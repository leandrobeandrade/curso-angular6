import { EventEmitter } from '@angular/core';

export class SnackBarService {
    notifier: EventEmitter<string> = new EventEmitter<string>()

    notify(message: string) {
        this.notifier.emit(message)
    }
}