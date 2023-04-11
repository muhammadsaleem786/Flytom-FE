import { Component, Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable()
export class CommonToastrService {
    constructor(private toastr: ToastrService) {

        this.toastr.toastrConfig.autoDismiss = true;
        this.toastr.toastrConfig.tapToDismiss = true;
        this.toastr.toastrConfig.closeButton = true;
        this.toastr.toastrConfig.preventDuplicates = true;
        this.toastr.toastrConfig.newestOnTop = true;
        this.toastr.toastrConfig.timeOut = 3000;
        this.toastr.toastrConfig.positionClass = 'toast-top-right';
        this.toastr.toastrConfig.autoDismiss = false;
    }

    Success(title?: string, message?: string) {
        this.toastr.success(message, title);

    }
    Warning(title?: string, message?: string) {
        this.toastr.warning(message, title);

    }
    ShowFullWidthError(title?: string, message?: string) {
        this.toastr.error(message, title, { positionClass: 'toast-top-center', timeOut: 5000 });
    }
    Error(title?: string, message?: string) {
        this.toastr.error(message, title);
    }
    Info(title?: string, message?: string) {
        this.toastr.info(message, title);
    }

    RemoveToastr() {
        // Immediately remove current toasts without using animation
        //this.toastr.remove();
    }

    RemoveWithAnimation() {
        // Remove current toasts using animation
        //toastr.clear();
    }
}

