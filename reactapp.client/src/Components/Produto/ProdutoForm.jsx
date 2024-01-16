import  React, { useState } from 'react';
import Menu from '../Menu/Menu';

function ProdutoForm() {

    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState('');

    const handleDescricaoChange = (event) => {
        setDescricao(event.target.value);
    }

    const handlePrecoChange = (event) => {
        setPreco(event.target.value);
    }

    const cadastrar = async (event) => {
        event.preventDefault();

        const url = "/api/produtos";
        const produto = {
            descricao: descricao,
            preco: preco
        };
        
        try {
            const request = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(produto),
            });

            await request.json();
            
        } finally {
            window.location.href = '/Produto'
        }
    }

    return (
        <div>
        
            <Menu />

            <div className="container mt-4">
                <h2 className="mt-4">Novo Produto</h2>

                <form className="form mt-4">

                    <div className="form-group">
                        <label>Descricao</label>
                        <input type="text" placeholder="Descricao" className="form-control" value={descricao} onChange={handleDescricaoChange} />
                    </div>

                    <div className="form-group">
                        <label>Preco</label>
                        <input type="number" placeholder="Preco" className="form-control" value={preco} onChange={handlePrecoChange} />
                    </div>

                </form>

                <button className="btn btn-primary mt-4" onClick={cadastrar}>Cadastrar</button>

            </div>
    
        </div>
    );
    

}

export default ProdutoForm;