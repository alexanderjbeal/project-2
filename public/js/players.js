
// When user clicks add-btn
$("#add-player").on("click", function(event) {
    event.preventDefault();
  
    // Make a newPlayer object
    let newPlayer = {
      firstname: $("#firstname").val().trim(),
      email: $("#email").val().trim()
    };
  
    console.log(newPlayer);
  
    // Send an AJAX POST-request with jQuery
    $.post("/api/new", newPlayer)
      // On success, run the following code
      .then( () => {
        let row = $("<div>");
        row.addClass("player");
        row.append(`<p> ${newPlayer.firstname} </p>`);
        row.append(`<p> ${newPlayer.email} </p>`);
        $("#player-area").prepend(row);
      });
    // Empty each input box by replacing the value with an empty string
    $("#firstname").val("");
    $("#email").val("");
  });
  
  // When the page loads, grab all players
  $.get("/api/all", (data) => {
    if (data.length !== 0) {
      for (var i = 0; i < data.length; i++) {
        var row = $("<div>");
        row.addClass("player");
        row.append(`<p> ${data[i].firstname}</p>`);
        row.append(`<p> ${data[i].email} </p>`);
        $("#player-area").prepend(row);
      }
    }
  });