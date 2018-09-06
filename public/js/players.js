
    // GET route for registered players from users database
    $.get("/api/all", (data) => {
    if (data.length !== 0) {
        for (var i = 0; i < data.length; i++) {
        let card = $(`
        <div class="col-1-of-3">
                            <div class="player-card">
                                <div class="player-card__side player-card__side--front">
                                    <div class="player-card__picture player-card__picture--1">
                                        &nbsp;
                                    </div>
                                    <h4 class="player-card__heading">
                                        <span class="player-card__heading-span player-card__heading-span--1">
                                        ${data[i].firstname}
                                        </span>
                                    </h4>
                                    <div class="player-card__details">
                                    <p>Name: ${data[i].firstname} ${data[i].lastname}</p>
                                    <p>Location:</p>
                                    </div>
                                </div>
                                <div class="player-card__side player-card__side--back player-card__side--back-1">
                                    <div class="player-card__cta">
                                        <div class="player-card__price-box">
                                            <p class="player-card__price-only">Placeholder</p>
                                            <p class="player-card__price-value">${data[i].firstname}</p>
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
