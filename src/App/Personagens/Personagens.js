import React, { Component } from "react"
import PropTypes from "prop-types"

import './Personagens.scss';

class Personagens extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listaPersonagens: null,
      valorBusca: ""
    };
  }

  componentDidMount = async () => {
    const { listarPersonagens, personagens } = this.props;
    if (!personagens.loading) {
      await listarPersonagens();
    }
    this.setState({
      listaPersonagens: personagens.data
    });
  };

  renderizarPersonagem = (personagem) => {
    let ocupacao = "";
    for (let i = 0; i < personagem.occupation.length; i++) {
      if (i !== 0)
        ocupacao = `${ocupacao}, `;
      ocupacao = `${ocupacao} ${personagem.occupation[i]}`;
    }

    return <div className="personagem">
      <img src={personagem.img} width="100%" height="100%" alt={personagem.name} />
      <div className="dados">
        <div className="status">
          <div className="etiqueta" style={{ backgroundColor: personagem.status === 'Alive' ? '#008B45' : '#EE7600' }}>
            {personagem.status}
          </div>
        </div>
        <div className="info">
          <div className="nome">{personagem.name}</div>
          <div className="data-nascimento">★ {personagem.birthday}</div>
          <div className="ocupacao">{ocupacao}</div>
        </div>
      </div>
    </div>
  }

  handleChange(valor) {
    const { personagens } = this.props;

    this.setState({ valorBusca: valor });
    const listaPersonagensFiltrada = personagens.data.filter(p => p.name.toUpperCase().includes(valor.toUpperCase()));
    this.setState({ listaPersonagens: listaPersonagensFiltrada });
  }

  render() {
    const { listaPersonagens, valorBusca } = this.state;
    return (
      <div className="Personagens">
        <div className="cabecalho">
          <img
            src="https://yt3.ggpht.com/a/AGF-l79rcSfCz8vufHWw5DP4cTMYGvBpu135UlyfWw=s900-c-k-c0xffffffff-no-rj-mo"
            width="150"
            height="150"
            alt="logo" />

          <div className="busca">
            <input
              type="search"
              value={valorBusca}
              onChange={(value) => this.handleChange(value.target.value)}
              placeholder="Pesquise os personagens"
            />
          </div>
        </div>
        <div className="lista-personagens">
          <div className="titulo">
            {valorBusca ? `Você pesquisou por "${valorBusca}"` : 'Personagens'}
          </div>
          <div className="lista">
            {listaPersonagens && listaPersonagens.map(personagem => this.renderizarPersonagem(personagem))}
          </div>
        </div>
      </div>
    )
  }
}

Personagens.propTypes = {
  listarPersonagens: PropTypes.func.isRequired,
  personagens: PropTypes.object,
}

Personagens.defaultProps = {
  personagens: {}
}

export default Personagens
