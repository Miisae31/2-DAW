export interface Usuario {
    uid: number;
    nome: string;
    login: string;
    email: string;
    contrasinal: string;
    departamento?: string; // Este campo está definido como opcional
    readonly empresa: string; // Este campo é de só lectura despois da primeira inicialización (a inicialización dos campos de só lectura ten que ocorrer obrigatoriamente coa inicialización do obxecto)

    cambiarDepartamento(depto: string): void; // Definimos a cabeceira dun método que terá que implementarse en cada obxecto de tipo "Usuario"
}
