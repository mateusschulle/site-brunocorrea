let botao = document.querySelector('.botao__menu');
botao.onclick = exibeMenu;

let verificador = true;

function exibeMenu() {
    if (verificador) {
        document.querySelector('.navegacao__lista').style.cssText ='display: flex;';
        verificador = false;
        document.querySelector('.container__login').style.cssText ='display: none;';
        verificadorLogin = true;
    } else {
        document.querySelector('.navegacao__lista').style.cssText ='display: none;';
        verificador = true;
    }
}

let botaoUsuario = document.querySelector('.botao__usuario');
botaoUsuario.onclick = exibeLogin;

let verificadorLogin = true;

function exibeLogin() {
    if (verificadorLogin) {
        document.querySelector('.container__login').style.cssText ='display: flex;';
        verificadorLogin = false;
        document.querySelector('.navegacao__lista').style.cssText ='display: none;';
        verificador = true;
    } else {
        document.querySelector('.container__login').style.cssText ='display: none;';
        verificadorLogin = true;
        
    }
}
