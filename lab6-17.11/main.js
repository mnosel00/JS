window.addEventListener("deviceorientation", onDeviceMove);

function onDeviceMove(event) {
  console.log(event);
}

function animate() {
  console.log(Date.now());
}
