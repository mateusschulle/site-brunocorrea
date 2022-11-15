let botao = document.querySelector('.botao__menu');
botao.onclick = exibeMenu;

let verificador = true;

function exibeMenu() {
    if (verificador) {
        document.querySelector('.navegacao__lista').style.cssText ='display: flex;';
        verificador = false;
    } else {
        document.querySelector('.navegacao__lista').style.cssText ='display: none;';
        verificador = true;
    }
}