angular.module('app.routes', [])


.constant('FURL', 'https://tbaadol.firebaseio.com/')

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginCtrl'
    })


    .state('tabsController', {
      url: '/home',
      abstract:true,
      templateUrl: 'templates/tabsController.html'
    })



    .state('tabsController.browse', {
      url: '/browse',
      views: {
        'tab1': {
          templateUrl: 'templates/browse.html',
          controller: 'browseCtrl'
        }
      }
    })

    .state('tabsController.browseDetail', {
      url: '/browseDetail/:taskId',
      views: {
        'tab1': {
          templateUrl:'templates/browseDetail.html',
          controller: function($stateParams){
            $stateParams.id;
          }

        }
      }
    })


    .state('tabsController.omanSchool', {
      url: '/omanSchool',
      views: {
        'tab2': {
          templateUrl: 'templates/omanSchool.html',
          controller: 'omanSchoolCtrl'
        }
      }
    })





    .state('tabsController.muscatSchool', {
      url: '/muscatSchool',
      views: {
        'tab2': {
          templateUrl: 'templates/muscatSchool.html',
          controller: 'muscatSchoolCtrl'
        }
      }
    })



    .state('tabsController.blog', {
      url: '/blog',
      views: {
        'tab3': {
          templateUrl: 'templates/blog.html',
          controller: 'BlogCtrl'
        }
      }
    })

    .state('tabsController.account', {
      url: '/account',
      views: {
        'tab4': {
          templateUrl: 'templates/account.html',
          controller: 'accountCtrl'
        }
      }
    })


  ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});
