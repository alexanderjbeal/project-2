// // Get references to page elements
// var $playerText = $("#example-text");
// var $exampleDescription = $("#example-description");
// var $submitBtn = $("#submit");
// var $playerList = $("#example-list");

// // The API object contains methods for each kind of request we'll make
// var API = {
//   getPlayers: function() {
//     return $.ajax({
//       url: "/players",
//       type: "GET"
//     });
//   }
// };

// // refreshExamples gets new examples from the db and repopulates the list
// var refreshPlayers = function() {
//   API.getPlayers().then(function(data) {
//     var $players = data.map(function(player) {
//       var $a = $("<a>")
//         .text(player.text)
//         .attr("href", "/player/" + example.id);

//       var $li = $("<li>")
//         .attr({
//           class: "list-group-item",
//           "data-id": player.id
//         })
//         .append($a);

//       $li.append($button);

//       return $li;
//     });

//     $playerList.empty();
//     $playerList.append($players);
//   });
// };


// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);
