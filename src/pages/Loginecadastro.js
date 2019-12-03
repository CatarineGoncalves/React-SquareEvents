import React from 'react';
import '../assets/css/login.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

function App() {
    return (
    <div>
      <div class="container">
        <div class="content first-content">
            <div class="first-column">
                    <h2 class="title title-primary">Bem vindo!</h2>
                    <p class="description description-primary">Para participar da nossa comunidade</p>
                    <p class="description description-primary">faça teu login aqui</p>
                    <button id="signin" class="btn btn-primary">Login</button>
            </div>   

            <div class="second-column">
                <h2 class="title title-second">Se cadastre</h2>
                
                <p class="description description-second">e faça teu evento gratuito conosco!</p>
                <form class="form">
                    <label class="label-input" for="">
                        <i class="far fa-user icon-modify"/>
                        <input type="text" placeholder="Nome Completo"/>
                    </label>

                    <label class="label-input" for="">
                        <i class="far fa-user icon-modify"/>
                        <input type="text-cmm" placeholder=" Nome da Comunidade"/>
                    </label>
                    
                    <label class="label-input" for="">
                        <i class="far fa-envelope icon-modify"/>
                        <input type="email" placeholder="Email"/>
                    </label>
                    
                    <label class="label-input" for="">
                        <i class="fas fa-lock icon-modify"/>
                        <input type="password" placeholder="Senha"/>
                    </label>

                    <label class="label-input" for="">
                        <i class="fas fa-lock icon-modify"/>
                        <input type="password" placeholder="Confirme sua senha"/>
                    </label>
                    
                    
                    <button class="btn btn-second">sign up</button>        
                </form>
            </div>
        </div>

        <div class="content second-content">
            <div class="first-column">
                <h2 class="title title-primary">Olá, seja bem vindo de volta</h2>
                <p class="description description-primary">Para participar da nossa comunidade
                    se cadastre aqui</p>
                <p class="description description-primary"> </p>
                <button id="signup" class="btn btn-primary">Cadastro</button>
            </div>
            <div class="second-column">
                <h2 class="title title-second">Faça seu login aqui</h2>
               
                <p class="description description-second">Não possui cadastro? Faça aqui agora</p>
                <form class="form">
                
                    <label class="label-input" for="">
                        <i class="far fa-envelope icon-modify"/>
                        <input type="email" placeholder="Email"/>
                    </label>
                
                    <label class="label-input" for="">
                        <i class="fas fa-lock icon-modify"/>
                        <input type="senha" placeholder="Senha"/>
                    </label>
                
                    <a class="password" href="#">Esqueceu sua senha?</a>
                    <button class="btn btn-second">Login</button>
                </form>
            </div>
        </div>>
    </div>
    <script src="js/app.js"></script>
    </div>
    )
}
