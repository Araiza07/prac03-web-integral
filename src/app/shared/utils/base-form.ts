import {Injectable} from "@angular/core";
import {AbstractControl} from "@angular/forms"

@Injectable({ providedIn: 'root'})
export class BaseForm {

    constructor(){ }

    isValidField(form: AbstractControl|null){
        var flag = false;
        if (form != null){
            flag = form.touched || form.dirty && !form.valid;
        }
        return flag;
    }
    getErrorMessage(form: AbstractControl|null){
        let message = "";
        if (form){
            const{ errors } = form;
            if (errors){
            const messages: any = {
                required: 'Campo requerido',
                email: 'Formato inválido',
                pattern: 'Formato invalido',
                minError: 'El rango no es correcto',
                min: 'El rango no es correcto es muy corto',
                max: 'el rango no es correcto es muy grande'
            }

            const errorKey = Object.keys(errors).find(Boolean);
            if (errorKey){
                message = messages[errorKey];
            }

            }
        }
        return message;
    }
}