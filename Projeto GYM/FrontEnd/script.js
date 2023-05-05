        // const exercicios = document.querySelectorAll(".exercicio");
        // exercicios.forEach( (exercicio) =>{
        //     exercicio.style.display = "none";
        // });

        const exercicios = document.querySelectorAll(".home");
        exercicios.forEach( (exercicio) =>{
            exercicio.style.display = "none";
        });

       const exibirExercicio = ( (exercicio) => {
           const exercicios = document.querySelectorAll(".exercicio");
           exercicios.forEach( (exercicio) =>{
               exercicio.style.display = "none";
           });          
           const exercicioSelecionado = document.querySelector(".exercicio_" + exercicio);
           exercicioSelecionado.style.display = "flex";
       });

       exibirExercicio('triceps');
