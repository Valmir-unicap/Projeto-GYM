function calcularIMC() {
    const altura = document.getElementById("altura").value;
    const peso = document.getElementById("peso").value;

   // const data = {
    //     "height": "2", 
    //     "weight": "21"
    // };
    
    // let options = {
    //     method: "POST",              
    //     body: data,
    // };

    // const formData = new FormData();
    // formData.append("height", altura);
    // formData.append("weight", peso);

    // const options = {
    //     method: "POST",
    //     body: formData
    // };


    const url = "https://calculate-imc-api-git-main-gabrielle-1.vercel.app/calculate";

    // fetch(url, options)
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.error(error));

    $.ajax({
        url: url,
        method: "POST",
        dataType: "json",
        body: {
            "height": 10,
            "weight": 10
        },
        success: function(response) {
            console.log(response);           
        },
        error: function(error) {
            console.error(error);
            alert("Erro ao buscar CEP");
        }
    });
}