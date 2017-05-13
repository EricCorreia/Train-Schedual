// start firebase

var config = {
    apiKey: "AIzaSyAvGjp5_gOd4_hV4NSRGffgwP9dUZoAM1U",
    authDomain: "train-schedual-a84c1.firebaseapp.com",
    databaseURL: "https://train-schedual-a84c1.firebaseio.com",
    projectId: "train-schedual-a84c1",
    storageBucket: "train-schedual-a84c1.appspot.com",
    messagingSenderId: "309752570058"
  };
  firebase.initializeApp(config);

var database = firebase.database();

//

	$('#submit').click(function(){

		var name = $('#trainNameInput').val().trim();
		var destination = $('#destinationInput').val().trim();
		var firstTrain = $('#firstTrainInput').val().trim();
		var frequency = $('#frequencyInput').val().trim();

		database.ref().push({
			name: name,
			destination: destination,
			firstTrain: firstTrain,
			frequency: frequency
		});
			$('input').val('');
			return false;
	})

database.ref().on('child_added', function(childSnapshot){

	var name = chilldSnapshot.val().name;
	var destination = chilldSnapshot.val().destination;
	var firstTrain = chilldSnapshot.val().firstTrain;
	var frequency = chilldSnapshot.val().frequency;

	console.log(name);
	console.log(destination);
	console.log(firstTrain);
	console.log(frequency);
	conosle.log(moment().format(hh.mm));

	var firstTime = moment(time,'hh:mm').subtract(1, 'years');
	console.log(firstTime);

	var currentTime = moment();
	conosle.log(moment(currentTime).format(hh:mm));

	var differentTime = moment().diff(moment(firstTime), 'minutes');
	console.log(differentTime)

	var timeRemainder = differentTime % frequency;
	conosle.log(timeRemainder);

	var minutesAway = frequency - timeRemainder
	console.log(minutesAway)

	var nextTrain = moment().add(minutesAway, 'minutes').format('hh:mm');
	conosle.log(moment(nextTrain).format('hh:mm'));

	var newElement = $('<tr/>').attr('data-name', name);
		newElement.append($('<td/>').text(name));
		newElement.append($('<td/>').text(destination));
		newElement.append($('<td/>').text(firstTrain));
		newElement.append($('<td/>').text(frequency));
		$('.table').append(newElement)
})

