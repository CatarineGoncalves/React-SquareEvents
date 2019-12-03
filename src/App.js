import React, {Component} from 'react';
import '../src/assets/css/Home.css';

import logo from '../src/assets/img/logo.png';
import banner from '../src/assets/img/banner.jpg';
import logoarte from '../src/assets/img/logoarte.png';
import beneficios1 from '../src/assets/img/beneficios1.png';
import beneficios2 from '../src/assets/img/beneficios2.jpg';
import contador from '../src/assets/img/road-2930115.jpg';
import tickets from '../src/assets/img/tickets.png';
import mapa from '../src/assets/img/mapa.png';
import bandeira from '../src/assets/img/bandeira.png';
import comunidade from '../src/assets/img/comunidade.png';
import mobile from '../src/assets/img/mobile.png';

import Header from './componentes/Header';




class Home extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return(

    <div>

     <Header/>

    {/* <!-- banner --> */}

    <div id="home-banner">

        <img className="home-banner-img" src={banner} alt="banner do site"/>

        <div id="home-banner-transparente">
            <img className="home-logoarte-img" src={logoarte} alt="arte escrita do logo square events"/>
        </div>
    </div>

    {/* <!-- fim do banner -->

    <!-- ==================================== -->

    <!-- destaque --> */}

    <main id="home-section-destaque">
        <div className="home-box-texto-destaque">
            <p className="home-texto-destaque">
                Eventos em destaque
            </p>
            <hr className="home-destaque-hr"/>
        </div>

        <div id="home-section-carrosel">

            {/* <!-- ========== código do carrousel  --> */}

            <div className="slider">
                <div className="item">
                    <img src="https://picsum.photos/id/239/550/550" alt=""/>

                </div>

                <div className="item">
                    <img src="https://picsum.photos/id/240/550/550" alt=""/>

                </div>
                <div className="item">
                    <img src="https://picsum.photos/id/241/550/550" alt=""/>

                </div>
                <div className="item">
                    <img src="https://picsum.photos/id/242/550/550" alt=""/>

                </div>
                <div className="item">
                    <img src="https://picsum.photos/id/243/550/550" alt=""/>
                </div>
                <div className="item">
                    <img src="https://picsum.photos/id/250/550/550" alt=""/>

                </div>
                <div className="item">
                    <img src="https://picsum.photos/id/252/550/550" alt=""/>

                </div>
                <div className="item">
                    <img src="https://picsum.photos/id/255/550/550" alt=""/>

                </div>
                <div className="item">
                    <img src="https://picsum.photos/id/247/550/550" alt=""/>

                </div>


            </div>



            {/* <!-- ========== código do carrousel  --> */}

        </div>
    </main>

    {/* <!-- fim do destaque -->

    <!-- ==================================== -->

    <!-- beneficios --> */}

    <section id="home-section-beneficios">
        <div className="home-box-texto-beneficios">
            <h2 className="home-texto-h2-beneficios">
                lorem
            </h2>

            <hr className="home-beneficios-hr"/>

            <p className="home-texto-p-beneficios">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione expedita dicta asperiores? Tempore velit, quisquam facilis maiores repellat, debitis numquam voluptatibus tenetur sed facere neque praesentium provident, magnam expedita veritatis.
            </p>
        </div>


        <section id="home-section-img1-beneficios">
            <div className="home-box-img1-beneficios">
                <div className="home-caixa-img1-beneficios">
                </div>
                <div className="home-div-img1-transparente">
                    <img className="home-beneficios1-img" src={beneficios1} alt="imagem "/>
                </div>
            </div>

            <div className="home-box-texto-beneficios-img1 animated bounceInDown">
                <p className="home-box-texto-p1-beneficios ">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque fugit laborum suscipit reprehenderit quis. Magnam eaque aut maxime est, excepturi autem non laboriosam veniam veritatis. Nam nobis ipsa repellat maiores?
                </p>

                <button className="btn">
                    <a href=""> Inscreva-se </a>
                </button>
            </div>

        </section>

        {/* <!-- ========================================== --> */}

        <section id="home-section-img2-beneficios">
            <div className="home-box-img2-beneficios">
                <div className="home-caixa-img2-beneficios">
                </div>
                <div className="home-div-img2-transparente">
                    <img className="home-beneficios2-img" src={beneficios2} alt="imagem "/>
                </div>
            </div>

            <div className="home-box-texto-beneficios-img2 animated bounceInLeft">
                <p className="home-box-texto-p2-beneficios">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque fugit laborum suscipit reprehenderit quis. Magnam eaque aut maxime est, excepturi autem non laboriosam veniam veritatis. Nam nobis ipsa repellat maiores?
                </p>

                <button className="btn btn2">
                    <a href=""> Inscreva-se </a>
                </button>

            </div>

        </section>
    </section>


    <section id="home-section-contador">
        <img className="home-contador-img" src={contador} alt="Imagem de uma mulher ao fundo codificando"/>

        <div className="home-section-box-contador">

            <div className="home-contador-numeros">
                <img className="home-contador-icone-img1" src={tickets} alt=""/>
                <img className="home-contador-icone-img2" src={mapa} alt=""/>
                <img className="home-contador-icone-img3" src={bandeira} alt=""/>
                <img className="home-contador-icone-img4" src={comunidade} alt=""/>
            </div>

            <div className="home-contador-descricao">
                <h3 className="home-contador-descricao-h3-1"> 100 - Eventos Submetidos </h3>
                <h3 className="home-contador-descricao-h3-2"> 20 - Eventos Realizados </h3>
                <h3 className="home-contador-descricao-h3-3"> 400 - Comunidades </h3>
                <h3 className="home-contador-descricao-h3-4"> 08 - Categorias </h3>
            </div>


        </div>


    </section>

    <section id="home-section-mobile">
        <div className="home-section-mobile-texto">
            <p className="home-section-mobile-texto-p-button1">
                Acompanhe os
                <button className="buttonMobile1">
                    <a href=""> Eventos</a>
                </button>
            </p>
            <p className="home-section-mobile-texto-p-button2">
                pelo seu
                <button className="buttonMobile2">
                    <a href="">Celular</a>
                </button>
            </p>
        </div>

        <div className="home-section-mobile-box">

            <div>
                <img className="home-section-mobile-img" src={mobile} alt=""/>
            </div>
            <div className="home-section-mobile-box-texto animated bounceInUp">
                <div className="home-section-mobile-box-texto-p">
                    <p className="home-section-mobile-box-p">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam maxime non sit, dicta laudantium obcaecati quas explicabo repudiandae. Enim nesciunt vitae temporibus distinctio soluta molestias, placeat vero atque ad! Unde.
                    </p>

                </div>

                <button className="btn home-section-mobile-button-final">
                    <a href=""> Inscreva-se </a>
                </button>


            </div>
        </div>
    </section>

    </div>
    );
  }
}





export default Home;
