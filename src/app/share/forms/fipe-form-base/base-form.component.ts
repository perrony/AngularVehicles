import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IBrand } from '../../models/fipe/Brand';
import { IModel } from '../../models/fipe/Model';
import { IModelyear } from '../../models/fipe/ModelYear';
import { IReference } from '../../models/fipe/Reference';
import { IVehicle } from '../../models/fipe/Vehicle';
import { FipeService } from '../../services/fipe/fipe.service';



@Component({
    selector: 'app-base-form',
    template: '<div></div>',
  })
  
  export class BaseFormComponent implements OnInit {
  
  /*   formRegister: FormGroup;
    reference: number;  */
    vehicle_type: any;
    referencias: IReference[] = [];
    marcas: IBrand[] = [];
    modelos: IModel[] = [];
    anoModelos: IModelyear[] = [];
   /*  vehicle: IVehicle;  */
  
    constructor(
      public fipeService: FipeService
    ) { }
  
    ngOnInit(): void {
  
    }
  
    onLisaReference(){
      this.fipeService.getReference()
        .subscribe(
            values => {
              this.referencias = values
            }
        )
    }
  
  
    onChangeReference(event: number){
      if(event){
       this.fipeService.getBrand(this.vehicle_type,event)
       .subscribe(
         values => {
           this.marcas = values
         }
       )
      }
  
     }
  
     onChangeBrand(event: number){
      if(event){
       /*  this.fipeService.getModel(this.vehicle_type
          this.formRegister.get('codigoReferencia')?.value,event)
            .subscribe(
              values => {
              this.modelos = values['Modelos'] 
              }
            ) */
      }
    }
  
    onChangeModelos(event: number){
      if(event){
        /* this.fipeService.getModelYear(this.vehicle_type,
          this.formRegister.get('codigoReferencia')?.value,
          this.formRegister.get('codigoMarca')?.value,event)
            .subscribe(
               values => {
                 this.anoModelos = values
               }
            ) */
      }
  
    }
  
    onChangeAnoModelo(event: number){
      if(event){
       /*   this.fipeService.getVehicle(this.vehicle_type,
         this.formRegister.get('codigoReferencia')?.value,
          this.formRegister.get('codigoMarca')?.value,
          this.formRegister.get('codigoModelo')?.value,event,1) 
            .subscribe(
              value => {
                if(value){
                  const numberPattern = /\d+/g;
                  this.vehicle = value
                  let valor = parseFloat(this.vehicle.value.match(numberPattern).join(''))/100
                  this.formRegister.get('codigoFipe').setValue(this.vehicle.CodigoFipe)
                  this.formRegister.get('valorReferencia').setValue(valor)
                  this.formRegister.get('combustivel').setValue(this.vehicle.Combustivel) 
                }
  
            }
            )
            */
      }
  
    }
  
  
  }
  