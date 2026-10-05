import './ServicoCard.css';

function ServicoCard({ icone, titulo, descricao}){
    return(
          <div className="servico-card">
            <span>{icone}</span>
            <h3>{titulo}</h3>
            <p>{descricao}</p>
          </div>
    );
    
}

export default ServicoCard;