function Perceptron(options) {
if (!options || !options.inputsLength) throw new Error('Network options not filled correctly!');
if (!options.threshold) options.threshold = options.weights / 3 / 10;
if (!options.bias) options.bias = 1;
if (!options.learningRate) options.learningRate = 0.0001;
if (!options.weights) { options.weights = []; for (let i = 0; i < options.inputsLength; i++) options.weights.push(Math.random()); };
  
this.run = function(inputs) {
  if (inputs.length != options.weights.length) throw new Error('Unexpected amount of inputs!');
  let sum = 0;
  for (let i = 0; i < inputs.length; i++) {
    sum += inputs[i] * options.weights[i];
  }
  return sum > options.threshold ? 1 : 0;
}

}
