// the data shold be in the format originally, we shouldn't have to do this
var newGameData = [];
$.each(gameData, function(index, el) {
    newGameData.push({
        score: {
            home: el['score'][0],
            road: el['score'][1]
        },
        spread: Math.min.apply(null, el['odds']),
        predictedTotal: Math.max.apply(null, el['odds']),
        teams: {
            home: el['teams'][0],
            road: el['teams'][1]
        }
    });

});
gameData = newGameData;