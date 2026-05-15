import {Produto} from "../model/Produto";

export class ProductRepository {
    private static instance : ProductRepository;
    private productList : Produto [] = [];

    private constructor () {}

    public static getInstance () : ProductRepository {
        if (! this . instance ) {
            this . instance = new ProductRepository () ;
        }

        return this . instance ;
    }

    insereProduto ( product : Produto ) {
        this . productList . push ( product ) ; 
    }

    filtraProdutoPorId ( id : number ) : Produto | undefined {
        return this . productList.find( product => product . id === id ) ;
    }

    filtraTodosProdutos () : Produto []{
        return this . productList ;
    }
}