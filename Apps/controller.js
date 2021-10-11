app.factory("api", function (httpRequest, $log, $window, $http) {
    return {
        login: function (form) {
            return httpRequest.post('admin/login', form, __env.token).then(function (response) {
                if (response.status == 200) {
                    $log.debug(response);
                    if (response.data.status == 'success') {
                        return response.data;
                    } else {
                        return response.data.message;
                    }
                } else {
                    return null;
                }
            })
        },

    }
});

app.factory("sessions", function () {
    return {
        save: function (user) {
            sessionStorage.setItem("user", JSON.stringify(user));
        },
        get: function () {
            return sessionStorage.getItem("user");
        },
        logout: function () {
            sessionStorage.removeItem("user");
        },
    }
})