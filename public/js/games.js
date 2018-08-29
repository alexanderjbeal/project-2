// $("#submit").on("click", function(event) {
//     event.preventDefault();

//     // Grabbing the elements in the form
//     var newGame = {
//         time: $("#time").val().trim(),
//         location: $("#location").val().trim(),
//         max_players: $("#max_players").val().trim()
//     };
//     console.log(newGame);

//     //using Jquery to post the new game to express and allowing the API route to
//     //send it to the data base

//     $.post("/api/games", newGame, 
//         function(data) {
//             if (data) {
//                 console.log("new game details have been submitted");
//             } else {
//                 alert("Please fill out all game fields")
//             }

//             //clearing the fields once the form is submitted
//             $("#time").val("");
//             $("#location").val("");
//             $("#max_players").val("");
//         //closing the jquery post
//     });
// //closing the on click function    
// });


$.get("/api/games", (data) => {
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
                                      ${data[i].time}
                                      </span>
                                  </h4>
                                  <div class="card__details">
                                  <p>Name: ${data[i].location} </p>
                                  <p>Name: ${data[i].max_players} </p>
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
        $(".games-container").prepend(card);
      }
    }
  });