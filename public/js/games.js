    // GET route for games from game database
    $.get("/api/games", (data) => {
        if (data.length !== 0) {
        for (var i = 0; i < data.length; i++) {
            let card = $(`
            <div class="col-1-of-2">
                <div class="game-card">
                    <div class="game-card__side game-card__side--front">

                        <div class="game-card__game-details">
                            <div class="game-card__game-details--button-top">
                                <span class="game-details--location">${data[i].location}</span>
                                <span class="game-details--sub">${moment(data[i].time, "hh:mm A").format("hh:mm A")}</span>
                                <span class="game-details--sub">${moment(data[i].date).format("MMM D, Y")}</span>
                            </div>
                            <div class="game-card__container">
                                <div class="col-1-of-3">
                                    <span class="game-details--sub">Max</span>
                                    <span class="game-details--main">${data[i].max_players}</span>
                                </div>
                                <div class="col-1-of-3">
                                    <span class="game-details--sub">Open</span>
                                    <span class="game-details--main">${data[i].max_players}</span>
                                </div>
                                <div class="col-1-of-3">
                                    <span class="game-details--sub">Join</span>
                                    <span class="game-details--sub"><i class="fas fa-user-plus fa-4x icon"></i></span>
                                </div>
                            </div>

                            <div class="game-card__game-details--button-bottom">&nbsp;</div>
                        </div>
                  
                        <div class="game-card__picture">
                            <div class="game-card__picture--1">&nbsp;</div>
                        </div>

                    </div>

                    <div class="game-card__side game-card__side--back game-card__side--back-1">
                        <div class="game-card__cta">
                            <div class="game-card__price-box">
                                <p class="game-card__price-only">Placeholder</p>
                                <p class="game-card__price-value">Test</p>
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




        // // GET route for games from game database
        // $.get("/api/games", (data) => {
        //     if (data.length !== 0) {
        //     for (var i = 0; i < data.length; i++) {
        //         let card = $(`
        //         <div class="col-1-of-1">
        //             <div class="game-card">
        //                 <div class="game-card__side game-card__side--front">
        //                     <div class="game-card__game-details">
        //                         <div class="game-card__game-details--container">
        //                             <div class="game-card__game-details--container--one">
        //                                 <span class="heading-game-details">Time</span>
        //                                 ${data[i].time}
        //                             </div>
        //                             <div class="game-card__game-details--container--two">
        //                                 ${data[i].location}
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div class="game-card__player-details">
        //                         <div class="game-card__player-details--container">
        //                             1/${data[i].max_players}
        //                         </div>
        //                     </div>
        //                     <div class="game-card__button-details">
        //                         <div class="game-card__button-details--container">
        //                             Join
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div class="game-card__side game-card__side--back game-card__side--back-1">
        //                     <div class="game-card__cta">
        //                         <div class="game-card__price-box">
        //                             <p class="game-card__price-only">Placeholder</p>
        //                             <p class="game-card__price-value">Test</p>
        //                         </div>
        //                         <a href="#" class="btn btn--white">Invite</a>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //         `);
        //         $(".games-container").prepend(card);
        //     }
        //     }
        // });



    // $.get("/api/games", (data) => {
    //     if (data.length !== 0) {
    //     for (var i = 0; i < data.length; i++) {
    //         let card = $(`
    //         <div class="col-1-of-2">
    //                         <div class="game-card">
    //                             <div class="game-card__side game-card__side--front">
    //                                 <div class="game-card__picture game-card__picture--1">
    //                                     &nbsp;
    //                                 </div>
    //                                 <h4 class="game-card__heading">
    //                                     <span class="game-card__heading-span game-card__heading-span--1">
    //                                     ${data[i].time}
    //                                     </span>
    //                                 </h4>
    //                                 <div class="game-card__details">
    //                                 <p>Name: ${data[i].location} </p>
    //                                 </div>
    //                             </div>
    //                             <div class="game-card__side game-card__side--back game-card__side--back-1">
    //                                 <div class="game-card__cta">
    //                                     <div class="game-card__price-box">
    //                                         <p class="game-card__price-only">Placeholder</p>
    //                                         <p class="game-card__price-value"></p>
    //                                     </div>
    //                                     <a href="#" class="btn btn--white">Invite</a>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //         `);
    //         $(".games-container").prepend(card);
    //     }
    //     }
    // });