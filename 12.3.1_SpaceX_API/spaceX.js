// API call to SpaceX
// const url = "https://api.spacexdata.com/v2/launchpads";
// d3.json(url).then(receivedData => console.log(receivedData));

// Diferent ways to call the API data
// const url = "https://api.spacexdata.com/v2/launchpads";
// d3.json(url).then(data => console.log(data));
// d3.json(url).then(spaceXResults => console.log(spaceXResults[0]));
// d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));
// d3.json(url).then(spaceXResults => console.log(spaceXResults[0].location.latitude));

// Skill Drill 12.3.1 Use map() to print only the lat-longs.
// Skipped

// 12.3.2 json file 
d3.json("samples.json").then(function(data){
    console.log("hello");
});

// when you get it to work...
d3.json("samples.json").then(function(data){
    console.log(data);
});