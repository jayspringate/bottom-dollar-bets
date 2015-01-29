$(function () {
		
	$('#testClick').on('click', function () {
		var property = [];
		var selection = [];
		var element;
		var filteredGames = gameData;
		var winCount = 0;
		var lossCount = 0;
		var pushCount = 0;
		var overCount = 0;
		var underCount = 0;
		var pushTotalCount = 0;

	$(".selected").removeClass("selected");
	
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

});
	});
								
		