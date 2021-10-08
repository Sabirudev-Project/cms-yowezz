var __env = {};
// Import variables if present
if (window) {
    Object.assign(__env, window.__env);
}
app = angular.module("home", ["ngRoute"]);
app.constant('__env', __env);
app.config(function ($logProvider) {
    $logProvider.debugEnabled(__env.debugEnabled);
});

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "Pages/Auth/login.html?v=5",
            controller: "landingpage",
        })


        .otherwise({
            redirectTo: "/"
        });

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: true,
    });
});

app.factory("httpRequest", function ($http) {
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
        delete: function (url, data, token) {
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
    };
});

app.factory("notification", function () {
    return {
        info: function (text) {
            return $.toast({
                heading: "info",
                text: text,
                icon: "info",
                loader: true, // Change it to false to disable loader
                hideAfter: 5000,
            });
        },
        error: function (text) {
            return $.toast({
                heading: "error",
                text: text,
                icon: "error",
                loader: true, // Change it to false to disable loader
                hideAfter: 5000,
            });
        },
        warning: function (text) {
            return $.toast({
                heading: "Warning",
                text: text,
                icon: "warning",
                loader: true, // Change it to false to disable loader
                hideAfter: 5000,
            });
        },
        success: function (text) {
            return $.toast({
                heading: "Success",
                text: text,
                icon: "success",
                loader: true, // Change it to false to disable loader
                hideAfter: 5000,
            });
        },
    };
});