var utilModule = (() => {
    var products_path = "https://api.myjson.com/bins/zl0vj";    
    var categories = [
        "Abbigliamento",
        "Alimentari e cura della casa",
        "Auto e Moto",
        "Bellezza",
        "Cancelleria e prodotti per ufficio",
        "Casa e cucina",
        "Cellulari e Accessori",
        "Commercio, Industria e Scienza",
        "Cura della persona",
        "Dispositivi Amazon",
        "Elettronica",
        "Fai da te",
        "Film e TV",
        "Giardino e giardinaggio",
        "Giochi e giocattoli",
        "Gioielli",
        "Illuminazione",
        "Informatica",
        "Kindle Store",
        "Libri",
        "Musica",
        "Orologi",
        "Prima infanzia",
        "Prodotti per animali",
        "Scarpe e Borse",
        "Software",
        "Sport e tempo libero",
        "Strumenti musicali e DJ",
        "Valigeria",
        "Videogiochi",
        "Altro"
    ];

    function getSingleProduct(resp){
        $.each(resp, (indice, el) => {
            var _article = uiModule.article();
            $(_article)
            .addClass("col-sm-4 p20h p20w text-center all-linear")
            .css({
                opacity: 0
            })
            .attr({
                id: el.id
            });

            var _image = uiModule.img();
            $(_image)
            .addClass("col-sm-8")
            .attr({
                src: el.picture
            })

            var _title = uiModule.h4();
            $(_title).html(el.title).addClass("text-center text-grey-darken-2");

            var _price = uiModule.h2();
            $(_price).html("€ " + parseFloat(el.price).toFixed(2)).addClass("text-center text-primary bolder");

            var _button = uiModule.createTag("button", {
                value: "Acquista",
                "data-name": el.title,
                "data-id": el.id,
                "data-price": el.price
            });
            $(_button)
            .html("Acquista <i class='material-icons all-linear vertical-middle'>keyboard_arrow_right</i>")
            .addClass("acquista border-radius-google accent text-primary all-linear p15w p15h");

            setTimeout(() => {
                $(_article).css({
                    opacity: 1
                })
            }, configModule.getTransitionTime())
            $(_article).append(_image, _title, _price, _button);
            $(_article).appendTo($(".products"));

            $(_button).on("click", function(){
                cartModule.addElToCart({
                    "id": $(this).attr("data-id"),
                    "name": $(this).attr("data-name"),
                    "price": $(this).attr("data-price"),
                    "quantity": 1
                });
                cartModule.getList($(".productList"));
            })
        });
    }

    function getProducts(){
        ajaxModule.get({
            url: products_path,
            callback: (response) => {
                getSingleProduct(response.products);
            }
        })
    }

    return {
        init: () => {
            searchModule.buildCategories(categories, $("#categories"), function(element){
                var category = $(element).attr("data-category");
            });
            getProducts();
        }
    }
})();