import { Fabricante } from "./Fabricante"

export class Produto {

    id: number
    nome: string
    preco: number
    fabricante: Fabricante

    constructor(
        nome: string,
        preco: number,
        fabricante: Fabricante
    ) {

        this.id = this.geraId()
        this.nome = nome
        this.preco = preco
        this.fabricante = fabricante
    }

    private geraId(): number {
        return Date.now()
    }
}
