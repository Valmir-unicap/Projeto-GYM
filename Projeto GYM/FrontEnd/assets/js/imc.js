function calcularIMC() {
    const altura = document.getElementById("altura").value;
    const peso = document.getElementById("peso").value;

    const url = "https://calculate-imc-api-git-main-gabrielle-1.vercel.app";

    $.ajax({
        url: url,
        type: "GET",        
        success: function(data) {
            console.log(data);
        },
        error: function(xhr, status, error) {
            console.log(xhr);
            console.log("status" + status);
            console.log(error);
        }
    });
}