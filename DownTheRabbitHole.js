// Spread

function spread(func, args) {
  return func.apply(this, args);
}

// Create String Method

String.prototype.isUpperCase = function isUpperCase(){
  return this.slice() === this.slice().toUpperCase() ? true: false;
};
