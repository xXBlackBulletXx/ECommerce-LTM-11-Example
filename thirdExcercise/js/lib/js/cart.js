var cartModule = (() => {
    var cart = {
        total: 0,
        elements: {}
    };

    function generateList(domObj){
        $(domObj).empty();
        $.each(cart.elements, (key, value) => {
            var _divLeft = uiModule.createTag("div", {
                class: "col-1 p10h p5w text-center align-self-center"
            });
            var _divCenter = uiModule.createTag("div", {
                class: "col-10 contenutoListCart p10h p5w"
            });
            var _divRight = uiModule.createTag("div", {
                class: "col-1 align-self-center p5w"
            });

            var _li = uiModule.createTag("li", {
                class:"p5h p20w row"
            });

            var _minusBtn = uiModule.iconAwesome("minus-circle", "2x");
            $(_minusBtn).attr({
                "data-id": value.id,
            })
            .addClass("vertical-middle rmBtn text-red m5w");

            var _plusBtn = uiModule.iconAwesome("plus-circle", "2x");
            $(_plusBtn).attr({
                "data-id": value.id,
                "name": value.name,
                "price": value.price,
                "quantity": value.quantity
            })
            .addClass("vertical-middle addBtn text-primary m5w none");

            var _quantity = uiModule.createTag("span", {
                class: "quantity bolder inline-block",
            });
            $(_quantity).html("x"+value.quantity);
            var _label = uiModule.createTag("span", {
                class: "quantity",
            });
            $(_label).html(" "+value.name);

            $(_divLeft).append(_quantity);
            $(_divCenter).append(_label);
            $(_divRight).append(_minusBtn, _plusBtn);

            $(_li).append(_divLeft, _divCenter, _divRight);
            $(domObj).append(_li);
        })
        var _liTotal = uiModule.createTag("li", {

        });
        $(_liTotal)
        .addClass("bolder Totale p20w p20h")
        .html("Totale: <span class='prezzo float-right'>€ "+cart.total+"</span>");
        $(domObj).append(_liTotal);
    }

    return{
        addElToCart: (element) => {
            cart.elements[element.id] = cart.elements[element.id] || {
                id: element.id,
                name: element.name,
                price: element.price,
                quantity: 0
            }
            cart.elements[element.id].quantity += 1;
            cart.total = parseFloat(parseFloat(cart.total) + parseFloat(element.price)).toFixed(2);
            sessionStorage.setItem("cart", JSON.stringify(cart));
        },
        rmElFromCart: (element) => {
            cart.elements[element.id].quantity -= 1;
            cart.total = parseFloat(parseFloat(cart.total) - parseFloat(cart.elements[element.id].price)).toFixed(2);            
            if(cart.elements[element.id].quantity == 0){
                delete cart.elements[element.id];
            }
            sessionStorage.setItem("cart", JSON.stringify(cart));
        },
        getElements: () => {
            return cart.elements;
        },
        getTotal: () => {
            return cart.total;
        },
        printCart: () => {
            console.log(cart);
        },
        getList: (obj) => {
            generateList(obj);
        }
    }
})()