export default class Programa {
    constructor() {

    this.acumEdad = 0;
    this.contPersonas = 0;
    this.edadMayor= 0;    
    }

    procesarPersonas(persona) {

        this.contPersonas ++;
        this.acumEdad += persona.edad;

        if(persona.sexo == 'F' && persona.edad > this.edadMayor){
            this.edadMayor = persona.edad;
        }
 

    }

    promedioEdad() {
        return this.acumEdad / this.contPersonas;
    }

    mayorEdad() {
        return this.edadMayor;
    }
}