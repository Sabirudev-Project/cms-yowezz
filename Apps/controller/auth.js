app.controller("login", function ($scope, api, sessions, $log, notification, httpRequest, $window) {
    $scope.checkSession = function () {
        if (sessions.get() != undefined)
            $window.location = '/superadmin'
    }
    $scope.checkSession();

    $scope.login = function () {
        api.login($scope.form).then(function (result) {
            if (result != null) {
                if (result.status == 'success') {
                    notification.success(result.message);
                    sessions.save(result.data);
                    $window.location = '/superadmin'

                } else {
                    notification.error(result);

                }
            } else {
                notification.error("Invalid parameter");
            }
        });
    }
});