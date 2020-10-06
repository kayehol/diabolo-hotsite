import React from "react"
import styled from "styled-components"
import "typeface-poppins"
import "typeface-roboto"
//import ScrollTop from "@nzambello/react-scrolltop"
import logoLunares from "../images/logoLunares.png"
import elemAstros from "../images/elemAstros.png"
import elemCabides from "../images/elemCabides.png"
//import capaDiabolo from "../images/capaDiabolo.jpg"
import capaDiabolo2 from "../images/capaDiabolo2.jpg"
import loadable from "@loadable/component"

const ScrollTop = loadable(() => import("@nzambello/react-scrolltop"))

const Container = styled.div`
  background-color: #fff;
  color: #231f20;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  #logoLunares {
    max-width: 30%;
    padding: 0px 0px;
  }
  #logoCabides {
    width: 8em;
  }
  #logoAstros {
    max-width: 80%;
    padding: 20px 0;
  }
  #aviso {
    text-align: center;
    padding: 40px 20px;
    font-family: Poppins, sans-serif;
    font-weight: bold;
  }
  @media only screen and (max-width: 720px) {
    #logoLunares{
      max-width: 80%;
    }
    #logoCabides{
      width: 4em;
    }
    #aviso {
      width: 90%;
    }
  }
`

const PreVenda = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-family: Poppins, sans-serif;
    padding: 40px 0;
  }
  #livro {
    display: flex;
    flex-direction: row;
    max-width: 95%;
    padding: 20px 0;
    font-family: Poppins, sans-serif;
  }
  #livro img {
    width: 50%;
    height: auto;
  }
  #fichaTecnica {
    flex-direction: column;
    width: 50%;
  }
  #fichaTecnica ul {
    list-style-type: none;
    font-size: 1em;
    line-height: 1.2;
    width: 90%;
  }
  #fichaTecnica ul li{
    padding-left: 55px;
  }
  #fichaTecnica p {
    padding: 0px 80px;
    font-size: 1em;
  }
  #apresentacao {
    font-family: Poppins, sans-serif;
    width: 60%;
    padding: 0px;
    font-size: 1.1em;
  }
  #apresentacao a {
    text-decoration: underline;
    color: #231f20;
  }
  #apresentacao ul {
    list-style-type: none;
    text-align: center;
  }
  blockquote {
    background: #f9f9f9;
    border-left: 10px solid #ccc;
    margin: 0 10px 1em 10px;
    padding: 0.5em 10px;
    font-size: 1.2em;
    text-align: justify;
    line-height: 1.5;
  }
  #autor{
    background-color: #758b8b;
    color: #fff;
    padding: 20px 40px;
    margin: 0;
    line-height: 1.5;
  }
  #orelha{
    margin: 0;
    padding: 20px 0;
    line-height: 1.5;
  }
  button{
    margin: 0;
    padding: 20px;
    width: 300px;
    background-color: #dbc724;
    font-family: Poppins, sans-serif;
    font-size: 1.5em;
  }
  button a{
    text-decoration: none;
    color: #000;
  }
  #trecho{
    padding: 40px 0px;
    margin: 0;
  }
  #botao {
    padding: 80px 0;
  }
  @media only screen and (max-width: 720px) {
    h2 {
      text-align: center;
    }
    #livro{
      flex-direction: column;
    }
    #livro img {
      width:80%;
      padding-bottom: 20px;
      margin: auto;
    }
    #fichaTecnica{
      width: auto;
    }
    #fichaTecnica ul{
      padding: 20px 0;
    }
    #fichaTecnica ul li{
      padding-left: 20px;
    }
    #fichaTecnica p{
      font-size: 1.3em;
      width: 100%;
      padding: 0 20px;
    }
    #apresentacao{
      width: 85%;
    }
    #autor{
      padding: 20px;
    }
    blockquote{
      text-align: left;
    }
    
  }
`

const Diabolo = () => (
  <Container>
    <img id="logoCabides" src={elemCabides} alt="logo" />
    <img id="logoLunares" src={logoLunares} alt="trajes lunares" />
    <PreVenda>
      <h2>DIABOLÔ</h2>
      <div id="livro">
        <img src={capaDiabolo2} alt="capa" />
        <div id="fichaTecnica">
          <p>INFORMAÇÕES</p>
          <ul>
            <li>ENCADERNAÇÃO: Brochura</li>
            <li>FORMATO: 14 x 21 cm</li>
            <li>PÁGINAS: 100</li>
            <li>PAPEL: Pólen 80 gramas</li>
            <li>ANO DE EDIÇÃO: 2020</li>
            <li>EDIÇÃO: 2ª (Revista pelo autor)</li>
            <li>SELO: Trajes Lunares</li>
          </ul>
          <p>
          Nove contos compõem este livro, em que sempre se manifesta alguma
          perda irremediável, principalmente a da inocência. Neles, há meninos
          às voltas com perversidades e jogos de poder; uma senhora humilhada
          planeja vingança; uma jovem é esmagada pela beleza. Há também alguns
          homens engolidos por seus desejos.
        </p>
        </div>
      </div>
      <div id="botao">
        <button>
          <a href="https://trajeseditora.com.br/loja">
            COMPRE AQUI
          </a>
        </button>
      </div>
      <div id="apresentacao">
        <div id="trecho">
          <blockquote>
            <p>
              &#10077;E percebes o engano de achares que era o outro estendido
              sob o corpo da água — que o mar, que tu fizeste, sobre ele mesmo é
              vaga. E se afoga nele, sempre, todo o que incauto nada: vela, proa,
              leme, lume, todo propício aparato; braço e perna e nado é nada.
              &#10078;
            </p>
            <footer>Manual do como manusear</footer>
        </blockquote>
        </div>
        <div id="orelha">
          <p>Em Diabolô, primeiro livro de contos de Nilton Resende, o terrível se arrasta com a languidez de uma velha serpente. Somos expostos, sem defesa, ao momento definitivo: nas crianças que mentem (e moem pó de vidro); nos mulungus que se evolam na imaginação de um menino.
              Somos obrigados àquele curso, o da serpente langorosa, e conduzidos com requinte ao inoculado veneno. 
              Levados, sim, por Resende em seus labirintos, teias de linguagem acurada, em que o simbólico avulta e nada se concede; infância e inocência, no dédalo, perdem-se.
              Personagens, como nós, vencidos pelo oculto, sem Adriadne a indicar o caminho de volta. Quase cegos. Por detrás de portinholas e frestas, o bote é cálculo preciso: da inocência perdida, da infância cindida, nada se recupera. Separamos, fio a fio, os cabelos da Medusa. 
              </p>
              <p>Brisa Paim.</p>
        </div>
        <div id="autor">
          <p>
            Nilton Resende é alagoano de Maceió. É Professor Adjunto de
            Literatura da Universidade Estadual de Alagoas/Campus Zumbi dos
            Palmares, na qual coordena os Grupos de Pesquisa Ensino de
            Literatura (com ênfase no Ensino Médio) e Estudos da Narrativa (com
            ênfase em Narrativas de Ficção). Integra a Cia. Ganymedes de teatro,
            para a qual adaptou a novela Mário e o Mágico, de Thomas Mann, para
            o espetáculo O Mágico, que codirigiu e protagonizou. Publicou os
            livros O Orvalho e os Dias (poesia) e A construção de Lygia Fagundes
            Telles: edição crítica de Antes do Baile Verde. No cinema, tem
            trabalhado como ator, roteirista, preparador e diretor de elenco. O
            curta metragem A Barca (2019), baseado no conto “Natal na barca”,
            de Lygia Fagundes Telles, é seu primeiro filme como roteirista e
            diretor.
          </p>
          <p>
            Com textos produzidos durante o espaço de quinze anos, Diabolô,
            vencedor do Prêmio Lego 2009, na Categoria Contos, foi publicado
            pela primeira vez em 2011, pela Editora da Universidade Federal de
            Alagoas/Edufal. Esgotado há alguns anos, ele é novamente publicado,
            em uma edição revista pelo autor.{" "}
          </p>
          <p>
            Quando do lançamento do livro, o saudoso crítico literário Alfredo
            Monte colocou-o como um dos destaques dentre os lançamentos daquele
            ano:
          </p>
          <p>
            <a href="https://armonte.wordpress.com/2011/12/04/sobre-meninos-e-lobos-a-seducao-dos-contos-de-nilton-resende/">
              SOBRE MENINOS E LOBOS: a sedução dos contos de Nilton Resende
            </a>
          </p>
          <p>
            <a href="https://armonte.wordpress.com/2012/01/05/destaques-de-2011-segunda-e-ultima-parte/">
              DESTAQUES DE 2011
            </a>
          </p>
          <p>
            Dois contos do livro foram traduzidos para línguas estrangeiras e
            publicados em periódicos:
          </p>
          <p>
            {" "}
            “A ceia” — em espanhol no primeiro número da Machado de Assis
            Magazine, editada pela Biblioteca Nacional para divulgar a
            literatura brasileira na Feira de Frankfurt (“La cena”, trad. de
            Pablo Cardellino Soto, 2012); em francês na revista D-Fiction (
            <a href="http://d-fiction.fr/2018/01/le-repas/">“Le repas”</a>,
            trad. de Stéphane Chao, 2018); em inglês na revista Bookanista (
            <a href="http://bookanista.com/supper/">“The supper”</a>, trad. de
            Kim M. Hastings, 2019);
          </p>
          <p>
            “A fresta” — em inglês na
            <a href="https://www.litro.co.uk/"> Litro Magazine</a>, revista
            literária distribuída no metrô londrino (“The crack”, trad. de
            Alison Entrekin, 2012).
          </p>
          <p>
            Na publicação de “A ceia” na Bookanista, foi feita uma entrevista
            com o autor. Ela pode ser lida em
            <a href="http://bookanista.com/nilton-resende/"> inglês</a> ou em{" "}
            <a href="https://trajeslunares.com/2019/02/01/a-damn-boy/">
              português.
            </a>
          </p>
        </div>
      </div>
    
    </PreVenda>
    <img src={elemAstros} alt="Logo trajes" id="logoAstros" />
    <ScrollTop />
  </Container>
)

export default Diabolo
