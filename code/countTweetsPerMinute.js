var fs = require('fs');
var tweets = [];
var output = [];

tweets = JSON.parse ( fs.readFileSync ( '../sample/tweets.json','UTF-8' ) );

tweets.map ( function ( tweet ) {
	var minute_timestamp = parseInt ( tweet.timestamp_ms / 60000 ) * 60000;
	for ( var i = 0; i < output.length; i++) {
		if (output[i].time === minute_timestamp) {
			output[i].count++;
			return;
		}
	}
	output.push ( {
		'time': minute_timestamp,
		'count': 1
	});
});

output.sort ( function ( a, b) { return a.time - b.time; } ); //optional

fs.writeFileSync ( '../result/result.json', JSON.stringify ( output, null, '\t' ), 'UTF-8' );

tweets = null;
output = null;