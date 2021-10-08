app.factory("api", function (httpRequest, $log, $window, $http) {
    return {
        login: function (form) {
            return httpRequest.post('user/login', form, __env.token).then(function (response) {
                if (response.status == 200) {
                    $log.debug(response);
                    return response.data;
                } else {
                    return null;
                }
            })
        },
        register: function (form) {
            return httpRequest.post('user/register', form, __env.token).then(function (response) {
                $log.debug(response);
                if (response.status == 200) {
                    return response.data;
                } else {
                    return null;
                }
            })
        },
        forget_password: function (form) {
            return httpRequest.post('user/forget_password', form, __env.token).then(function (response) {
                if (response.status == 200) {
                    $log.debug(response);
                    return response.data;
                } else {
                    return null;
                }
            })
        },
        check_session: function (param) {
            return httpRequest.get('user/check_session', {
                token: (param) ? param : '',
            }, __env.token).then(function (response) {
                $log.debug(response);
                if (response.status == 200) {
                    return response.data;
                } else {
                    return null;
                }
            })
        },
        check_google: function () {
            return httpRequest.get('', {}, __env.token).then(function (response) {
                $log.debug(response);
                if (response.status == 200) {
                    return response.data;
                } else {
                    return null;
                }
            })
        },
        login_fb: function () {
            return httpRequest.get('user/auth/facebook', {}, __env.token).then(function (response) {
                $log.debug(response);
                if (response.status == 200) {
                    $http.get(response.data.data) // Should probably be posting here...
                        .then(function (res) { // Your JSON response here
                            return res.data;
                        }, function (err) { // Handle your error
                            $window.alert("We got us an error!\n" + JSON.stringify(err));
                        });
                } else {
                    return null;
                }
            })
        },
        login_google: function () {
            return httpRequest.get('user/auth/google', {}, __env.token).then(function (response) {
                $log.debug(response);
                if (response.status == 200) {
                    $window.postMessage('Message', response.data.data);
                } else {
                    return null;
                }
            })
        }
    }
});

app.factory("sessions", function () {
    return {
        save: function (token) {
            sessionStorage.setItem("token", token);
        },
        get: function () {
            return sessionStorage.getItem("token");
        },
    }
})