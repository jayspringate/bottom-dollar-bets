$(function () {
		
	$('#testClick').on('click', function () {
		var property 					= [];
		var selection 				= [];
		var element;
		var filteredGames 		= gameData;
		var winCount 					= 0;
		var lossCount 				= 0;
		var pushCount 				= 0;
		var overCount 				= 0;
		var underCount 				= 0;
		var pushTotalCount 		= 0;
		var $homeTeam				 	= $('.selected:eq(0) option:selected').val();
		var $awayTeam					= 0;

	$(".selected").removeClass("selected");
	$('#teamLogo').removeClass();

	// if ($homeTeam === "blank" && $awayTeam != "blank" ||) {

	// }

	
	console.log($(".selected"));

	$("select").filter(function(index) {
			return $($("select")[index]).val()!="blank";
		}).addClass("selected");

		$(".selected").each(function(index) {
			property[index] = $(this).attr('id');
			selection[index] = $(this).val();
		});

		console.log($(".selected"));

		console.log(property, selection);

		for (i=0; i < property.length; i++) {
	function gameFilter(element) {
			if (element[property[i]] == selection[i]) {
			return element;
		}
}
	filteredGames = filteredGames.filter(gameFilter);
}
	console.log(filteredGames);

	function gradeCount() {
		for (i=0; i < filteredGames.length; i++) {
			if (filteredGames[i].grade == "win") {
				winCount++;
			} else if (filteredGames[i].grade == "loss") {
				lossCount++;
			} else {
				pushCount++;
			}
		}
		
	};
	gradeCount();
	console.log(winCount + " - " + lossCount + " - " + pushCount);

	function totalGradeCount() {
		for (i=0; i < filteredGames.length; i++) {
			if (filteredGames[i].totalGrade == "over") {
				overCount++;
			} else if (filteredGames[i].totalGrade == "under") {
				underCount++;
			} else {
				pushTotalCount++;
			}
		}
	};

totalGradeCount();
console.log("Over:" + " " + overCount + " " + "Under:" + " " + underCount + " " + "Push:" + " " + pushCount);

   var tableBuild = function () {
   var  $tableHead;

   var $homeTeam = $('.selected:eq(0) option:selected').val();
   var $awayTeam = $('.selected:eq(1) option:selected').val();
   var winPercent = Math.round(100 * (winCount/(winCount + lossCount) * 10)) /10;
   // if (isNaN(winPercent)) {
   // 	winPercent = "N/A";
   // }
    
    $('#teamLogo').addClass($homeTeam);
    $tableHead = $('.selected option:selected').text();
    $('#tableInfo').text($tableHead);
    $('#record').text(winCount + "-" + lossCount + "-" + pushCount);
    $('#winPercent').text(Math.round(100 * (winCount/(winCount + lossCount) * 10)) /10 + "%");
    $('#overCount').text(overCount);
    $('#underCount').text(underCount);
    $("#overPercent").text(Math.round(100 * (overCount/(overCount + underCount) * 10)) /10 + "%");
    $('#underPercent').text(Math.round(100 * (underCount/(underCount + overCount) * 10)) /10 + "%");
    $('#pushCount').text(pushTotalCount);
 

    };
    tableBuild();

});
	});
								
		
