var uiModule = (() => {
    return{
        createTag: (tag, attr) => {
            var _tag = $("<"+tag+"/>")
            .attr(attr);
            return $(_tag);
        },
        iconMaterial: (html) => {
            var _icon = $("<i/>")
                .addClass("material-icons")
                .html(html);
            return $(_icon);
        },
        iconAwesome: (html, size) => {
            var _icon = $("<i/>")
                .addClass("fa fa-"+html + " fa-" + size);
            return $(_icon);
        },
        animation: (nameAnimation, element) => {
            $(element)
            .addClass("animated " + nameAnimation);
            setTimeout(() => {
                $(element).removeClass(nameAnimation);
            }, configModule.getTransitionTime())
        },
        div: (style, classes) => {
            var _div = $("<div/>")
            .css(style)
            .addClass(classes);
            return $(_div);
        },
        acrylic: () => {
            var _acrylic = $("<div/>")
            .addClass("acrylic");
            return $(_acrylic);
        },
        h1: () => {
            var _h1 = $("<h1/>");
            return $(_h1);
        },
        h2: () => {
            var _h2 = $("<h2/>");
            return $(_h2);
        },
        h3: () => {
            var _h3 = $("<h3/>");
            return $(_h3);
        },
        h4: () => {
            var _h4 = $("<h4/>");
            return $(_h4);
        },
        h5: () => {
            var _h5 = $("<h5/>");
            return $(_h5);
        },
        h6: () => {
            var _h6 = $("<h6/>");
            return $(_h6);
        },
        p: () => {
            var _p = $("<p/>");
            return $(_p);
        },
        header: (params) => {
            var _header = $("<header/>")
            .addClass(params.classes);
            return $(_header);
        },
        fab: (html, classes) => {
            var _button = $("<button/>")
            .html(html)
            .addClass("fab " + classes);
            if(configModule.getTheme().activated){
                $(_button).addClass(configModule.getTheme().accent);
            }
            return $(_button);
        },
        span: (value, classes, styles) => {
            var _span = $("<span/>")
            .html(value)
            .addClass(classes)
            .css(styles);
            return $(_span);
        },
        caption: (value) => {
            var _caption = $("<caption/>")
            .html(value);
            return $(_caption);
        },
        table: () => {
            var _table = $("<table/>");
            return $(_table);
        },
        tr: () => {
            var _tr = $("<tr/>");
            return $(_tr);
        },
        td: () => {
            var _td = $("<td/>");
            return $(_td);
        },
        li: () => {
            var _li = $("<li/>");
            return $(_li);
        },
        checkbox: () => {
            var _checkbox = $("<input type='checkbox'/>");
            return $(_checkbox);
        },
        input: () => {
            var _input = $("<input/>");
            return $(_input);
        },
        label: () => {
            var _label = $("<label/>");
            return $(_label);
        },
        img: () => {
            var _img = $("<img/>");
            return $(_img);
        },
        article: () => {
            var _article = $("<article/>");
            return $(_article);
        }
    }
})();