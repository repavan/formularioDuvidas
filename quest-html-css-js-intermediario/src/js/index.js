const campoInput = document.querySelectorAll(".campo");
const campoObrigatorio = document.querySelectorAll(".campo-nao-preenchido")
const botaoEnviar = document.querySelector("#enviar")

campoInput.forEach((campo, indice) => {
    campo.addEventListener('change', () => {
        if(campo.value.trim() === ''){
            campo.classList.add("ativo");
            campoObrigatorio[indice].classList.add("ativo");
            campo.classList.remove("campo-preenchido");
        }else{
            campo.classList.add("campo-preenchido");
            campo.classList.add("letra");
            campoObrigatorio[indice].classList.remove("ativo");
        }
    })
})

botaoEnviar.addEventListener('click', (e) => {
    
    e.preventDefault()

    campoInput.forEach((campo, indice)=>{
        if(campo.value.trim() === ''){
            campo.classList.add("ativo");
            campoObrigatorio[indice].classList.add("ativo");
        }
    })
})