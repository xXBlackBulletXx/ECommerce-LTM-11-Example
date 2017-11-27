var configModule = (() => {
    var sliderToggleOptions;
    var _initSlider;
    var _initNavbar;
    var overlayOptions;
    var transitionTime;
    var theme = {
        primary: "blue-grey",
        accent: "pink-accent-2",
        activated: false
    }

    function setEnvironment(){
        if($(document).width() > 575){
            //Opzioni per la funzione di toggle dello slider
            sliderToggleOptions = {
                target: $(".slider"),
                coeff: "40%",
                animationIn: "slideInRight",
                animationOut: "slideOutRight",
                direction: "right"
            }

            //Inizializzatore dello slider        
            _initSlider = {
                target: $(".slider"),
                coeff: "40%",
                direction: "right"
            }
        }else{
            //Opzioni per la funzione di toggle dello slider
            sliderToggleOptions = {
                target: $(".slider"),
                coeff: "85%",
                animationIn: "slideInRight",
                animationOut: "slideOutRight",
                direction: "right"
            }

            //Inizializzatore dello slider        
            _initSlider = {
                target: $(".slider"),
                coeff: "85%",
                direction: "right"
            }
        }

        //Inizializzazione dell'overlay
        overlayOptions = {
            top: 0,
            right: 0,
            height: "100vh",
            width: "100%",
            background: "rgba(0,0,0,.4)"
        }

        //Inizializzatore della navbar        
        _initNavbar = {
            target: $("header")
        }

        //Tempo delle transizioni
        transitionTime = 300;

        sliderWidget.init(configModule.getSliderInit());        
    }

    return{
        getSliderToggleOptions: () => {
            return sliderToggleOptions;
        },
        getSliderInit: () => {
            return _initSlider;
        },
        getTransitionTime: () => {
            return transitionTime;
        },
        getOverlayOptions: () => {
            return overlayOptions;
        },
        getHeaderInit: () => {
            return _initNavbar;
        },
        getTheme: () => {
            return theme;
        },
        init: () => {
            setEnvironment();
            utilModule.init();
        }
    }
})();

$(document).ready(() => {
    configModule.init();

    $(".cart, .fab").on("click", () => {
        sliderWidget.toggle(configModule.getSliderToggleOptions());
    })

    $(document).on("click", ".rmBtn", function(){
        cartModule.rmElFromCart({
            id: $(this).attr("data-id")
        })
        cartModule.getList($(".productList"));
    });

    $(document).on("click", ".addBtn", function(){
        cartModule.addElToCart({
            "id": $(this).attr("data-id"),
            "name": $(this).attr("data-name"),
            "price": $(this).attr("data-price"),
            "quantity": 1
        })
        cartModule.getList($(".productList"));
    });
})