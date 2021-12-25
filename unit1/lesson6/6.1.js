const weatherObjects = [{icon: "sunny"}, {icon: "rainy-night"}, {icon: "cloudy-night"}, {icon: "cloudy"}];
console.log(weatherObjects.filter(obj => obj.icon.endsWith("-night")));
