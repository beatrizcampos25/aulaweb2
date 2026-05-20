import { Request, Response } from "express"
import { ProdutoService } from "../service/ProdutoService"

const service = new ProdutoService()

export class ProdutoController {

    listar(req: Request, res: Response): void {
        res.status(200).json(service.listar())
    }

    buscar(req: Request, res: Response): void {

        const id = parseInt(req.params.id)

        const produto = service.buscar(id)

        if (!produto) {
            res.status(404).json({
                message: "Produto nao encontrado"
            })
            return
        }

        res.status(200).json(produto)
    }

    criar(req: Request, res: Response): void {

        try {

            const produto = service.criar(req.body)

            res.status(201).json(produto)

        } catch (e: any) {

            res.status(400).json({
                message: e.message
            })
        }
    }

    atualizar(req: Request, res: Response): void {

        try {

            const id = parseInt(req.params.id)

            const produto = service.atualizar(id, req.body)

            res.status(200).json(produto)

        } catch (e: any) {

            res.status(400).json({
                message: e.message
            })
        }
    }

    remover(req: Request, res: Response): void {

        const id = parseInt(req.params.id)

        const produto = service.remover(id)

        if (!produto) {

            res.status(404).json({
                message: "Produto nao encontrado"
            })

            return
        }

        res.status(200).json(produto)
    }
}
