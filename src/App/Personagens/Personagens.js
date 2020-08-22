import React, { Component } from "react"
import PropTypes from "prop-types"
import Personagem from './Personagem'

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

  componentDidUpdate = (prevProps) => {
    const { personagens } = this.props;
    if (prevProps.personagens.loading && personagens.success) {

      this.setState({
        listaPersonagens: personagens.data
      });
    };
  }

  handleChange(valor) {
    const { personagens } = this.props;

    this.setState({ valorBusca: valor });
    const listaPersonagensFiltrada = personagens.data.filter(p => p.name.toUpperCase().includes(valor.toUpperCase()));
    this.setState({ listaPersonagens: listaPersonagensFiltrada });
  }


  votar() {
    const nomes = [
      "Adrianoformato",
"AlessandraSavastano",
"AlessandraKodama",
"AlessandraPresswell",
"AlineBrito",
"AlinneSilva",
"AmandaBaccin",
"AmandaMendes",
"AnaFlavia",
"AnaLuiza",
"AnaPaulaAlves",
"AnaPaulaMattar",
"AndresaGuimaraes",
"AnnaClara",
"AntenorSantos",
"ArthurCampos",
"BrunaVianna",
"CamiloGomes",
"CesarOlimpo",
"CibeleViana",
"ClaudioneySantos",
"DaltonFumec",
"DanielBerbari",
"DanielDumont",
"DaveMalheiros",
"MatheusDayrell",
"DeboraBeda",
"DeboraRibeiro",
"DiegoPousas",
"ElianeRocha",
"ElisangelaAnalaura",
"ElzaMartinuzzo",
"FabianoMaui",
"FabioSouza",
"FelipeAndrade",
"FelipeDressler",
"FelipeLuis",
"FelipeScollari",
"FernandaTemponi",
"FernandaYasmin",
"FernandoMoreno",
"FlavioRaposos",
"GabrielCouto",
"FabrielLucas",
"GabrielRosemberg",
"GabrielaCastro",
"GabrielaFerreira",
"GuilhermeAugusto",
"HelbertGomes",
"HugoRibeiro",
"IoleteCadari",
"IsabelaMachado",
"IsabellaCristina",
"JanainaSilva",
"JessicaminiDrop",
"JoaoPaulo",
"JonathanCarlos",
"JoseLima",
"Jorshuan",
"JuliusKaesar",
"JuniorDias",
"KellyMartins",
"LaizeSouza",
"LeoDias",
"LeonardoSilva",
"LohannaSantos",
"LorenaFranco",
"LucasMachado",
"LucasMarques",
"LucasQuintiliano",
"LucianaCampos",
"LucianaPimenta",
"LudimilaPessoa",
"LudmillaKossoy",
"LuizGustavo",
    ];

    var formData = new FormData();
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://albanos.com.br/wp-content/themes/albanos/insertVoto.php";
    var request = new XMLHttpRequest();

    formData.append("postID", 1297);
    //nomes.forEach(n => {

      for (var i = 0; i < nomes.length; i++) {
        (function loop(i) {
          setTimeout(function () {

            let nomeunico = nomes[i] + "@hotmail.com";
            console.log(nomeunico, "--");

            formData.append("email", nomeunico);
            request.open("POST", proxyurl + url);

            request.send(formData);
            
            console.log(nomeunico, "--");

          }, 2000 * i)
        })(i);
      }

      //let nomeunico = n + "@terra.com";

      //formData.append("email", nomeunico);

      //request.open("POST", proxyurl + url);
      //request.send(formData);
      //setTimeout(() => {  console.log(nomeunico, "--"); }, 2000);
      //console.log(nomeunico, "--");
    //})
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

          <button onClick={() => this.votar()}>votar no koda</button>

          <div className="busca">
            <input
              id="input-busca"
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
            {listaPersonagens && listaPersonagens.map(
              personagem => <Personagem personagem={personagem} key={personagem.char_id} />
            )}
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
