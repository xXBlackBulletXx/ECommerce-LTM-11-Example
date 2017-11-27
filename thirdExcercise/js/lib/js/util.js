var utilModule = (() => {

    /*
        setMaps
        Crea la singola card con la mappa inerente
    */
    function setMaps(snap){
        
        //Get maps
        $.each(snap.val(), (key, value) => {
            var _map = uiModule.h1();
            $(_map).html(key);
            $("body").append($(_map));

            //Get attack and defense
            $.each(value, (key, val) => {
                var _role = uiModule.h3();
                $(_role).html(key);
                $("body").append($(_role));

                //Get Points
                $.each(val, (key, val) => {
                    var _point = uiModule.caption();
                    $(_point).html(key);
                    $("body").append($(_point));
    
                    //Get Compositions
                    $.each(val, (key, val) => {
                        console.log(key, val);

                    })
                })
            })
        })
    }

    return {
        init: () => {
            firebaseModule.init();
            var _resp;
            _resp = firebaseModule.getRef("maps/");
            _resp.once("value").then((snap) => {
                setMaps(snap)
            })
        }
    }
})();