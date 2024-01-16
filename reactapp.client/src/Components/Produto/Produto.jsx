import { React, useEffect, useState } from 'react'
import Menu from '../Menu/Menu'
import Modal from 'react-modal';

function Produto() {

    const [id, setId] = useState(0);
    const [produto, setProdutoParaExcluir] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [produtos, setProdutos] = useState();


    const cadastrar = () => {
        window.location.href = "/Produto/New";
    };

    const editar = (id) => {
        window.location.href = "/Produto/Edit/" + id;
    };

    const excluir = (id) => {
        setId(id);
        setProdutoParaExcluir(id);
        setModalIsOpen(true);
    };

    const confirmarExclusao = async () => {
        
        const url = "/api/produtos/" + id;
        
        try {
            const request = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            await request.json();

        } finally {
            window.location.href = '/Produto'
        }

        setModalIsOpen(false);
    };

    const cancelarExclusao = () => {
        setProdutoParaExcluir(null);
        setModalIsOpen(false);
    };

    useEffect(() => {
        loadProdutos();
    }, []);

    const contents = produtos === undefined
        ? <p>Carregando os produtos aguarde...</p>
        : <div>

            <button className="btn btn-success mt-4 " onClick={cadastrar}>Cadastrar</button>

            <table className="table table-hover mt-4 ">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Descricao</th>
                        <th scope="col">Preco</th>
                        <th scope="col">&nbsp;</th>
                    </tr>
                </thead>

                <tbody>
                    {produtos.map(produto =>
                        <tr key={produto.id}>
                            <td scope="row">{produto.id}</td>
                            <td>{produto.descricao}</td>
                            <td>{produto.preco}</td>
                            <td>
                                <button className="btn btn-success" onClick={() => editar(produto.id)}>Editar</button> &nbsp;
                                <button className="btn btn-danger" onClick={() => excluir(produto.id)}>Excluir</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>;

    return (
        <div>
            <Menu />

            <div className="container">

                <h2 className="mt-4">Produtos</h2>

                {contents}

            </div>
            
            <Modal className="modal-dialog modal-sm" isOpen={modalIsOpen} onRequestClose={cancelarExclusao}  contentLabel="Confirmar Exclusão">
                <div className="modal-content">
                    <div className="modal-body">
                        <p>Tem certeza que deseja excluir o produto Id: <strong>{id}</strong>?</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-success" onClick={confirmarExclusao}>Sim</button>
                        <button type="button" className="btn btn-danger" onClick={cancelarExclusao}>Cancelar</button>
                    </div>
                </div>
            </Modal>
        </div>
    );

    
    async function loadProdutos() {
        const response = await fetch('/api/produtos');
        const dados = await response.json();
        setProdutos(dados);
    }
}

export default Produto;