import { Component } from "@angular/core";
import { NgForm } from '@angular/forms';

@Component({
    selector: 'registeration',
    templateUrl: './registration.component.html'
})
export class registerationComponent{

    saveData(frm){
        console.log(frm);
    }
}