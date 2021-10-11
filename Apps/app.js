var __env = {};
// Import variables if present
if (window) {
    Object.assign(__env, window.__env);
}
app = angular.module("home", ["ngRoute", 'ngFileUpload']);
app.constant('__env', __env);
app.config(function ($logProvider) {
    $logProvider.debugEnabled(__env.debugEnabled);
});

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "Pages/Auth/login.html?v=5",
            controller: "login",
        })
        .when("/superadmin", {
            templateUrl: "Pages/admin/home.html",
            controller: "superadmin/home",
        })
        .when("/superadmin/users", {
            templateUrl: "Pages/admin/home.html",
            controller: "superadmin/users",
        })
        .when("/superadmin/wof", {
            templateUrl: "Pages/admin/home.html",
            controller: "superadmin/wof",
        })
        .when("/superadmin/video", {
            templateUrl: "Pages/admin/home.html",
            controller: "superadmin/video",
        })
        .when("/superadmin/sponsor", {
            templateUrl: "Pages/admin/home.html",
            controller: "superadmin/sponsor",
        })
        .when("/superadmin/bazzar", {
            templateUrl: "Pages/admin/home.html",
            controller: "superadmin/bazzar",
        })
        .otherwise({
            redirectTo: "/"
        });

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: true,
    });
});

app.factory("httpRequest", function ($http, Upload) {
    return {
        get: function (url, params, token) {
            return $http({
                params: params,
                headers: {
                    Authorization: (token != undefined) ? "Bearer " + token : "",
                    Accept: "application/json",
                },
                method: "GET",
                url: (__env.debugEnabled == false) ? __env.devApiUrl + url : __env.apiUrl + url,
                cache: false,
            }).then(function (response) {
                return response;
            }, function (error) {
                // else
                return error;
            });
        },
        post: function (url, data, token) {
            return $http({
                headers: {
                    Authorization: (token != undefined) ? "Bearer " + token : "",
                    Accept: "application/json",
                },
                method: "POST",
                cache: false,
                url: (__env.debugEnabled == false) ? __env.devApiUrl + url : __env.apiUrl + url,
                data: data,
            }).then(function (response) {
                return response;
            }, function (error) {
                // else
                return error;
            });
        },
        put: function (url, data, token) {
            return $http({
                headers: {
                    Authorization: (token != undefined) ? "Bearer " + token : "",
                    Accept: "application/json",
                },
                method: "PUT",
                cache: false,
                url: (__env.debugEnabled == false) ? __env.devApiUrl + url : __env.apiUrl + url,
                data: data,
            }).then(function (response) {
                return response;
            }, function (error) {
                // else
                return error;
            });
        },
        delete: function (url, token) {
            return $http({
                headers: {
                    Authorization: (token != undefined) ? "Bearer " + token : "",
                    Accept: "application/json",
                },
                method: "DELETE",
                cache: false,
                url: (__env.debugEnabled == false) ? __env.devApiUrl + url : __env.apiUrl + url,
            }).then(function (response) {
                return response;
            }, function (error) {
                // else
                return error;
            });
        },
        upload: function (url, token, form) {
            return Upload.upload({
                url: (__env.debugEnabled == false) ? __env.devApiUrl + url : __env.apiUrl + url,
                headers: {
                    Authorization: (token != undefined) ? "Bearer " + token : "",
                    Accept: "application/json",
                },
                data: form
            }).then(function (resp) {
                return resp;
            }, function (resp) {
                return resp;
            }, function (evt) {
                var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                return progressPercentage;
            });
        }
    };
});

app.factory("notification", function () {
    return {
        info: function (text) {
            return Toastify({
                text: text,
                duration: 3000,
                close: true,
                gravity: "bottom",
                position: "left",
                backgroundColor: "#43B3F9",
            }).showToast();
        },
        error: function (text) {
            return Toastify({
                text: text,
                duration: 3000,
                close: true,
                gravity: "bottom",
                position: "left",
                backgroundColor: "#F94343",
            }).showToast();
        },
        warning: function (text) {
            return Toastify({
                text: text,
                duration: 3000,
                close: true,
                gravity: "bottom",
                position: "left",
                backgroundColor: "#FEFF15",
            }).showToast();
        },
        success: function (text) {
            return Toastify({
                text: text,
                duration: 3000,
                close: true,
                gravity: "bottom",
                position: "left",
                backgroundColor: "#31F829",
            }).showToast();
        },
    };
});