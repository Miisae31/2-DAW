export class Serieclase {
    tipo: 'serie' = 'serie'; // Discriminador, esto sirve para saber si es una serie o una película
        public _idSerie: number;
        public _titulo: string;
        public _ano: number;
        public _descripcion: string;
        public _genero: string;
        public _nota: number;
        public _rutaTrailer: string;
        public _rutaImagen: string;
    
        constructor(idSerie: number, titulo: string, ano: number, descripcion: string, genero: string, nota: number, rutaTrailer: string, rutaImagen: string) {
            this._idSerie = idSerie;
            this._titulo = titulo;
            this._ano = ano;
            this._descripcion = descripcion;
            this._genero = genero;
            this._nota = nota;
            this._rutaTrailer = rutaTrailer;
            this._rutaImagen = rutaImagen;
    
        } // Constructor
    
        // Getters y Setters
        get idSerie() {
            return this._idSerie;
        }
    
        set idSerie(value) {
            this._idSerie = value;
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
    
    
    
    
    

