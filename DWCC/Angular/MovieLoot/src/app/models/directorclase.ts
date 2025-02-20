export class Directorclase { // Clase Director, de momento no se usa en la aplicació
    private _idDirector : number;
    private _nombre: string;
    private _apellidos: string;
    private _fechaNacimiento: string;
    private _peliculasDirigidas: string[];
    private _biografia: string;
    private _profesion: string;
    private _rutaFotoDirector: string;
    
  constructor(
    idDirector: number,
    nombre: string,
    apellidos: string,
    fechaNacimiento: string,
    peliculasDirigidas: string[],
    biografia: string,
    profesion: string,
    rutaFotoDirector: string

  ) {
    this._idDirector = idDirector;
    this._nombre = nombre;
    this._apellidos = apellidos;
    this._fechaNacimiento = fechaNacimiento;
    this._peliculasDirigidas = peliculasDirigidas;
    this._biografia = biografia;
    this._profesion = profesion;
    this._rutaFotoDirector = rutaFotoDirector;
  } // Constructor

  // Getters y Setters
  get idDirector() {
    return this._idDirector;
  }

  set idDirector(value) {
    this._idDirector = value;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(value) {
    this._nombre = value;
  }

  get apellidos() {
    return this._apellidos;
  }

  set apellidos(value) {
    this._apellidos = value;
  }

  get fechaNacimiento() {
    return this._fechaNacimiento;
  }

  set fechaNacimiento(value) {
    this._fechaNacimiento = value;
  }

  get peliculasDirigidas() {
    return this._peliculasDirigidas;
  }

  set peliculasDirigidas(value) {
    this._peliculasDirigidas = value;
  }

  get biografia() {
    return this._biografia;
  }

  set biografia(value) {
    this._biografia = value;
  }

  get profesion() {
    return this._profesion;
  }

  set profesion(value) {
    this._profesion = value;
  }

  get rutaFotoDirector() {
    return this._rutaFotoDirector;
  }

  set rutaFotoDirector(value) {
    this._rutaFotoDirector = value;
  }

  toString() {
    // Método toString
    return 'Director: ' + this._nombre + ' ' + this._apellidos;
  }
}
