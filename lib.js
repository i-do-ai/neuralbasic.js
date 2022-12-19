function Perceptron(options) {
if (!options || !options.learningRate || !options.bias || !options.inputsLength || !options.weights || !options.threshold) throw new Error('Please fill out the options correctly!');

this.run = function(inputs) {
  if (inputs.length != options.weights.length) throw new Error('Unexpected amount of inputs!');
  let sum = 0;
  for (let i = 0; i < inputs.length; i++) {
    sum += inputs[i] * options.weights[i];
  }
  return sum > options.threshold ? 1 : 0;
}

}
