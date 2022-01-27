import { Grupo } from "./grupo.model";
import { Sector } from "./sector.model";

export class Contacto {
    name: string | undefined;
    lastname: string | undefined; 
    email: string | undefined; 
    phoneNumber: string | undefined; 
    grupo: Grupo | undefined; 
    sector: Sector | undefined; 
    aficiones: Array<any> | undefined; 
 

    constructor() {
        this.aficiones = [];
    }

}