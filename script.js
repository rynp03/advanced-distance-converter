(function(){

        let convertType = "miles";
	    const heading = document.querySelector("h1");
	    const intro = document.querySelector("p");
	    const answer = document.getElementById("answer");
	    const form = document.getElementById("convert");

		document.addEventListener("keydown", function(event){

			var key = event.code;

			if(key === 'KeyK')
			{
				convertType = "kilometers";
				heading.innerHTML = "Kilometers to Miles Converter";
				intro.innerHTML = "Type in number of kilometers and click the button to convert to miles";
			}

			else if(key === 'KeyM')
			{
				convertType = "miles";
				heading.innerHTML = "Miles to Kilometers Converter";
				intro.innerHTML = "Type in number of miles and click the button to convert to kilometers";
			}
		});

		document.addEventListener("submit", function(event){
			event.preventDefault();
			const distance = parseFloat(document.getElementById("distance").value);
			if (distance)
			{
				if(convertType == "miles")
				{
					const converted = (distance*1.609344).toFixed(3);
					answer.innerHTML = `${distance} miles converted to ${converted} kilometers`;
				}

				else
				{
					const converted = (distance*0.621371192).toFixed(3);
					answer.innerHTML = `${distance} kilometers converted to ${converted} miles`;
				}
			}

			else
			{
				answer.innerHTML = "<h2>Please provide the number</h2>";
			}
		});
})();