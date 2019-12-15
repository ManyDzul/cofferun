(function(window){
    'use strict'

    let App = window.App || {};

    function Truck(truckId, ds) {
       this.truckId = truckId;
       this.ds = ds;
    }

    Truck.prototype.createOrder = function(order) {
        console.log('Creando una orden para ' + order.emailAddress);
        this.ds.add(order.emailAddress, order);
    }

    Truck.prototype.deliverOrder = function(customerId) {
        console.log('Se entrego la orden para ' + customerId);
        this.ds.remove(customerId);
    }

    Truck.prototype.printOrders = function() {
        let customerIdArray = Object.keys(this.ds.getAll());
        console.log('Truck # ' + this.truckId + ' tiene pendiente estas ordenes: ');
        customerIdArray.forEach(function (id) {
            console.log(this.ds.get(id));
        }.bind(this));
    };

    App.Truck = Truck;
    window.App = App;
    
})(window);