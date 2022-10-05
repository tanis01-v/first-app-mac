import { Component } from "@angular/core";

@Component({
    selector: 'app-personas',
    templateUrl: './personas.component.html'

})
export class PersonasComponent {
    deshabilitar = false;
    mensaje = 'No se ha agregado ninguna persona';
    titulo = 'Ingeniero';
    agregarPersona(){
        this.mensaje = 'Se agrego una persona';
    }
    // modificarTitulo(event: Event){
    //     this.titulo = (<HTMLInputElement>event.target).value;
    // }
}