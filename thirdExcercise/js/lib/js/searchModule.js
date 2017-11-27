var searchModule = (() => {
    return{
        buildCategories: function(array, container, callback){
            $.each(array, (indice, elemento) => {
                var _li = uiModule.li();
                var _checkBox = uiModule.checkbox();
                var _label = uiModule.label();

                $(_checkBox).addClass("vertical-middle").attr({
                    "data-category": elemento,
                    id: "checkbox"+indice
                });
                $(_label).html(elemento).addClass("p5w").attr({
                    for: "checkbox"+indice
                });
                $(_li).addClass("p5h");

                $(_checkBox).appendTo($(_li));
                $(_label).appendTo($(_li));
                $(_li).appendTo($(container));

                $(_checkBox).on("click", function(){
                    callback($(this));
                });
            })
        }
    }
})();