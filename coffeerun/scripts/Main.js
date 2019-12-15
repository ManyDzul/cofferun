(function(window) {
    'use strict';
    const FORM_SELECTOR = '[data-coffee-order= "form"]';
    const CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';
    const SERVER_URL ='http://coffeerun-v2-rest-api.herokuapp.com/api/coffeeorders';

    let App = window.App;
    let Truck = App.Truck;
    let DataStore = App.DataStore;
    let RemoteDataStore = App.RemoteDataStore;
    let FormHandler = App.FormHandler;
    let CheckList = App.CheckList;
    let remoteDS = new RemoteDataStore(SERVER_URL);

    //let myTruck = new Truck('itcam', new DataStore());
    //let uacamTruck = new Truck('uacam', new DataStore());
    let myTruck = new Truck('itcamp',remoteDS);
    window.myTruck = myTruck;
    let checklist = new CheckList(CHECKLIST_SELECTOR);
    let formHandler = new FormHandler(FORM_SELECTOR);
    //formHandler.addSubmitHandler(myTruck.createOrder.bind(myTruck));
    formHandler.addSubmitHandler (function(data) { 
        myTruck.createOrder.call(myTruck, data);
        checklist.addRow.call(checklist, data);
    });
})(window);