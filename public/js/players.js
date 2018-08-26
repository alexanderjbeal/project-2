

// // When user clicks add-btn
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
      let card = $(`
      <div class="col-1-of-3">
                        <div class="card">
                            <div class="card__side card__side--front">
                                <div class="card__picture card__picture--1">
                                    &nbsp;
                                </div>
                                <h4 class="card__heading">
                                    <span class="card__heading-span card__heading-span--1">
                                     
                                    </span>
                                </h4>
                                <div class="card__details">
                                <p>Name: ${data[i].firstname} ${data[i].lastname}</p>
                                <p>Location:</p>
                                </div>
                            </div>
                            <div class="card__side card__side--back card__side--back-1">
                                <div class="card__cta">
                                    <div class="card__price-box">
                                        <p class="card__price-only">Placeholder</p>
                                        <p class="card__price-value">${data[i].firstname}</p>
                                    </div>
                                    <a href="#" class="btn btn--white">Invite</a>
                                </div>
                            </div>
                        </div>
                    </div>
      `);
      $(".players-container").prepend(card);
    }
  }
});













// // When user clicks add-btn
// $("#add-player").on("click", function(event) {
//   event.preventDefault();

//   // Make a newPlayer object
//   let newPlayer = {
//     firstname: $("#firstname").val().trim(),
//     email: $("#email").val().trim()
//   };

//   console.log(newPlayer);

//   // Send an AJAX POST-request with jQuery
//   $.post("/api/new", newPlayer)
//     // On success, run the following code
//     .then( () => {
//       let row = $("<div>");
//       row.addClass("player");
//       row.append(`<p> ${newPlayer.firstname} </p>`);
//       row.append(`<p> ${newPlayer.email} </p>`);
//       $("#player-area").prepend(row);
//     });
//   // Empty each input box by replacing the value with an empty string
//   $("#firstname").val("");
//   $("#email").val("");
// });

// // When the page loads, grab all players
// $.get("/api/all", (data) => {
//   if (data.length !== 0) {
//     for (var i = 0; i < data.length; i++) {
//       var row = $("<div>");
//       row.addClass("player");
//       row.append(`<p> ${data[i].firstname}</p>`);
//       row.append(`<p> ${data[i].email} </p>`);
//       $("#player-area").prepend(row);
//     }
//   }
// });