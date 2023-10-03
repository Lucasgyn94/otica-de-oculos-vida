import React from "react";
import './estilo.css'

const SecaoSobre = () => {
    return (
        <section id="sobre" className="secao-sobre">
            <div className="limitar-secao container-sobre">
                <h3>Quem somos nós?</h3>
                <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.</p>

                <div className="box-cards">
                    <img src="./assets/loja.png" title="Foto pratilheira" alt="Foto Farmacêutica retirando remédios da pratilheira" />

                    <div className="card">
                        <h4>Nossas Filiais</h4>
                        <p>Hoje temos mais de 20 filiais pelo Brasil e na América.</p>
                    </div>

                    <div className="card">
                        <h4>Atendimento Flexível</h4>
                        <p>Nossa equipe é treinada para te atender</p>
                    </div>

                    <img src="./assets/atendimento.png" title="Foto atendimento" alt="Foto de um cliente sendo atendido pela farmacêutica." />
                </div>
            </div>
        </section>
    );
}

export default SecaoSobre;