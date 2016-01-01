/**
 * Created by noor_ATM on 12/17/15.
 */
'use strict';


 app.controller('browseDetailCtrl', function($scope,$ionicPopup, $stateParams, Auth,Task) {

   $scope.tasks = Task.all;

   $scope.user = Auth.user;
   $scope.signedIn = Auth.signedIn;



   if($stateParams.taskId) {
     var task = Task.getTask($stateParams.taskId).$asObject();
     setSelectedTask(task);
   }


   function setSelectedTask(task) {
     $scope.selectedTask = task;

     // We check isTaskCreator only if user signedIn
     // so we don't have to check every time normal guests open the task
     if($scope.signedIn()) {

       // Check if the current login user has already made an offer for selected task
       Offer.isOfferred(task.$id).then(function(data) {
         $scope.alreadyOffered = data;
       });
       // Check if the current login user is the creator of selected task
       $scope.isTaskCreator = Task.isCreator;

       // Check if the selectedTask is open
       $scope.isOpen = Task.isOpen;

       // Check if the current user is assigned fot the selected task
       $scope.isAssignee = Task.isAssignee;

       // Check if the selectedTask is completed
       $scope.isCompleted = Task.isCompleted;
     }

     // Get list of comments for the selected task
     $scope.comments = Comment.comments(task.$id);

     // Get list of offers for the selected task
     $scope.offers = Offer.offers(task.$id);

     // Unblock the Offer button on Offer modal
     // $scope.offer = {close: ''};
     $scope.block = false;

     // Check if the current login user is offer maker (to display Cancel Offer button)
     $scope.isOfferMaker = Offer.isMaker;

   };




   $scope.editTask = function(){
     $scope.task = {};

     var myPopup = $ionicPopup.show({
       templateUrl: 'templates/partials/postEdit.html',
       title: 'تعديل طلب التبادل',
       scope: $scope,
       buttons: [
         { text: '<b>إلغاء الطلب </b>',
           type: 'button-calm'
         },

         {
           text: '<b>تعديل الطلب</b>',
           type: 'button-calm',
           onTap: function (task) {
             task = $scope.task;
             Task.editTask(task).then(function() {

             });

             console.log('the user is', task);
             $state.go('tabsController.browse');

           }
         }
       ]
     });
   };
  });
