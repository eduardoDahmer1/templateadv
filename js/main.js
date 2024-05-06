(function ($) {
    "use strict";
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 90) {
            $('.nav-bar').addClass('nav-sticky');
            $('.carousel, .page-header').css("margin-top", "73px");
        } else {
            $('.nav-bar').removeClass('nav-sticky');
            $('.carousel, .page-header').css("margin-top", "0");
        }
    });
    
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });


    // Testimonials carousel
    $(".testimonials-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
    
    // Blogs carousel
    $(".blog-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
    
    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);

const keywords = [
    "advogado",
    "advocacia",
    "direito",
    "jurídico",
    "imposto de renda",
    "restituição",
    "isenção",
    "contribuinte",
    "tributação",
    "declaração de imposto de renda",
    "consultoria jurídica",
    "assessoria jurídica",
    "planejamento tributário",
    "defesa tributária",
    "processo tributário",
    "direito tributário",
    "lei tributária",
    "contencioso tributário",
    "imposto sobre a renda",
    "receita federal",
    "lei de isenção fiscal",
    "patologias isentas de imposto de renda",
    "benefícios fiscais",
    "tributação de aposentados",
    "imposto sobre aposentadoria",
    "aposentados",
    "pensionistas",
    "militares reformados",
    "lei 7.713/88",
    "doenças graves",
    "inclusão de patologias elegíveis",
    "portadores de patologias",
    "deficiência física",
    "deficiência mental",
    "câncer",
    "AIDS",
    "Parkinson",
    "doença de Alzheimer",
    "epilepsia",
    "paralisia irreversível e incapacitante",
    "espondiloartrose anquilosante",
    "tuberculose ativa",
    "hanseníase",
    "fibrose cística",
    "cegueira",
    "surdez",
    "neoplasia maligna",
    "cardiopatia grave",
    "doença de Paget em estados avançados",
    "contaminação por radiação",
    "síndrome da deficiência imunológica adquirida",
    "lei de isenção de imposto de renda",
    "advogado especializado em imposto de renda",
    "advogado tributarista",
    "consultoria tributária",
    "economia tributária",
    "advocacia previdenciária",
    "planejamento previdenciário",
    "direito previdenciário",
    "revisão de benefícios previdenciários",
    "aposentadoria",
    "seguro social",
    "previdência social",
    "aposentadoria por invalidez",
    "aposentadoria especial",
    "aposentadoria por tempo de contribuição",
    "contribuição previdenciária",
    "aposentadoria rural",
    "aposentadoria urbana",
    "cálculo de aposentadoria",
    "revisão de aposentadoria",
    "recurso administrativo previdenciário",
    "INSS",
    "benefícios do INSS",
    "serviços previdenciários",
    "agendamento INSS",
    "consulta INSS",
    "previdência privada",
    "plano de previdência",
    "reforma da previdência",
    "advogado de direito previdenciário",
    "advogado especializado em previdência social",
    "advogado do INSS",
    "recurso de aposentadoria",
    "consultoria previdenciária",
    "aposentadoria por idade",
    "aposentadoria por tempo de serviço",
    "aposentadoria por idade rural",
    "aposentadoria por tempo de serviço urbano",
    "aposentadoria por idade urbana",
    "benefícios previdenciários",
    "auxílio-doença",
    "auxílio-acidente",
    "auxílio-reclusão",
    "pensão por morte",
    "salário-maternidade",
    "salário-família",
    "reabilitação profissional",
    "aposentadoria por invalidez por acidente de trabalho",
    "aposentadoria por tempo de serviço especial",
    "aposentadoria por tempo de contribuição especial",
    "aposentadoria especial urbana",
    "aposentadoria especial rural",
    "revisão de aposentadoria por tempo de serviço",
    "revisão de aposentadoria por idade",
    "revisão de aposentadoria por tempo de contribuição",
    "revisão de aposentadoria especial",
    "revisão de aposentadoria rural",
    "revisão de aposentadoria urbana",
    "revisão de benefício previdenciário",
    "recurso administrativo de aposentadoria",
    "recurso administrativo de benefício previdenciário",
    "advogado de revisão de aposentadoria",
    "advogado de revisão de benefício previdenciário",
    "advogado especializado em revisão de aposentadoria",
    "advogado especializado em revisão de benefício previdenciário",
    "advogado de recurso administrativo de aposentadoria",
    "advogado de recurso administrativo de benefício previdenciário",
    "consultoria em revisão de aposentadoria",
    "consultoria em revisão de benefício previdenciário",
    "revisão de aposentadoria por invalidez",
    "revisão de aposentadoria por acidente de trabalho",
    "revisão de aposentadoria por tempo de serviço especial",
    "revisão de aposentadoria por tempo de contribuição especial",
    "revisão de aposentadoria especial urbana",
    "revisão de aposentadoria especial rural",
    "aposentadoria rural por idade",
    "aposentadoria rural por tempo de serviço",
    "aposentadoria rural por idade e tempo de serviço",
    "aposentadoria especial por tempo de serviço",
    "aposentadoria especial por idade",
    "aposentadoria especial por idade e tempo de serviço",
    "advogado especializado em aposentadoria rural",
    "advogado especializado em aposentadoria especial",
    "consultoria em aposentadoria rural",
    "consultoria em aposentadoria especial",
    "aposentadoria por tempo de serviço por idade",
    "aposentadoria por tempo de contribuição por idade",
    "aposentadoria por tempo de serviço por idade e tempo de contribuição",
    "aposentadoria por tempo de serviço urbano por idade",
    "aposentadoria por tempo de contribuição urbano por idade",
    "aposentadoria por tempo de serviço urbano por idade e tempo de contribuição",
    "advogado especializado em aposentadoria por tempo de serviço por idade",
    "advogado especializado em aposentadoria por tempo de contribuição por idade",
    "advogado especializado em aposentadoria por tempo de serviço urbano por idade",
    "advogado especializado em aposentadoria por tempo de contribuição urbano por idade",
    "consultoria em aposentadoria por tempo de serviço por idade",
    "consultoria em aposentadoria por tempo de contribuição por idade",
    "consultoria em aposentadoria por tempo de serviço urbano por idade",
    "consultoria em aposentadoria por tempo de contribuição urbano por idade",
    "aposentadoria por tempo de serviço por idade e tempo de contribuição por idade",
    "aposentadoria por tempo de serviço urbano por idade e tempo de contribuição urbano por idade",
    "advogado especializado em aposentadoria por tempo de serviço por idade e tempo de contribuição por idade",
    "advogado especializado em aposentadoria por tempo de serviço urbano por idade e tempo de contribuição urbano por idade",
    "consultoria em aposentadoria por tempo de serviço por idade e tempo de contribuição por idade",
    "consultoria em aposentadoria por tempo de serviço urbano por idade e tempo de contribuição urbano por idade"
];

const metaKeywords = document.createElement('meta');
metaKeywords.name = 'keywords';
metaKeywords.content = keywords.join(', ');

document.head.appendChild(metaKeywords);