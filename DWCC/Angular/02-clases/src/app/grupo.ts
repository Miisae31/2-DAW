export class Grupo {
    gid: number;
    nome: string;

    // Definimos un constructor que permitirá crear instancias da clase "Grupo"
    constructor(pGid: number, pNome: string) {
        this.gid = pGid;
        this.nome = pNome;
    }
}
