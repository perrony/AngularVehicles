import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { cpf } from 'cpf-cnpj-validator';


export class FormValidations {

  static renavamValidator(control: FormControl){

    let field = control.value
    if(field){
      if(field.length < 9){
        return true
      }
      field = field.replace(/\D/g,'')
      if(field.length < 11){
        field = '0'.repeat((11-field.length)) + field;
      }
        let renavam = field.substring(0,10)
        let digito = parseInt(field.substring(10,11))
        let reverso = renavam.split("").reverse().join("")
        let soma:number = 0
        let mult:number = 2;
    for(let i =0; i<10; i++){
       soma +=  (parseInt(reverso.substring(i, i+1))) * mult;
       mult++
       if(mult > 9){
         mult = 2;
       }
    }

        let resto = soma % 11;
        let calculo = (11 - resto )
        calculo = (calculo >= 10 ? 0 : calculo)
    if(calculo === digito){
      return true
    }
     return { renavamInvalido: false}
    }
    return true   
   
   
}

static cpfValidator(control: FormControl){
  if(control.value){
    return cpf.isValid(control.value) ? null: { cpfInvalido: true}
  }
 return null;
}

static equalsTo(otherField: string){

  const validator = (formControl: FormControl) => {
    if(otherField == null){
      throw new Error('É necessário informar um valor');
    }

    if(!formControl.root || !(<FormGroup>formControl.root).controls){
      return null;
    }

    const field = (<FormGroup>formControl.root).get(otherField);

    if(!field){
      throw new Error('É necessário informar um valor válido');
    }

    if(field.value !== formControl.value){
      return  { equalsTo: otherField};
    }
    return null
  }
  return validator;
}


}