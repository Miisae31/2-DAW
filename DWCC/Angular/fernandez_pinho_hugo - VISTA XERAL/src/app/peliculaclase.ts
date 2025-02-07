export class Peliculaclase {
    tipo: 'pelicula' = 'pelicula'; // Discriminador de tipo, esto es una propiedad que se añade a la clase para poder diferenciarla de la clase Serieclase
    // Clase Pelicula
    public _idPelicula: number;
    public _titulo: string;
    public _ano: number;
    public _descripcion: string;
    public _genero: string;
    public _nota: number;
    public _rutaTrailer: string;
    public _rutaImagen: string;

    constructor(idPelicula: number, titulo: string, ano: number, descripcion: string, genero: string, nota: number, rutaTrailer: string, rutaImagen: string) {
        this._idPelicula = idPelicula;
        this._titulo = titulo;
        this._ano = ano;
        this._descripcion = descripcion;
        this._genero = genero;
        this._nota = nota;
        this._rutaTrailer = rutaTrailer;
        this._rutaImagen = rutaImagen;

    } // Constructor

    // Getters y Setters
    get idPelicula() {
        return this._idPelicula;
    }

    set idPelicula(value) {
        this._idPelicula = value;
    }

    get titulo() {
        return this._titulo;
    }

    set titulo(value) {
        this._titulo = value;
    }

    get ano() {
        return this._ano;
    }

    set ano(value) {
        this._ano = value;
    }

    get descripcion() {
        return this._descripcion;
    }

    set descripcion(value) {
        this._descripcion = value;
    }

    get genero() {
        return this._genero;
    }

    set genero(value) {
        this._genero = value;
    }

    get nota() {
        return this._nota;
    }

    set nota(value) {
        this._nota = value;
    }

    get rutaTrailer() {
        return this._rutaTrailer;
    }

    set rutaTrailer(value) {
        this._rutaTrailer = value;
    }

    get rutaImagen() {
        return this._rutaImagen;
    }

    set rutaImagen(value) {
        this._rutaImagen = value;
    }

    toString() { // Método toString
        return "Titulo: " + this._titulo + " (" + this._ano + ")";
    }
}




