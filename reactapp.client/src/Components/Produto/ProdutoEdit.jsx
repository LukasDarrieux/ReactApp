import { useEffect, useState } from 'react'
import Menu from '../Menu/Menu';
import { useParams } from 'react-router-dom';

function ProdutoEdit() {

    const { id } = useParams();
    
    const [descricao, setDescricao] = useState();
    const [preco, setPreco] = useState();
    
    const handleDescricaoChange = (event) => {
        setDescricao(event.target.value);
    };

    const handlePrecoChange = (event) => {
        setPreco(event.target.value);
    };

    useEffect(() => {
        loadProduto();
    }, []);

    const editar = async (event) => {
        event.preventDefault();
        try {
            const url = "/api/produtos/" + id;
            const produto = {
                id: id,
                descricao: descricao,
                preco: preco
            };

            const request = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(produto),
            });
            request.json();

        } finally {
            window.location.href = "/Produto/";
        }
    };

    const contents = descricao === undefined && preco === undefined
        ? <p>Carregando o produto aguarde...</p>
        :<form className="form mt-4">

            <div className="form-group">
                <label>Descricao</label>
                <input type="text" placeholder="Descricao" className="form-control" value={descricao} onChange={handleDescricaoChange} />
            </div>

            <div className="form-group">
                <label>Preco</label>
                <input type="number" placeholder="Preco" className="form-control" value={preco} onChange={handlePrecoChange} />
            </div>
            <button className="btn btn-primary mt-4" onClick={editar}>Editar</button>
        </form>;


    return (
        <div>

            <Menu />

            <div className="container mt-4">
                <h2 className="mt-4">Editar Produto</h2>

                {contents}

            </div>

        </div>
    );

    async function loadProduto() {
        const response = await fetch('/api/produtos/' + id);
        const produto = await response.json();
        
        if (produto.descricao === undefined && produto.preco === undefined) {
            window.location.href = "/Produto/"
            return;
        }
        
        setDescricao(produto.descricao);
        setPreco(produto.preco);
    }

    

}

export default ProdutoEdit;