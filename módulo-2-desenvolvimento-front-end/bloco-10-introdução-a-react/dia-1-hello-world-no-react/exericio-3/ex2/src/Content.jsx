import React from "react";

class Content extends React.Component {
    render() {
        const conteudos = [
            {
              conteudo: 'High Order Functions',
              bloco: 8,
              status: 'Aprendido'
            },
            {
              conteudo: 'Composicao de Componentes',
              bloco: 11,
              status: 'Aprendendo',
            },
            {
              conteudo: 'Composicao de Estados',
              bloco: 12,
              status: 'Aprenderei'
            },
            {
              conteudo: 'Redux',
              bloco: 16,
              status: 'Aprenderei'
            },
          ];
          const mapCont = conteudos.map((item) => 
          <div>
            <p>O conteúdo é: { item.conteudo }</p>
            <p>Status: { item.status }</p>
            <p>Bloco: { item.bloco }</p>
          </div>
          )
    return (
        <div>{ mapCont }</div>
    );
}
}
export default Content;