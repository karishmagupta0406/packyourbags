'use strict';

/**
 * @ngdoc overview
 * @name getStartedApp
 * @description
 * # getStartedApp
 *
 * Main module of the application.
 */
angular
    .module('getStartedApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngTouch',
        'ui.router'
    ])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'views/home.html',
                controller: 'homeCtrl'
            })
            .state('packages', {
                url: '/packages',
                templateUrl: 'views/packages.html',
                controller: 'packagesCtrl'
            })
             .state('contact', {
                url: '/contact',
                templateUrl: 'views/contact.html',
                 controller: 'contactCtrl'
             })
             .state('hotSpot',{
                url: '/hotSpot',
                templateUrl: 'views/hotSpot.html',
                controller: 'hotSpotCtrl'
             })

        $urlRouterProvider.otherwise('/home');

    });
