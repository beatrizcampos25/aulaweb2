import { Produto } from "../model/Produto"

const produtos: Produto[] = []

export class ProdutoRepository {

    listar(): Produto[] {
        return produtos
    }

    buscarPorId(id: number): Produto | undefined {
        return produtos.find(p => p.id === id)
    }

    salvar(produto: Produto): void {
        produtos.push(produto)
    }

    remover(id: number): Produto | undefined {

        const indice = produtos.findIndex(p => p.id === id)

        if (indice === -1) {
            return undefined
        }

        return produtos.splice(indice, 1)[0]
    }
}
