// returns true if record should be included in data set
function includeRecord(game) {
    var team = $('#team').val();
    var opponent = $('#opponent').val();
    var court = $('#court').val();
    var favorite = $('#favorite').val();
    var spread = $('#spread').val();

    var includeRecord = true;
    // is the team in either away or home
    if(team != 'blank' && game.teams.home != team && game.teams.road != team) {
        includeRecord = false;
    }

    // is the opponent in the home or away
    if(includeRecord && opponent != 'blank' && game.teams.home != opponent && game.teams.road != opponent) {
        includeRecord = false;
    }

    if(includeRecord && court != 'blank') {
        if(court === 'home' && team != game.teams.home)  {
            includeRecord = false;
        } else if (court === 'road' && team != game.teams.road) {
            includeRecord = false;
        }
    }

    if(includeRecord && favorite != 'blank') {
        if(favorite === 'favorite' && game.spread > 0) { // above zero means underdog
            includeRecord = false;
        } else if (favorite === 'underdog' && game.spread < 0) { //
            includeRecord = false;
        }
    }

    if(includeRecord && spread != 'blank') {

        if(spread != game.spread) {
            includeRecord = false;
        }
    }

    return includeRecord;
}

function calculatePercent(numerator, denominator) {
    return Math.round(numerator / denominator * 100 * 100) / 100;
}

function calculateData() {

    var win = 0;
    var loss = 0;
    var tie = 0;

    var overTimes  = 0;
    var underTimes = 0;
    var push       = 0; // number of times prediction is same as actual
    var numberOfGames = 0;

    for (var i = 0; i < gameData.length; i++) {
        var data = gameData[i];
        

        // that's home vs away
        // each record needs to be a row,
        if (includeRecord(data)) {
            numberOfGames += 1;

            // inc win / loss tie
            if (data.score.home > data.score.road) {
                win += 1;
            } else if (data.score.home < data.score.road) {
                loss += 1;
            } else {
                tie += 1;
            }

            var totalPoints = data.score.home + data.score.road;
            var predictedTotal = data.predictedTotal;
            if (totalPoints > predictedTotal) {
                overTimes += 1;
            } else if (totalPoints < predictedTotal) {
                underTimes += 1;
            } else {
                push += 1;
            }

        }
    }

    // should all be in different method that returns summary object
    if(numberOfGames > 0) {
        $('#record').html(win + '-' + loss + '-' + tie);
        $('#winPercent').html(calculatePercent(win, numberOfGames));

        $('#overCount').html(overTimes);
        $('#underCount').html(underTimes);
        $('#pushCount').html(push);
        $('#overPercent').html(calculatePercent(overTimes, numberOfGames));
        $('#underPercent').html(calculatePercent(underTimes, numberOfGames));

        $('#teamLogo').attr('src', 'img/' + $('#team').val().toLowerCase() + '.gif');
    } else {
        $('#teamLogo').html('no games found matching that criteria');

        $('#record').html('');
        $('#winPercent').html('');

        $('#overCount').html('');
        $('#underCount').html('');
        $('#pushCount').html('');
        $('#overPercent').html('');
        $('#underPercent').html('');
    }

}

$(".dropDown select").on('change', calculateData);

