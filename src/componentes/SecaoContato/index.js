import React from "react";
import './estilo.css'

const SecaoContato = () => {
    return (
        <section id="contato" className="secao-contato">
            <div className="limitar-secao">
                <h3>Fale conosco</h3>
                <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
                
                <div className="contato-container">

                    <div className="contato-conteudo">
                        <h4>Contato</h4>

                        <div>
                            <img src="./assets/local.png" title="Ícone local" alt="Pino de localização" />
                            <span>Goiânia, GO</span>
                        </div>

                        <div>
                            <img src="./assets/telefone.png" title="Ícone telefone" alt="Ícone de um telefone" />
                            <span>(62) 99999-9999</span>
                        </div>

                        <div>
                            <img src="./assets/local.png" title="Ícone email" alt="Ícone de uma carta" />
                            <span>contato@oticavida.com</span>
                        </div>
                    </div>

                    <div className="contato-conteudo">
                        <h4>NOSSAS REDES SOCIAIS</h4>

                        <div>
                            <img src="./assets/fb.png" title="ícone do facebook" alt="logo do facebook"/>
                            <span>/OticaVida</span>
                        </div>

                        <div>
                            <img src="./assets/ig.png" title="ícone do instagram" alt="logo do instagram"/>
                            <span>@oticavidago</span>
                        </div>

                        <div>
                            <img src="./assets/tt.png" title="ícone do twitter" alt="logo do twitter"/>
                            <span>@oticavidago</span>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default SecaoContato;