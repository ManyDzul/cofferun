(function(window) {
    'use strict';
    
    let App = window.App || {};
    let $ = window.jQuery;

    function FormHandler(selector) {
            if(!selector){
                throw new Error('No se proporcionó selector');
            }
            this.$formElement = $(selector);
            if(this.$formElement.length === 0){
                throw new Error ('No se encontró un elemento con el selector' + selector);
            }
        }   

        FormHandler.prototype.addSubmitHandler = function(fn) {
            console.log('Estableciendo el manejador de envio para el formulario');
            this.$formElement.on('submit', function (event){
                event.preventDefault();
                //let data = $(this).serializeArray();
                $(this).serializeArray().forEach(function(item){
                    data[item.name] = item.value;
                    console.log(item.name + ' is ' + item.value);
                });
                console.log(data);
                fn(data);
                this.reset();
                this.elements[0].focus();
        });
        }
    

    App.FormHandler = FormHandler;
    window.App = App;

})(window);