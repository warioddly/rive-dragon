
const rive = require("@rive-app/canvas");

const dragon = new rive.Rive({
    src: "https://cdn.rive.app/animations/vehicles.riv",
    canvas: document.getElementById("canvas"),
    stateMachines: "bumpy",
    autoplay: true,
    onLoad: () => { }
});


console.log(dragon);