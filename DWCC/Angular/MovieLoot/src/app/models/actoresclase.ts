export class Actoresclase { // Definimos la clase Actoresclase
        private _idActor: number;
        private _nombre: string;
        private _apellidos: string;
        private _fechaNacimiento: string;
        private _peliculasInterpretadas: string[];
        private _personajesInterpretados: string[];
        private _biografia: string;
        private _profesion: string;
        private _rutaFotoActor: string;
    
        constructor(
          idActor: number,
          nombre: string,
          apellidos: string,
          fechaNacimiento: string,
          peliculasInterpretadas: string[],
          personajesInterpretados: string[],
          biografia: string,
          profesion: string,
          rutaFotoActor: string
        ) { // Definimos el constructor de la clase Actor
            this._idActor = idActor;
            this._nombre = nombre;
            this._apellidos = apellidos;
            this._fechaNacimiento = fechaNacimiento;
            this._peliculasInterpretadas = peliculasInterpretadas;
            this._personajesInterpretados = personajesInterpretados;
            this._biografia = biografia;
            this._profesion = profesion;
            this._rutaFotoActor = rutaFotoActor;
        }
    
        // Definimos los métodos getter y setter para cada propiedad de la clase Actor
        get idActor(): number {
            return this._idActor;
        }
    
        set idActor(value: number) {
            this._idActor = value;
        }
    
        get nombre(): string {
            return this._nombre;
        }
    
        set nombre(value: string) {
            this._nombre = value;
        }
    
        get apellidos(): string {
            return this._apellidos;
        }
    
        set apellidos(value: string) {
            this._apellidos = value;
        }
    
        get fechaNacimiento(): string {
            return this._fechaNacimiento;
        }
    
        set fechaNacimiento(value: string) {
            this._fechaNacimiento = value;
        }
    
        get peliculasInterpretadas(): string[] {
            return this._peliculasInterpretadas;
        }
    
        set peliculasInterpretadas(value: string[]) {
            this._peliculasInterpretadas = value;
        }
    
        get personajesInterpretados(): string[] {
            return this._personajesInterpretados;
        }
    
        set personajesInterpretados(value: string[]) {
            this._personajesInterpretados = value;
        }
    
        get biografia(): string {
            return this._biografia;
        }
    
        set biografia(value: string) {
            this._biografia = value;
        }
    
        get profesion(): string {
            return this._profesion;
        }
    
        set profesion(value: string) {
            this._profesion = value;
        }
    
        get rutaFotoActor(): string {
            return this._rutaFotoActor;
        }
    
        set rutaFotoActor(value: string) {
            this._rutaFotoActor = value;
        }
    
        toString(): string { // Definimos el método toString de la clase Actor
            return `Actor: ${this._nombre} ${this._apellidos}, nacido el ${this._fechaNacimiento}`;
        }
      }

