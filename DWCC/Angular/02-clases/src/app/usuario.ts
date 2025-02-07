import { Grupo } from "./grupo"; // Impórtase a clase "Grupo" para poder usala na clase

export class Usuario {
    _uid: number;
    _nome: string;
    _login: string;
    _email: string;
    _contrasinal: string;
    _membresias: Grupo[];

    // Definimos un construtor que permitirá instanciar obxectos da clase "Usuario"
    constructor(pUid: number, pNome: string, pLogin: string, pEmail: string, pContrasinal: string, pMembresias: Grupo[]) {
        this._uid = pUid;
        this._nome = pNome;
        this._login = pLogin;
        this._email = pEmail;
        this._contrasinal = pContrasinal;
        this._membresias = [...pMembresias];
    }

    // SETTERS
    set uid(pUid: number) {
        this.uid = pUid;
    }

    set nome(pNome: string) {
        this._nome = pNome;
    }
    
    set login(pLogin: string) {
        this._login = pLogin;
    }

    set email(pEmail: string) {
        this._email = pEmail;
    }

    set contrasinal(pContrasinal: string) {
        this._contrasinal = pContrasinal;
    }

    set membresias(pMembresias: Grupo[]) {
        this._membresias = [...pMembresias];
    }

    // GETTERS
    get uid(): number {
        return this._uid;
    }

    get nome(): string {
        return this._nome;
    }

    get login(): string {
        return this._login;
    }

    get email(): string {
        return this._email;
    }

    get contrasinal(): string {
        return this._contrasinal;
    }

    get membresias(): Grupo[] {
        return this._membresias;
    }
}
