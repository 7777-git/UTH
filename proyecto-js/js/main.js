$(document).ready(function () {

    // Slider

    if (window.location.href.indexOf('index') > -1) { //se ejecuta si esta en la página index 

        $('.galeria').bxSlider({ // método bxSlider
            mode: 'fade',  //tipo de animación entre una foto y otra
            captions: true,
            slideWidth: 1200, //tamaño del slide
            responsive: true
        });
    }
    //Posts
    if (window.location.href.indexOf('index') > -1) {
        var posts = [
            {
                title: 'Prueba de título 1',
                date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),       //moment().format("MMMM Do YYYY"), el método moment nos muestra mes,dia y año
                content: 'En el mundo que nos toca vivir es díficil saber aceptar las críticas por parte de nuestro entorno, lo cual nos lleva a aislarnos en un regocijo de emociones por las que tenemos que seguir qaprendiendo. Es importante no creer que todo está aprendido y esforzarse día a día por mejorar y nunca, nunca, darse por vencido'


            },
            {
                title: 'Prueba de título 2',
                date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: 'En el mundo que nos toca vivir es díficil saber aceptar las críticas por parte de nuestro entorno, lo cual nos lleva a aislarnos en un regocijo de emociones por las que tenemos que seguir qaprendiendo. Es importante no creer que todo está aprendido y esforzarse día a día por mejorar y nunca, nunca, darse por vencido'

            },
            {
                title: 'Prueba de título 3',
                date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: 'En el mundo que nos toca vivir es díficil saber aceptar las críticas por parte de nuestro entorno, lo cual nos lleva a aislarnos en un regocijo de emociones por las que tenemos que seguir qaprendiendo. Es importante no creer que todo está aprendido y esforzarse día a día por mejorar y nunca, nunca, darse por vencido'
            },
            {
                title: 'Prueba de título 4',
                date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: 'En el mundo que nos toca vivir es díficil saber aceptar las críticas por parte de nuestro entorno, lo cual nos lleva a aislarnos en un regocijo de emociones por las que tenemos que seguir qaprendiendo. Es importante no creer que todo está aprendido y esforzarse día a día por mejorar y nunca, nunca, darse por vencido'
            },
            {
                title: 'Prueba de título 5',
                date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: 'En el mundo que nos toca vivir es díficil saber aceptar las críticas por parte de nuestro entorno, lo cual nos lleva a aislarnos en un regocijo de emociones por las que tenemos que seguir qaprendiendo. Es importante no creer que todo está aprendido y esforzarse día a día por mejorar y nunca, nunca, darse por vencido'
            },
            {
                title: 'Prueba de título 6',
                date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: 'En el mundo que nos toca vivir es díficil saber aceptar las críticas por parte de nuestro entorno, lo cual nos lleva a aislarnos en un regocijo de emociones por las que tenemos que seguir qaprendiendo. Es importante no creer que todo está aprendido y esforzarse día a día por mejorar y nunca, nunca, darse por vencido'
            },

        ];

        posts.forEach((item, index) => {
            var post = `
          <article class="post">
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>
                    ${item.content}
                    </p> 
          </p>
          <a href="#" class="button-more">Leer más</a>
           </article >
          `;


            $("#posts").append(post);

        });
    }
    /*
        <article class="post">
                        <h2>Prueba de artículo</h2>
                        <span class="date">Fecha de publicación</span>
                        <p>En el mundo que nos toca vivir es díficil saber aceptar las críticas por parte de nuestro entorno, lo cual nos lleva a aislarnos en un regocijo de emociones por las que tenemos que seguir qaprendiendo. Es importante no creer que todo está aprendido y esforzarse día a día por mejorar y nunca, nunca, darse por vencido
                        </p>
                        <a href="#" class="button-more">Leer más</a>
                    </article>
                    */

    // SELECTOR DE TEMA

    var theme = $("#theme");

    $("#to-green").click(function () {
        theme.attr("href", "css/green.css");
    });
    $("#to-red").click(function () {
        theme.attr("href", "css/red.css");
    });

    $("#to-blue").click(function () {
        theme.attr("href", "css/blue.css");
    });


    // SCROLL ARRIBA  DE LA WEB

    $('.subir').click(function (e) {
        e.preventDefault(); //para que el link no haga su función principal

        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    //LOGIN FALSO

    $("#login form").submit(function () {
        var form_name = $("#form_name").val();

        localStorage.setItem("form_name", form_name);
    });

    var form_name = localStorage.getItem("form_name");

    if (form_name != null && form_name != "undefined") {
        var about_parrafo = $("#about p");

        about_parrafo.html("<br><strong>Bienvenido, " + form_name + "</strong> ");
        about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>");

        $("#login").hide();

        $("#logout").click(function () {
            localStorage.clear();
            location.reload();

        });
    }

    //ACORDEÓN

    if (window.location.href.indexOf('about') > -1) { //si existe en la url la palabra about
        $("#acordeon").accordion();
    }


    //RELOJ

    if (window.location.href.indexOf('reloj') > -1) {

        setInterval(function () {  //se ejecuta cada segundo
            var reloj = moment().format("hh:mm:ss");
            $("#reloj").html(reloj);
        }, 1000);
    }

    //VALIDACIÓN

    if (window.location.href.indexOf('contact') > -1){

        $("form input[name='date']").datepicker({
            dateFormat: 'dd-mm-yy'
        });

        $.validate({
            lang: 'es',
            errorMessagePosition: 'top',
            scrollToTopOnError: true
        });
    }
});