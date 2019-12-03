
import React, { Component } from 'react';
import '../assets/css/Dashboard.css';
import NavbarAdm from "../componentes/NavbarAdm";
import SlidebarAdm from '../componentes/SlidebarAdm';

import logoarte from '../assets/img/logoarte.png'



class Administrador extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (

            <div>

                <NavbarAdm />

                <SlidebarAdm />

                <div class="main-content">
                <main id="home-section-destaque">
                    <div class="home-box-texto-destaque">
                    <p class="home-texto-destaque">
                    Eventos em destaque
                    </p>
                    <hr class="home-destaque-hr"/>
                    </div>

                        <div id="home-section-carrosel hidden">
                {/* <!-- ========== código do carrousel  --> */}
                            <div class="slider">
                                <div class="item img-carrousel">
                                <img class="img-carrousel" src="https://picsum.photos/id/239/550/550" alt=""/>
                                <p> 
                                Meetup: Nerdzão
                                </p>
                                <p>
                                data: 12/12/2019
                                </p>
                                </div>

                                <div class="item">
                                <img class="img-carrousel" src="https://picsum.photos/id/240/550/550" alt=""/>
                                <p>
                                Meetup: Nerdzão
                                </p>
                                <p>
                                data: 12/12/2019
                                </p>
                                </div>

                                <div class="item">
                                <img class="img-carrousel" src="https://picsum.photos/id/241/550/550" alt=""/>
                                <p>
                                Meetup: Nerdzão
                                </p>
                                <p>
                                data: 12/12/2019
                                </p>
                                </div>

                                <div class="item">
                                <img class="img-carrousel" src="https://picsum.photos/id/242/550/550" alt=""/>
                                <p>
                                Meetup: Nerdzão
                                </p>
                                <p>
                                data: 12/12/2019
                                </p>
                                </div>

                                <div class="item">
                                <img class="img-carrousel" src="https://picsum.photos/id/243/550/550" alt=""/>
                                <p>
                                Meetup: Nerdzão
                                </p>
                                <p>
                                data: 12/12/2019
                                </p>
                                </div>

                                <div class="item">
                                <img class="img-carrousel" src="https://picsum.photos/id/250/550/550" alt=""/>
                                <p>
                                Meetup: Nerdzão
                                </p>
                                <p>
                                data: 12/12/2019
                                </p>
                                </div>

                                <div class="item">
                                <img class="img-carrousel" src="https://picsum.photos/id/252/550/550" alt=""/>
                                <p>
                                Meetup: Nerdzão
                                </p>
                                <p>
                                data: 12/12/2019
                                </p>
                                </div>

                                <div class="item">
                                <img class="img-carrousel" src="https://picsum.photos/id/255/550/550" alt=""/>
                                <p>
                                Meetup: Nerdzão
                                </p>
                                <p>
                                data: 12/12/2019
                                </p>
                                </div>

                                <div class="item ">
                                    <img class="img-carrousel" src="https://picsum.photos/id/247/550/550" alt=""/>
                                <p>
                                Meetup: Nerdzão
                                </p>
                                <p>
                                    data: 12/12/2019
                                </p>
                                </div>

                            </div>
                {/* <!-- ========== código do carrousel  --> */}
                        </div>
                </main>
                </div>
            </div>
        );
    }
}

export default Administrador;