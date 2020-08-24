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
    const nomes=[
      "ameliasilva1111",
"anacaldeira1111",
"andreiacaldeira1111",
"ameliocaldeira1111",
"ameliosilva1111",
"andreiasilva1111",
"andreiasantos1111",
"ameliasantos1111",
"ameliosantos1111",
"ameliosilva1111",
"ameliocaldeira1111",
"ameliosouza1111",
"amelioviana1111",
"ameliasantos1111",
"Adrianoformato1111",
"AlessandraSavastano1111",
"AlessandraKodama1111",
"AlessandraPresswell1111",
"AlineBrito1111",
"AlinneSilva1111",
"AmandaBaccin1111",
"AmandaMendes1111",
"AnaFlavia1111",
"AnaLuiza1111",
"AnaPaulaAlves1111",
"AnaPaulaMattar1111",
"AndresaGuimaraes1111",
"AnnaClara1111",
"AntenorSantos1111",
"ArthurCampos1111",
"brunoalves1111",
"brunosilva1111",
"brunosantos1111",
"brunoviana1111",
"brunocaldeira1111",
"brunooliveira1111",
"brunosouza1111",
"brunasantos1111",
"brunaoliveira1111",
"brunasilva1111",
"brunacardoso1111",
"brunamelo1111",
"brunnoalves1111",
"brunnosilva1111",
"brunnosantos1111",
"brunnoviana1111",
"brunnocaldeira1111",
"brunnooliveira1111",
"brunnosouza1111",
"brunnasantos1111",
"brunnaoliveira1111",
"brunnasilva1111",
"brunnacardoso1111",
"brunnamelo1111",
"BrunaVianna1111",
"caiomello1111",
"caiosantos1111",
"caiosilva1111",
"caiosouza1111",
"caioviana1111",
"caiomendes1111",
"caiocordeiro1111",
"caiogomes1111",
"caioolimpo1111",
"caiocaldeira1111",
"camilosantos1111",
"camilooliveira1111",
"camiloviana1111",
"camilosouza1111",
"camiloolimpo1111",
"camilosilva1111",
"camilasantos1111",
"camilasilva1111",
"camilaoliveira1111",
"camilaviana1111",
"camilacardoso91111",
"camilaolimpo1111",
"camilasilveira1111",
"carllasilva1111",
"carllasantos1111",
"carllaviana1111",
"carllasouza1111",
"carllasanti1111",
"carllamello1111",
"carllacardoso1111",
"carlossouza1111",
"carlossilva1111",
"carlossantos1111",
"carloscardoso1111",
"carlosmelo1111",
"carlosoliveira1111",
"Carlosmendes1111",
"carloscordeiro1111",
"carloscampos1111",
"CamiloGomes1111",
"CesarOlimpo1111",
"CibeleViana1111",
"ClaudioneySantos1111",
"DaltonFumec1111",
"danielsilva1111",
"danielsouza1111",
"danielsantos1111",
"danielcardoso1111",
"danieloliveira1111",
"danielmelo1111",
"danielviana1111",
"danielsanti1111",
"danieloliveira1111",
"danielasantos1111",
"danielaoliveira1111",
"Danielavianna1111",
"danielasilva1111",
"Dannielasouza1111",
"daniellaoliveira1111",
"danielaoliveiro1111",
"danielacardoso1111",
"DanielBerbari1111",
"DanielDumont1111",
"DaveMalheiros1111",
"MatheusDayrell1111",
"DeboraBeda1111",
"DeboraRibeiro1111",
"DiegoPousas1111",
"ElianeRocha1111",
"ElisangelaAnalaura1111",
"ElzaMartinuzzo1111",
"FabianoMaui1111",
"FabioSouza1111",
"FelipeAndrade1111",
"FelipeDressler1111",
"FelipeLuis1111",
"FelipeScollari1111",
"FernandaTemponi1111",
"FernandaYasmin1111",
"FernandoMoreno1111",
"FlavioRaposos1111",
"GabrielCouto1111",
"FabrielLucas1111",
"GabrielRosemberg1111",
"GabrielaCastro1111",
"GabrielaFerreira1111",
"GuilhermeAugusto1111",
"HelbertGomes1111",
"HugoRibeiro1111",
"IoleteCadari1111",
"IsabelaMachado1111",
"IsabellaCristina1111",
"JanainaSilva1111",
"JessicaminiDrop1111",
"joaocarlos1111",
"joaocleber1111",
"joaosouza1111",
"joaosilva1111",
"joaocardoso1111",
"joaosampaio1111",
"joaocamilo1111",
"joaooliveira1111",
"josecarlos1111",
"josecamilo1111",
"josemaria1111",
"josecardoso1111",
"josecami1111",
"josedias1111",
"josezame1111",
"josecardosin1111",
"joseamelio1111",
"josecarsed1111",
"joaodossantos1111",
"JoaoPaulo1111",
"JonathanCarlos1111",
"JoseLima1111",
"Jorshuan1111",
"JuliusKaesar1111",
"JuniorDias1111",
"KellyMartins1111",
"LaizeSouza1111",
"LeoDias1111",
"LeonardoSilva1111",
"LohannaSantos1111",
"LorenaFranco1111",
"LucasMachado1111",
"LucasMarques1111",
"LucasQuintiliano1111",
"LucianaCampos1111",
"LucianaPimenta1111",
"LudimilaPessoa1111",
"LudmillaKossoy1111",
"LuizGustavo1111",
"vagnermoura1111",
"vagnersilva1111",
"vagnersampaio1111",
"vagnersantos1111",
"vagnersouza1111",
"vagneroliveira1111",
"vagnerolimpo1111",
"vagnermadureira1111",
"vagnersanmpaio1111",
"vagnerdutra1111",
"vagnercardosoo1111",
"vagnerdeame1111",
"vagnerbh1111",
"vagnersouzabrito1111",
"vagnerbrito1111",
"ameliasilva1112",
"anacaldeira1112",
"andreiacaldeira1112",
"ameliocaldeira1112",
"ameliosilva1112",
"andreiasilva1112",
"andreiasantos1112",
"ameliasantos1112",
"ameliosantos1112",
"ameliosilva1112",
"ameliocaldeira1112",
"ameliosouza1112",
"amelioviana1112",
"ameliasantos1112",
"Adrianoformato1112",
"AlessandraSavastano1112",
"AlessandraKodama1112",
"AlessandraPresswell1112",
"AlineBrito1112",
"AlinneSilva1112",
"AmandaBaccin1112",
"AmandaMendes1112",
"AnaFlavia1112",
"AnaLuiza1112",
"AnaPaulaAlves1112",
"AnaPaulaMattar1112",
"AndresaGuimaraes1112",
"AnnaClara1112",
"AntenorSantos1112",
"ArthurCampos1112",
"brunoalves1112",
"brunosilva1112",
"brunosantos1112",
"brunoviana1112",
"brunocaldeira1112",
"brunooliveira1112",
"brunosouza1112",
"brunasantos1112",
"brunaoliveira1112",
"brunasilva1112",
"brunacardoso1112",
"brunamelo1112",
"brunnoalves1112",
"brunnosilva1112",
"brunnosantos1112",
"brunnoviana1112",
"brunnocaldeira1112",
"brunnooliveira1112",
"brunnosouza1112",
"brunnasantos1112",
"brunnaoliveira1112",
"brunnasilva1112",
"brunnacardoso1112",
"brunnamelo1112",
"BrunaVianna1112",
"caiomello1112",
"caiosantos1112",
"caiosilva1112",
"caiosouza1112",
"caioviana1112",
"caiomendes1112",
"caiocordeiro1112",
"caiogomes1112",
"caioolimpo1112",
"caiocaldeira1112",
"camilosantos1112",
"camilooliveira1112",
"camiloviana1112",
"camilosouza1112",
"camiloolimpo1112",
"camilosilva1112",
"camilasantos1112",
"camilasilva1112",
"camilaoliveira1112",
"camilaviana1112",
"camilacardoso91112",
"camilaolimpo1112",
"camilasilveira1112",
"carllasilva1112",
"carllasantos1112",
"carllaviana1112",
"carllasouza1112",
"carllasanti1112",
"carllamello1112",
"carllacardoso1112",
"carlossouza1112",
"carlossilva1112",
"carlossantos1112",
"carloscardoso1112",
"carlosmelo1112",
"carlosoliveira1112",
"Carlosmendes1112",
"carloscordeiro1112",
"carloscampos1112",
"CamiloGomes1112",
"CesarOlimpo1112",
"CibeleViana1112",
"ClaudioneySantos1112",
"DaltonFumec1112",
"danielsilva1112",
"danielsouza1112",
"danielsantos1112",
"danielcardoso1112",
"danieloliveira1112",
"danielmelo1112",
"danielviana1112",
"danielsanti1112",
"danieloliveira1112",
"danielasantos1112",
"danielaoliveira1112",
"Danielavianna1112",
"danielasilva1112",
"Dannielasouza1112",
"daniellaoliveira1112",
"danielaoliveiro1112",
"danielacardoso1112",
"DanielBerbari1112",
"DanielDumont1112",
"DaveMalheiros1112",
"MatheusDayrell1112",
"DeboraBeda1112",
"DeboraRibeiro1112",
"DiegoPousas1112",
"ElianeRocha1112",
"ElisangelaAnalaura1112",
"ElzaMartinuzzo1112",
"FabianoMaui1112",
"FabioSouza1112",
"FelipeAndrade1112",
"FelipeDressler1112",
"FelipeLuis1112",
"FelipeScollari1112",
"FernandaTemponi1112",
"FernandaYasmin1112",
"FernandoMoreno1112",
"FlavioRaposos1112",
"GabrielCouto1112",
"FabrielLucas1112",
"GabrielRosemberg1112",
"GabrielaCastro1112",
"GabrielaFerreira1112",
"GuilhermeAugusto1112",
"HelbertGomes1112",
"HugoRibeiro1112",
"IoleteCadari1112",
"IsabelaMachado1112",
"IsabellaCristina1112",
"JanainaSilva1112",
"JessicaminiDrop1112",
"joaocarlos1112",
"joaocleber1112",
"joaosouza1112",
"joaosilva1112",
"joaocardoso1112",
"joaosampaio1112",
"joaocamilo1112",
"joaooliveira1112",
"josecarlos1112",
"josecamilo1112",
"josemaria1112",
"josecardoso1112",
"josecami1112",
"josedias1112",
"josezame1112",
"josecardosin1112",
"joseamelio1112",
"josecarsed1112",
"joaodossantos1112",
"JoaoPaulo1112",
"JonathanCarlos1112",
"JoseLima1112",
"Jorshuan1112",
"JuliusKaesar1112",
"JuniorDias1112",
"KellyMartins1112",
"LaizeSouza1112",
"LeoDias1112",
"LeonardoSilva1112",
"LohannaSantos1112",
"LorenaFranco1112",
"LucasMachado1112",
"LucasMarques1112",
"LucasQuintiliano1112",
"LucianaCampos1112",
"LucianaPimenta1112",
"LudimilaPessoa1112",
"LudmillaKossoy1112",
"LuizGustavo1112",
"vagnermoura1112",
"vagnersilva1112",
"vagnersampaio1112",
"vagnersantos1112",
"vagnersouza1112",
"vagneroliveira1112",
"vagnerolimpo1112",
"vagnermadureira1112",
"vagnersanmpaio1112",
"vagnerdutra1112",
"vagnercardosoo1112",
"vagnerdeame1112",
"vagnerbh1112",
"vagnersouzabrito1112",
"vagnerbrito1112",
"ameliasilva1113",
"anacaldeira1113",
"andreiacaldeira1113",
"ameliocaldeira1113",
"ameliosilva1113",
"andreiasilva1113",
"andreiasantos1113",
"ameliasantos1113",
"ameliosantos1113",
"ameliosilva1113",
"ameliocaldeira1113",
"ameliosouza1113",
"amelioviana1113",
"ameliasantos1113",
"Adrianoformato1113",
"AlessandraSavastano1113",
"AlessandraKodama1113",
"AlessandraPresswell1113",
"AlineBrito1113",
"AlinneSilva1113",
"AmandaBaccin1113",
"AmandaMendes1113",
"AnaFlavia1113",
"AnaLuiza1113",
"AnaPaulaAlves1113",
"AnaPaulaMattar1113",
"AndresaGuimaraes1113",
"AnnaClara1113",
"AntenorSantos1113",
"ArthurCampos1113",
"brunoalves1113",
"brunosilva1113",
"brunosantos1113",
"brunoviana1113",
"brunocaldeira1113",
"brunooliveira1113",
"brunosouza1113",
"brunasantos1113",
"brunaoliveira1113",
"brunasilva1113",
"brunacardoso1113",
"brunamelo1113",
"brunnoalves1113",
"brunnosilva1113",
"brunnosantos1113",
"brunnoviana1113",
"brunnocaldeira1113",
"brunnooliveira1113",
"brunnosouza1113",
"brunnasantos1113",
"brunnaoliveira1113",
"brunnasilva1113",
"brunnacardoso1113",
"brunnamelo1113",
"BrunaVianna1113",
"caiomello1113",
"caiosantos1113",
"caiosilva1113",
"caiosouza1113",
"caioviana1113",
"caiomendes1113",
"caiocordeiro1113",
"caiogomes1113",
"caioolimpo1113",
"caiocaldeira1113",
"camilosantos1113",
"camilooliveira1113",
"camiloviana1113",
"camilosouza1113",
"camiloolimpo1113",
"camilosilva1113",
"camilasantos1113",
"camilasilva1113",
"camilaoliveira1113",
"camilaviana1113",
"camilacardoso91113",
"camilaolimpo1113",
"camilasilveira1113",
"carllasilva1113",
"carllasantos1113",
"carllaviana1113",
"carllasouza1113",
"carllasanti1113",
"carllamello1113",
"carllacardoso1113",
"carlossouza1113",
"carlossilva1113",
"carlossantos1113",
"carloscardoso1113",
"carlosmelo1113",
"carlosoliveira1113",
"Carlosmendes1113",
"carloscordeiro1113",
"carloscampos1113",
"CamiloGomes1113",
"CesarOlimpo1113",
"CibeleViana1113",
"ClaudioneySantos1113",
"DaltonFumec1113",
"danielsilva1113",
"danielsouza1113",
"danielsantos1113",
"danielcardoso1113",
"danieloliveira1113",
"danielmelo1113",
"danielviana1113",
"danielsanti1113",
"danieloliveira1113",
"danielasantos1113",
"danielaoliveira1113",
"Danielavianna1113",
"danielasilva1113",
"Dannielasouza1113",
"daniellaoliveira1113",
"danielaoliveiro1113",
"danielacardoso1113",
"DanielBerbari1113",
"DanielDumont1113",
"DaveMalheiros1113",
"MatheusDayrell1113",
"DeboraBeda1113",
"DeboraRibeiro1113",
"DiegoPousas1113",
"ElianeRocha1113",
"ElisangelaAnalaura1113",
"ElzaMartinuzzo1113",
"FabianoMaui1113",
"FabioSouza1113",
"FelipeAndrade1113",
"FelipeDressler1113",
"FelipeLuis1113",
"FelipeScollari1113",
"FernandaTemponi1113",
"FernandaYasmin1113",
"FernandoMoreno1113",
"FlavioRaposos1113",
"GabrielCouto1113",
"FabrielLucas1113",
"GabrielRosemberg1113",
"GabrielaCastro1113",
"GabrielaFerreira1113",
"GuilhermeAugusto1113",
"HelbertGomes1113",
"HugoRibeiro1113",
"IoleteCadari1113",
"IsabelaMachado1113",
"IsabellaCristina1113",
"JanainaSilva1113",
"JessicaminiDrop1113",
"joaocarlos1113",
"joaocleber1113",
"joaosouza1113",
"joaosilva1113",
"joaocardoso1113",
"joaosampaio1113",
"joaocamilo1113",
"joaooliveira1113",
"josecarlos1113",
"josecamilo1113",
"josemaria1113",
"josecardoso1113",
"josecami1113",
"josedias1113",
"josezame1113",
"josecardosin1113",
"joseamelio1113",
"josecarsed1113",
"joaodossantos1113",
"JoaoPaulo1113",
"JonathanCarlos1113",
"JoseLima1113",
"Jorshuan1113",
"JuliusKaesar1113",
"JuniorDias1113",
"KellyMartins1113",
"LaizeSouza1113",
"LeoDias1113",
"LeonardoSilva1113",
"LohannaSantos1113",
"LorenaFranco1113",
"LucasMachado1113",
"LucasMarques1113",
"LucasQuintiliano1113",
"LucianaCampos1113",
"LucianaPimenta1113",
"LudimilaPessoa1113",
"LudmillaKossoy1113",
"LuizGustavo1113",
"vagnermoura1113",
"vagnersilva1113",
"vagnersampaio1113",
"vagnersantos1113",
"vagnersouza1113",
"vagneroliveira1113",
"vagnerolimpo1113",
"vagnermadureira1113",
"vagnersanmpaio1113",
"vagnerdutra1113",
"vagnercardosoo1113",
"vagnerdeame1113",
"vagnerbh1113",
"vagnersouzabrito1113",
"vagnerbrito1113",
"ameliasilva1114",
"anacaldeira1114",
"andreiacaldeira1114",
"ameliocaldeira1114",
"ameliosilva1114",
"andreiasilva1114",
"andreiasantos1114",
"ameliasantos1114",
"ameliosantos1114",
"ameliosilva1114",
"ameliocaldeira1114",
"ameliosouza1114",
"amelioviana1114",
"ameliasantos1114",
"Adrianoformato1114",
"AlessandraSavastano1114",
"AlessandraKodama1114",
"AlessandraPresswell1114",
"AlineBrito1114",
"AlinneSilva1114",
"AmandaBaccin1114",
"AmandaMendes1114",
"AnaFlavia1114",
"AnaLuiza1114",
"AnaPaulaAlves1114",
"AnaPaulaMattar1114",
"AndresaGuimaraes1114",
"AnnaClara1114",
"AntenorSantos1114",
"ArthurCampos1114",
"brunoalves1114",
"brunosilva1114",
"brunosantos1114",
"brunoviana1114",
"brunocaldeira1114",
"brunooliveira1114",
"brunosouza1114",
"brunasantos1114",
"brunaoliveira1114",
"brunasilva1114",
"brunacardoso1114",
"brunamelo1114",
"brunnoalves1114",
"brunnosilva1114",
"brunnosantos1114",
"brunnoviana1114",
"brunnocaldeira1114",
"brunnooliveira1114",
"brunnosouza1114",
"brunnasantos1114",
"brunnaoliveira1114",
"brunnasilva1114",
"brunnacardoso1114",
"brunnamelo1114",
"BrunaVianna1114",
"caiomello1114",
"caiosantos1114",
"caiosilva1114",
"caiosouza1114",
"caioviana1114",
"caiomendes1114",
"caiocordeiro1114",
"caiogomes1114",
"caioolimpo1114",
"caiocaldeira1114",
"camilosantos1114",
"camilooliveira1114",
"camiloviana1114",
"camilosouza1114",
"camiloolimpo1114",
"camilosilva1114",
"camilasantos1114",
"camilasilva1114",
"camilaoliveira1114",
"camilaviana1114",
"camilacardoso91114",
"camilaolimpo1114",
"camilasilveira1114",
"carllasilva1114",
"carllasantos1114",
"carllaviana1114",
"carllasouza1114",
"carllasanti1114",
"carllamello1114",
"carllacardoso1114",
"carlossouza1114",
"carlossilva1114",
"carlossantos1114",
"carloscardoso1114",
"carlosmelo1114",
"carlosoliveira1114",
"Carlosmendes1114",
"carloscordeiro1114",
"carloscampos1114",
"CamiloGomes1114",
"CesarOlimpo1114",
"CibeleViana1114",
"ClaudioneySantos1114",
"DaltonFumec1114",
"danielsilva1114",
"danielsouza1114",
"danielsantos1114",
"danielcardoso1114",
"danieloliveira1114",
"danielmelo1114",
"danielviana1114",
"danielsanti1114",
"danieloliveira1114",
"danielasantos1114",
"danielaoliveira1114",
"Danielavianna1114",
"danielasilva1114",
"Dannielasouza1114",
"daniellaoliveira1114",
"danielaoliveiro1114",
"danielacardoso1114",
"DanielBerbari1114",
"DanielDumont1114",
"DaveMalheiros1114",
"MatheusDayrell1114",
"DeboraBeda1114",
"DeboraRibeiro1114",
"DiegoPousas1114",
"ElianeRocha1114",
"ElisangelaAnalaura1114",
"ElzaMartinuzzo1114",
"FabianoMaui1114",
"FabioSouza1114",
"FelipeAndrade1114",
"FelipeDressler1114",
"FelipeLuis1114",
"FelipeScollari1114",
"FernandaTemponi1114",
"FernandaYasmin1114",
"FernandoMoreno1114",
"FlavioRaposos1114",
"GabrielCouto1114",
"FabrielLucas1114",
"GabrielRosemberg1114",
"GabrielaCastro1114",
"GabrielaFerreira1114",
"GuilhermeAugusto1114",
"HelbertGomes1114",
"HugoRibeiro1114",
"IoleteCadari1114",
"IsabelaMachado1114",
"IsabellaCristina1114",
"JanainaSilva1114",
"JessicaminiDrop1114",
"joaocarlos1114",
"joaocleber1114",
"joaosouza1114",
"joaosilva1114",
"joaocardoso1114",
"joaosampaio1114",
"joaocamilo1114",
"joaooliveira1114",
"josecarlos1114",
"josecamilo1114",
"josemaria1114",
"josecardoso1114",
"josecami1114",
"josedias1114",
"josezame1114",
"josecardosin1114",
"joseamelio1114",
"josecarsed1114",
"joaodossantos1114",
"JoaoPaulo1114",
"JonathanCarlos1114",
"JoseLima1114",
"Jorshuan1114",
"JuliusKaesar1114",
"JuniorDias1114",
"KellyMartins1114",
"LaizeSouza1114",
"LeoDias1114",
"LeonardoSilva1114",
"LohannaSantos1114",
"LorenaFranco1114",
"LucasMachado1114",
"LucasMarques1114",
"LucasQuintiliano1114",
"LucianaCampos1114",
"LucianaPimenta1114",
"LudimilaPessoa1114",
"LudmillaKossoy1114",
"LuizGustavo1114",
"vagnermoura1114",
"vagnersilva1114",
"vagnersampaio1114",
"vagnersantos1114",
"vagnersouza1114",
"vagneroliveira1114",
"vagnerolimpo1114",
"vagnermadureira1114",
"vagnersanmpaio1114",
"vagnerdutra1114",
"vagnercardosoo1114",
"vagnerdeame1114",
"vagnerbh1114",
"vagnersouzabrito1114",
"vagnerbrito1114",
"ameliasilva1115",
"anacaldeira1115",
"andreiacaldeira1115",
"ameliocaldeira1115",
"ameliosilva1115",
"andreiasilva1115",
"andreiasantos1115",
"ameliasantos1115",
"ameliosantos1115",
"ameliosilva1115",
"ameliocaldeira1115",
"ameliosouza1115",
"amelioviana1115",
"ameliasantos1115",
"Adrianoformato1115",
"AlessandraSavastano1115",
"AlessandraKodama1115",
"AlessandraPresswell1115",
"AlineBrito1115",
"AlinneSilva1115",
"AmandaBaccin1115",
"AmandaMendes1115",
"AnaFlavia1115",
"AnaLuiza1115",
"AnaPaulaAlves1115",
"AnaPaulaMattar1115",
"AndresaGuimaraes1115",
"AnnaClara1115",
"AntenorSantos1115",
"ArthurCampos1115",
"brunoalves1115",
"brunosilva1115",
"brunosantos1115",
"brunoviana1115",
"brunocaldeira1115",
"brunooliveira1115",
"brunosouza1115",
"brunasantos1115",
"brunaoliveira1115",
"brunasilva1115",
"brunacardoso1115",
"brunamelo1115",
"brunnoalves1115",
"brunnosilva1115",
"brunnosantos1115",
"brunnoviana1115",
"brunnocaldeira1115",
"brunnooliveira1115",
"brunnosouza1115",
"brunnasantos1115",
"brunnaoliveira1115",
"brunnasilva1115",
"brunnacardoso1115",
"brunnamelo1115",
"BrunaVianna1115",
"caiomello1115",
"caiosantos1115",
"caiosilva1115",
"caiosouza1115",
"caioviana1115",
"caiomendes1115",
"caiocordeiro1115",
"caiogomes1115",
"caioolimpo1115",
"caiocaldeira1115",
"camilosantos1115",
"camilooliveira1115",
"camiloviana1115",
"camilosouza1115",
"camiloolimpo1115",
"camilosilva1115",
"camilasantos1115",
"camilasilva1115",
"camilaoliveira1115",
"camilaviana1115",
"camilacardoso91115",
"camilaolimpo1115",
"camilasilveira1115",
"carllasilva1115",
"carllasantos1115",
"carllaviana1115",
"carllasouza1115",
"carllasanti1115",
"carllamello1115",
"carllacardoso1115",
"carlossouza1115",
"carlossilva1115",
"carlossantos1115",
"carloscardoso1115",
"carlosmelo1115",
"carlosoliveira1115",
"Carlosmendes1115",
"carloscordeiro1115",
"carloscampos1115",
"CamiloGomes1115",
"CesarOlimpo1115",
"CibeleViana1115",
"ClaudioneySantos1115",
"DaltonFumec1115",
"danielsilva1115",
"danielsouza1115",
"danielsantos1115",
"danielcardoso1115",
"danieloliveira1115",
"danielmelo1115",
"danielviana1115",
"danielsanti1115",
"danieloliveira1115",
"danielasantos1115",
"danielaoliveira1115",
"Danielavianna1115",
"danielasilva1115",
"Dannielasouza1115",
"daniellaoliveira1115",
"danielaoliveiro1115",
"danielacardoso1115",
"DanielBerbari1115",
"DanielDumont1115",
"DaveMalheiros1115",
"MatheusDayrell1115",
"DeboraBeda1115",
"DeboraRibeiro1115",
"DiegoPousas1115",
"ElianeRocha1115",
"ElisangelaAnalaura1115",
"ElzaMartinuzzo1115",
"FabianoMaui1115",
"FabioSouza1115",
"FelipeAndrade1115",
"FelipeDressler1115",
"FelipeLuis1115",
"FelipeScollari1115",
"FernandaTemponi1115",
"FernandaYasmin1115",
"FernandoMoreno1115",
"FlavioRaposos1115",
"GabrielCouto1115",
"FabrielLucas1115",
"GabrielRosemberg1115",
"GabrielaCastro1115",
"GabrielaFerreira1115",
"GuilhermeAugusto1115",
"HelbertGomes1115",
"HugoRibeiro1115",
"IoleteCadari1115",
"IsabelaMachado1115",
"IsabellaCristina1115",
"JanainaSilva1115",
"JessicaminiDrop1115",
"joaocarlos1115",
"joaocleber1115",
"joaosouza1115",
"joaosilva1115",
"joaocardoso1115",
"joaosampaio1115",
"joaocamilo1115",
"joaooliveira1115",
"josecarlos1115",
"josecamilo1115",
"josemaria1115",
"josecardoso1115",
"josecami1115",
"josedias1115",
"josezame1115",
"josecardosin1115",
"joseamelio1115",
"josecarsed1115",
"joaodossantos1115",
"JoaoPaulo1115",
"JonathanCarlos1115",
"JoseLima1115",
"Jorshuan1115",
"JuliusKaesar1115",
"JuniorDias1115",
"KellyMartins1115",
"LaizeSouza1115",
"LeoDias1115",
"LeonardoSilva1115",
"LohannaSantos1115",
"LorenaFranco1115",
"LucasMachado1115",
"LucasMarques1115",
"LucasQuintiliano1115",
"LucianaCampos1115",
"LucianaPimenta1115",
"LudimilaPessoa1115",
"LudmillaKossoy1115",
"LuizGustavo1115",
"vagnermoura1115",
"vagnersilva1115",
"vagnersampaio1115",
"vagnersantos1115",
"vagnersouza1115",
"vagneroliveira1115",
"vagnerolimpo1115",
"vagnermadureira1115",
"vagnersanmpaio1115",
"vagnerdutra1115",
"vagnercardosoo1115",
"vagnerdeame1115",
"vagnerbh1115",
"vagnersouzabrito1115",
"vagnerbrito1115",


    ]

    var formData = new FormData();
    const proxyurl = "";
    const url = "https://albanos.com.br/wp-content/themes/albanos/insertVoto.php";
    var request = new XMLHttpRequest();

    
    formData.set("postID", 1297);
    //nomes.forEach(n => {

      for (var i = 0; i < nomes.length; i++) {
        (function (i) {
          setTimeout(function () {
            let nomeunico = nomes[i] + "@gmail.com";
            formData.set("email", nomeunico);

            request.open("POST", proxyurl + url);
            request.send(formData);
            
            console.log(nomeunico, i, "--");

          }, 3000 * i)
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
