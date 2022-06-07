$("#user").focus(() => {
  $("#mat").addClass("active");
  $("#user").addClass("active");
});

$("#user").focusout(() => {
  if (!$("#user").val()) {
    $("#user").removeClass("active");
    $("#mat").removeClass("active");
  }
});

$("#password").focus(() => {
  $("#pass").addClass("active");
  $("#password").addClass("active");
});

$("#password").focusout(() => {
  if (!$("#password").val()) {
    $("#pass").removeClass("active");
    $("#password").removeClass("active");
  }
});
