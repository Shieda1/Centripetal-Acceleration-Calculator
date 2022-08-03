// https://calculator.swiftutors.com/centripetal-acceleration-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const centripetalAccelerationRadio = document.getElementById('centripetalAccelerationRadio');
const velocityRadio = document.getElementById('velocityRadio');
const radiusRadio = document.getElementById('radiusRadio');

let centripetalAcceleration;
let velocity = v1;
let radius = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

centripetalAccelerationRadio.addEventListener('click', function() {
  variable1.textContent = '(v) Velocity (m/s)';
  variable2.textContent = '(r) Radius (m)';
  velocity = v1;
  radius = v2;
  result.textContent = '';
});

velocityRadio.addEventListener('click', function() {
  variable1.textContent = '(a) Centripetal Acceleration (m/s²)';
  variable2.textContent = '(r) Radius (m)';
  centripetalAcceleration = v1;
  radius = v2;
  result.textContent = '';
});

radiusRadio.addEventListener('click', function() {
  variable1.textContent = '(a) Centripetal Acceleration (m/s²)';
  variable2.textContent = '(v) Velocity (m/s)';
  centripetalAcceleration = v1;
  velocity = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(centripetalAccelerationRadio.checked)
    result.textContent = `Centripetal Acceleration = ${computeCentripetalAcceleration().toFixed(2)}`;

  else if(velocityRadio.checked)
    result.textContent = `Velocity = ${computeVelocity().toFixed(2)}`;

  else if(radiusRadio.checked)
    result.textContent = `Radius = ${computeRadius().toFixed(2)}`;
})

// calculation

function computeCentripetalAcceleration() {
  return Math.pow(Number(velocity.value), 2) / Number(radius.value);
}

function computeVelocity() {
  return Math.sqrt(Number(centripetalAcceleration.value) * Number(radius.value));
}

function computeRadius() {
  return Math.pow(Number(velocity.value), 2) / Number(centripetalAcceleration.value);
}