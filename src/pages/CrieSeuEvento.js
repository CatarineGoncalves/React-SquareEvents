import React from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';



function App() {
    return (

        <div className="App">

            <main class="main-crieseuevento">


                <div class="formulario div-um">
                    <img src="./img/panel (1).png" class="squareevents" alt="imagem de uma placa de madeira que é o simbolo da pagina" />
                    <h1 class="registro">Crie seu Evento</h1>


                    <div class="father-div">

                        <div class="textinput-crieseuevento">


                            <div class="">
                                <p class="titulo-nome1">Nome do Evento: </p>
                                <form class="form-botao" action="#">
                                    <input type="text" class="botao-um" />
                                </form>
                            </div>

                            <div class="datetime-crieseuevento">

                                <p class="titulo-nome4">Data</p>

                                <form class="form-data" action="#">
                                    <input type="date" />
                                </form>

                                <p class="titulo-nome4">Hora</p>

                                <select name="hora-crieseuevento">
                                    <option value="setehoras">19h</option>
                                    <option value="oitohoras">20h</option>
                                </select>

                            </div>

                            <p class="titulo-nome2">Nome do Responsavel da Comunidade: </p>
                            <form class="form-botao" action="#">
                                <input type="text" class="botao-um" />
                            </form>

                            <p class="titulo-nome3">Nome da Comunidade </p>
                            <form class="form-botao" action="#">
                                <input type="text" class="botao-um" />
                            </form>

                            <p class="titulo-nome5">Contato </p>
                            <form class="form-botao" action="#">
                                <input type="number" class="botao-um" />
                            </form>

                        </div>

                        <h2 class="registro">Detalhes do Evento</h2>

                        <div class="formulario div-três">

                            <div class="salas-eventos">
                                <p class="titulo-nome5">Salas: </p>

                                <form class="form-botao" action="#">
                                    <input type="number" class="botao-um" />
                                </form>
                            </div>

                            <div class="botoes-evento">
                                <p class="titulo-nome6">Interprete de libras? </p>

                                <div id="app-cover">
                                    <div class="row">
                                        <div class="toggle-button-cover">
                                            <div class="button-cover">
                                                <div class="button r" id="button-1">
                                                    <input type="checkbox" class="checkbox" />
                                                    <div class="knobs" />
                                                    <div class="layer" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <p class="titulo-nome7">Alimentação </p>

                            <div id="app-cover">
                                <div class="row">
                                    <div class="toggle-button-cover">
                                        <div class="button-cover">
                                            <div class="button r" id="button-1">
                                                <input type="checkbox" class="checkbox" />
                                                <div class="knobs" />
                                                <div class="layer" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <p class="titulo-nome9">Alguma restrição de Alimentação? </p>
                                <form class="form-botao" action="#">
                                    <input type="text" class="botao-um" placeholder="Comida Vegetariana? Sem Glúten? " />
                                </form>



                                <p class="titulo-nome10">Equipamentos </p>
                                <form class="form-botao" action="#">
                                    <input type="text" class="botao-um" placeholder="Microne? DataShow?" />
                                </form>

                                <p class="titulo-nome11">Faça um breve descrição sobre seu evento</p>
                                <form class="form-botao" action="#">
                                    <textarea rows="20" name="comment[text]" id="comment_text" cols="40" class="ui-autocomplete-input" autocomplete="off" role="textbox" aria-autocomplete="list" aria-haspopup="true" />
                                </form>
                            </div>
                        </div>

                        <div class="botao4">
                            <input class="botao-um" type="text" />
                        </div>

                    </div>



                </div>



            <div class="poligono-evento">

            </div>

            <div class="div-tres">
                <img src="./img/Reflections on the March _ Libby VanderPloeg - Não Me Mande Flores.jfif" class="banner-1" alt="" />
            </div>
</main>
        
        
        
        
        
        
        
        </div >

        )

}