
/*Código para dar estilo ao botão da nav da página ativa*/
$('document').ready( function(){
    var url = window.location.href;

    switch(url){ 
        case "file:///C:/Users/JULIO/Desktop/portfolio/portfolio.html": 
            $('ul li:eq(0) a').addClass('active');  
            break;
        case "file:///C:/Users/JULIO/Desktop/portfolio/projetos.html":
            $('ul li:eq(1) a').addClass('active');  
            break;
        case "file:///C:/Users/JULIO/Desktop/portfolio/sobre.html":
            $('ul li:eq(2) a').addClass('active');


    }

});

