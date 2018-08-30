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
                                          <p class="card__price-value"></p>
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