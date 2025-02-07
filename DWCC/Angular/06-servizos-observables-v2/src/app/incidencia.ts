export class Incidencia {
    id: number;
    descricion: string;
    nivel: number;

    constructor(pId: number, pDescricion: string, pNivel: number) {
        this.id = pId;
        this.descricion = pDescricion;
        this.nivel = pNivel;
    }
}
