import { Injectable } from '@angular/core';
@Injectable()
export class CommonService {
    GetFormatDate(dat:any) {
        var date = new Date(dat);
        var yyyy = date.getFullYear();
        var mm = date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1); // getMonth() is zero-based
        var dd = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
        return yyyy + '-' + mm + '-' + dd;
        //let format;
        //if (dateFormat[0] == "DD")
        //    format = dd;
        //if (dateFormat[0] == "MM")
        //    format = dd;
        //if (dateFormat[0] == "DD")
        //    format = dd;
        //return dateFormat[0] + '-' + dateFormat[1] + '-' + dateFormat[2];
    };

    GetFormatDatePk(dat:any) {
        var date = new Date(dat);
        var yyyy = date.getFullYear();
        var mm = date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1); // getMonth() is zero-based
        var dd = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
        return dd + '/' + mm + '/' + yyyy;
    };
}