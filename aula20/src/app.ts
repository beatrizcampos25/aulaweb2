import express from "express"
import { ProdutoController } from "./controller/ProdutoController"

const app = express()

const PORT = process.env.PORT ?? 3000

app.use(express.json())

const controller = new ProdutoController()

app.get("/api/produto", controller.listar)

app.get("/api/produto/:id", controller.buscar)

app.post("/api/produto", controller.criar)

app.put("/api/produto/:id", controller.atualizar)

app.delete("/api/produto/:id", controller.remover)

app.listen(PORT, () => {
    console.log(`API rodando em http://localhost:${PORT}`)
})
