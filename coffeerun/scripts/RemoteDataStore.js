(function(window){

    "use strict";
    let App = window.App || {};
    let $ = window.jQuery;
    
    function RemoteDataStore(url){
        if (!url) {
            throw new Error ('No se proporcionó un URL remoto');
        }
        this.serverUrl=url;
    }
    RemoteDataStore.prototype.add = function(key,val){
        $.post(this.serverURl,val, function(serverResponse){
            console.log(serverResponse);
        })
    }
    RemoteDataStore.prototype.getAll = function(cb) {
        $.get(this.serverUrl,function(serverResponse){
            console.log(serverResponse);
            cb(serverResponse);
        });
    }
    RemoteDataStore.prototype.get = function(key,cb){
        $.get(this.serverUrl + '/' + key, function(serverResponse){
            console.log(serverResponse);
            cb(serverResponse);
        });
    }
    RemoteDataStore.prototype.remove = function(key){
        $.ajax(this.serverUrl + '/' + key,{
            type: 'DELETE'
        });
    }
    App.RemoteDataStore = RemoteDataStore;
    window.App = App;
})(window);