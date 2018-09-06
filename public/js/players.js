
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
       
                                    <div class="player-card__details">
                                    <span class="game-details game-details--name">${data[i].firstname} ${data[i].lastname}</span>
                                    </div>
                                </div>
                                <div class="player-card__side player-card__side--back player-card__side--back-1">
                                    <div class="player-card__cta">
                                    <div class="card__price-box">
                                    <span class="game-details game-details--icon">Invite</span>
                                    <span class="game-details game-details--icon"><i class="fas fa-basketball-ball fa-4x icon-back"></i></span>
                                </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        `);
        $(".players-container").prepend(card);
        }
    }
    });
