    let game = {};

    if (req.body.location) game.location = req.body.location;
    if (req.body.time) game.time = req.body.time;
    if (req.body.maxPlayers) game.maxPlayers = req.body.maxPlayers;

    db.Games.update(game, {
        where: {
            id: req.body.id
        }
    }).then(function (dbUpdateGames) {
        console.log(dbUpdateGames)
        res.json(dbUpdateGames)
    });

    
    // if (req.body.location != null && req.body.time != null && req.body.maxPlayers != null ) {
        
    //   } else if (req.body.location != null && req.body.time != null && req.body.maxPlayers == null) {
    //     //if location and time are not null & maxPlayers is null
    //     db.Games.update({
    //       location: req.body.location,
    //       time: req.body.time
    //     }, {
    //         where: {
    //           id: req.body.id
    //         }
    //       }).then(function (dbUpdateGames) {
    //         console.log(dbUpdateGames)
    //         res.json(dbUpdateGames)
    //       });
        
    //   } else if (req.body.location != null && req.body.time == null && req.body.maxPlayers != null) {
    //     //if location and maxPlayers are not null & time is null
    //     db.Games.update({
    //       location: req.body.location,
    //       maxPlayers: req.body.maxPlayers

    //     }, {
    //         where: {
    //           id: req.body.id
    //         }
    //       }).then(function (dbUpdateGames) {
    //         console.log(dbUpdateGames)
    //         res.json(dbUpdateGames)
    //       });
    //   } else if (req.body.location != null && req.body.time == null && req.body.maxPlayers == null) {
    //     // if location is not null & time and maxPlayers are null
    //     db.Games.update({
    //       location: req.body.location
    //     }, {
    //         where: {
    //           id: req.body.id
    //         }
    //       }).then(function (dbUpdateGames) {
    //         console.log(dbUpdateGames)
    //         res.json(dbUpdateGames)
    //       });
    //   } else if (req.body.location == null && req.body.time != null && req.body.maxPlayers != null) {
    //     // if time and maxPlayers are not null & location is null
    //     db.Games.update({
    //       time: req.body.time,
    //       maxPlayers: req.body.maxPlayers

    //     }, {
    //         where: {
    //           id: req.body.id
    //         }
    //       }).then(function (dbUpdateGames) {
    //         console.log(dbUpdateGames)
    //         res.json(dbUpdateGames)
    //       });
    //   } else if (req.body.location == null && req.body.time != null && req.body.maxPlayers == null) {
    //     // if time is not null and location & maxPlayers are null
    //     db.Games.update({
    //       time: req.body.time
    //     }, {
    //         where: {
    //           id: req.body.id
    //         }
    //       }).then(function (dbUpdateGames) {
    //         console.log(dbUpdateGames)
    //         res.json(dbUpdateGames)
    //       });
    //   } else if (req.body.location == null && req.body.time == null && req.body.maxPlayers != null) {
    //     // if maxPlayers is not null and location & time are null
    //     db.Games.update({
    //       maxPlayers: req.body.maxPlayers

    //     }, {
    //         where: {
    //           id: req.body.id
    //         }
    //       }).then(function (dbUpdateGames) {
    //         console.log(dbUpdateGames)
    //         res.json(dbUpdateGames)
    //       });
    //   } else {
    //     console.log("No updates by user")
    //   }

      