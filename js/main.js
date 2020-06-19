$(function(){


    $(window).scroll(function () { 
        // obtenemos la posicion del scroll que queremos que cambie el navbar
        let posicion=$(this).scrollTop();
        // console.log(posicion);
        
        if (posicion>=200) {
            $('.navbar-menu').addClass('cambio-navbar');
        }
        
        else{
            $('.navbar-menu').removeClass('cambio-navbar');
        }
        
    });
    // cambio del menu hamburguesa
    $('.navbar-toggler').click(function () { 
        $('.navbar-toggler').toggleClass('cambio');
        $('.navbar-menu').toggleClass('cambio-navbar2');
        
        
    });

    $('#menu-nav .navbar-nav a').click(function(){

        
        // contraemos el menu
        $('#menu-nav .navbar-collapse').removeClass('show');
        $('.navbar-toggler').toggleClass('cambio');

    });

    // estilo para la navegacion cuando se hace scroll
    

    // pondremos las animaciones cuando el scroll se salga de la section
    $(window).scroll(function () { 
        let posicion= $(this).scrollTop();
        // añadimos las clases cuando el scroll este en el punto 550 de la pagina
        if(posicion>=550){
            $('.texto-mision').addClass('llegadaIzq');
            $('.mision-img').addClass('llegadaDer');
        }
        else{
            $('.texto-mision').removeClass('llegadaIzq');
            $('.mision-img').removeClass('llegadaDer');
        }
    });


    // Seccion galeria filtramos las imagenes
    $('.galeria-list-item').click(function () { 
        // obtenemos el click hecho a la clase
        let valor= $(this).attr('data-filter');
        if( valor=== 'todo'){
            // si pilla todo entonces mostrara los que solo tienen la clase filter
            $('.filter').show(300);
        }
        else{
            // muestra solo las img que tienen solo filter
            $('.filter').not('.' + valor).hide(300);
            // muestra el resto
            $('.filter').filter('.' + valor).show(300);

        }
    });
    // cuando le de click a uno se activara y las hermanas se eliminaran siblings
    $('.galeria-list-item').click(function () { 
        $(this).addClass('item-activo').siblings().removeClass('item-activo');
        
    });
    
    // Seccion de precios , insertando animacion
    $(window).scroll(function () { 
        let posicion=$(this).scrollTop();
        
        if (posicion>=4050) {
            $('.card-1').addClass('llegadaIzqCard');
            $('.card-2').addClass('llegadaAbajCard');
            $('.card-3').addClass('llegadaDerCard');
        }
        else{
            $('.card-1').removeClass('llegadaIzqCard');
            $('.card-2').removeClass('llegadaAbajCard');
            $('.card-3').removeClass('llegadaDerCard');
        }
    });



    $('#mimenu a').mPageScroll2id({
        offset:57,
        highlightClass: "active"
    })


    

    


});
