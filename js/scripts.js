// back-end
function Task (activity, deadline, location){
  this.activity = activity;
  this.deadline = deadline;
  this.location = location;
}
// front-end
$(document).ready(function(){
  $("form#to-do").submit(function(event){
    event.preventDefault();
    var activity = $("input#activity").val();
    var deadline = $("input#deadline").val();
    var location = $("input#location").val();
    var newTask = new Task(activity, deadline, location);
    $("ul#to-do-list").append("<li><span class='task'>" + newTask.activity + "</span></li>");
    $("#instruction").slideDown();
    $(".task").last().click(function(){
      $("#task-details").slideDown();
      $("h3").text(newTask.activity);
      $(".deadline").text(newTask.deadline);
      $(".location").text(newTask.location);
    });
    $("li").last().dblclick(function(){
      var takeAway = confirm("Click 'ok' to delete or 'cancel' to go back.");
      if(takeAway == true) {
        this.remove();
        $("#task-details").hide()
      }
    });
  });
});
