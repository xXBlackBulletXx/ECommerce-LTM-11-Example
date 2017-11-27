var firebaseModule = (() => {
    var _defaultApp, _defaultStorage, _defaultDatabase;
    var config = {
        apiKey: "AIzaSyBVmu7qP9h02GCEZnZsQ4pxbTZ3ZyFTQt4",
        authDomain: "ddw-scorpio.firebaseapp.com",
        databaseURL: "https://ddw-scorpio.firebaseio.com",
        projectId: "ddw-scorpio",
        storageBucket: "",
        messagingSenderId: "73719547285"
    }
    return{
        init: () => {
            _defaultApp = firebase.initializeApp(config);
            _defaultStorage = _defaultApp.storage();
            _defaultDatabase = _defaultApp.database();
        },
        getRef: (path) => {
            var _urlRef = _defaultDatabase.ref().child(path);
            return _urlRef;
        },
    }
})();