// Função para fazer uma requisição à API calculate-imc
function calcularIMC() {
    const altura = document.getElementById("altura").value;
    const peso = document.getElementById("peso").value;

    if (altura == "" || altura == null || peso == "" || peso == null) {
        alert("Por favor, verifique se você digitou os valores de altura e peso corretamente.");
    } else {

        const data = {
            height: altura,
            weight: peso
        }
    
        const url = "https://calculate-imc-api-git-main-gabrielle-1.vercel.app/calculate";
    
        $.ajax({
            url: url,
            type: "POST",        
            data: data,
            success: function(data) {
                if (data.interpretation != null && data.interpretation != "") {
                    const interpretation = data.interpretation;
                    
                    const popup = document.querySelector('.popup-content');
                    const informationIMC = `
                        <h1>${interpretation.status}</h1>                                   
                        <p>${interpretation.message}</p>
                        <button class="close-button" onclick="closePopup()">Fechar</button>
                    `;
                    popup.innerHTML = informationIMC;                
                    openPopup();               
                }
            },
            error: function(xhr, status, error) {
                alert("Ocorreu um erro ao calcular o seu IMC. Tente novamente mais tarde ou entre em contato!");
                console.log(error);
            }
        });
        
    }

}

function openPopup() {
    var popupOverlay = document.getElementById("popupOverlay");
    popupOverlay.style.display = "flex";
}

function closePopup() {
    var popupOverlay = document.getElementById("popupOverlay");
    popupOverlay.style.display = "none";
}