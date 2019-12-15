(function(window) {
    'use strict';
    let App = window.App || {};
    let $ = window.jQuery;

    function CheckList(selector){
        if (!selector){
            throw new Error('No se proporciono selector. ');
        }
        this.$element = $(selector);
        if (this.$element.length === 0) {
            throw new Error('No se encontro un elemento con el el selector ' + selector);
        }
    }

    CheckList.prototype.addRow =function (coffeeOrder)  {
     //Crea una nueva instancia de Row usando el 
     // parametro coffeerun
        let rowElement = new Row(coffeeOrder);
    // Agrega la propiedad $element de la nueva
    // instancia de Row al checklist
        this.$element.append(rowElement.$element);
    }
   



    function Row(coffeeOrder){
        let $div = $('<div></div>', {
            'data-coffee-order': 'checkbox',
            'class': 'checkbox'
        });
        let $label = $('<label></label>');
        let $checkbox = $('<input></input>',{
            type: 'checkbox',
            value: coffeeOrder.emailAddress
        });
    
    let description = coffeeOrder.size + '';
    if (coffeeOrder.flavor){
        description += coffeeOrder.flavor + '';
    }
    description += coffeeOrder.coffee + ', ';
    description += '(' + coffeeOrder.emailAddress + ')';
    description += '[' + coffeeOrder.strength + 'x]';
    
    $label.append($checkbox);
    $label.append(description);
    $div.append($label);
    this.$element = $div;
}

    App.CheckList = CheckList;
    window.App = App;

})(window);