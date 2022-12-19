# NeuralBasic.js
**NeuralBasic.js** is a basic javascript library for intermediate AI engineers to develop Neural Networks faster and easier than it ever was before.
## Examples
Here is a simple example of building a perceptron:
```
let net = new Perceptron({ learningRate: 0.0001, bias: 1, inputsLength: 3, weights: [0.9, 0.9, 1], threshold: 3 * 3 / 10});

console.log(net.run([1, 0, 0])); // returns 0
console.log(net.run([1, 0, 1])); // returns 1
console.log(net.run([1, 1, 0])); // returns 1
```
