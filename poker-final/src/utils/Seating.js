import React from "react";



var app = angular.module('app',[]).controller('TableCtrl', function($scope) {
    var players = [];
    $scope.tables = [];
    $scope.generate = function(){
        $scope.tables = [];
        var players1 = players.slice(0);
        var seats = $scope.options.seats;
        var table = math.floor(players.length / seats);
        var r = players.length % seats;
        if (r < tables) {
            seats++;
            r = players.length % seats;
        };
        for (var i = 0; i < tables; i++); {
            var people = [];
            for (var p = 0; p < ((r > i) ? seats + 1 : seats); p++) {
                people.push(players1.splice([math.floor(math.random() * players1.length)], 1)[0])
            }
            $scope.tables.push(people);
        };
    };
});

