import { ProdutoRepository } from "../repository/ProdutoRepository"
import { Produto } from "../model/Produto"
import { Fabricante } from "../model/Fabricante"
import { Endereco } from "../model/Endereco"

export class ProdutoService {

    repository = new ProdutoRepository()

    listar(): Produto[] {
        return this.repository.listar()
    }

    buscar(id: number): Produto | undefined {
        return this.repository.buscarPorId(id)
    }

    criar(data: any): Produto {

        if (!data.id || !data.nome || !data.preco || !data.fabricante) {
            throw new Error("Produto requer id, nome, preco e fabricante")
        }

        if (data.preco <= 0) {
            throw new Error("Preco deve ser maior que zero")
        }

        if (this.repository.buscarPorId(data.id)) {
            throw new Error("Ja existe produto com esse ID")
        }

        if (!data.fabricante.nome) {
            throw new Error("Fabricante requer nome")
        }

        if (
            !data.fabricante.endereco ||
            !data.fabricante.endereco.cidade ||
            !data.fabricante.endereco.pais
        ) {
            throw new Error("Endereco requer cidade e pais")
        }

        const endereco = new Endereco(
            data.fabricante.endereco.cidade,
            data.fabricante.endereco.pais
        )

        const fabricante = new Fabricante(
            data.fabricante.nome,
            endereco
        )

        const produto = new Produto(
            data.id,
            data.nome,
            data.preco,
            fabricante
        )

        this.repository.salvar(produto)

        return produto
    }

    atualizar(id: number, data: any): Produto {

        const produto = this.repository.buscarPorId(id)

        if (!produto) {
            throw new Error("Produto nao encontrado")
        }

        produto.nome = data.nome
        produto.preco = data.preco

        produto.fabricante = new Fabricante(
            data.fabricante.nome,
            new Endereco(
                data.fabricante.endereco.cidade,
                data.fabricante.endereco.pais
            )
        )

        return produto
    }

    remover(id: number): Produto | undefined {
        return this.repository.remover(id)
    }
}
