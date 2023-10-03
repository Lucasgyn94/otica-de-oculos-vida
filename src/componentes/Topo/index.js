import React from "react";

const Topo = () => {
    return (
        <header>
            <div className="limitar-secao">
                <img src='./assets/logo.png' alt='Imagem de um óculos à direita e o nome da ótica a esquerda' />

                <nav>
                    <a href="#produtos">PRODUTOS</a>
                    <a href="#sobre">SOBRE</a>
                    <a href="#contato">CONTATO</a>
                </nav>
            </div>
        </header>
    );
}

export default Topo;