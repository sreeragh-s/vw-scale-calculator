# vw-scale-calculator

`vw-scale-calculator` is a utility package to calculate a scale factor based on the viewport width, with customizable reference points. This is especially useful for responsive web design where elements need to scale based on the user's screen size.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Examples](#examples)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## Installation

You can install `vw-scale-calculator` using npm:

```bash
npm install vw-scale-calculator
```

Or with yarn:

```bash
yarn add vw-scale-calculator
```

## Usage

First, import the `VWScaleCalculator` class and create an instance with your desired reference points.

### Importing and Initializing

```typescript
import { VWScaleCalculator, ScaleCalculatorOptions } from 'vw-scale-calculator';

// Define reference points and options
const options: ScaleCalculatorOptions = {
  referencePoints: [
    { width: 600, scale: 0.5 },
    { width: 1200, scale: 1.0 },
    { width: 1800, scale: 1.5 }
  ],
  minScale: 0.5,
  maxScale: 1.5
};

// Create an instance of VWScaleCalculator
const calculator = new VWScaleCalculator(options);

// Calculate the scale based on the current viewport width
const scale = calculator.calculateScale(window.innerWidth);
console.log(`Current scale: ${scale}`);

// Set up resize handling
const cleanupResizeListener = calculator.onResize((scale) => {
  console.log(`Updated scale on resize: ${scale}`);
});

// Call `cleanupResizeListener` to remove the event listener when no longer needed

```

## API

### `VWScaleCalculator`

#### Constructor

```typescript
new VWScaleCalculator(referencePoints: ReferencePoint[]);
```

- **referencePoints**: An array of `ReferencePoint` objects that define the widths and corresponding scale factors.

#### Methods

- **`calculateScale(viewportWidth: number): number`**

  Calculates the scale factor based on the provided viewport width.

  - **viewportWidth**: The current viewport width to calculate the scale for.

  Returns the calculated scale factor as a `number`.

- **`setReferencePoints(referencePoints: ReferencePoint[]): void`**

  Updates the reference points used for calculating the scale.

  - **referencePoints**: An array of new `ReferencePoint` objects.

### `ReferencePoint`

A TypeScript type defining the structure for a reference point:

```typescript
type ReferencePoint = {
  width: number; // The viewport width at which this scale should apply.
  scale: number; // The scale factor to use at the specified width.
};
```

## Examples

### Example: Dynamically Adjusting Element Scale

If you want to dynamically adjust an element's scale based on the window width, you can use the following code:

```typescript
import { VWScaleCalculator, ReferencePoint } from 'vw-scale-calculator';

const referencePoints: ReferencePoint[] = [
  { width: 1263, scale: 0.6 },
  { width: 1519, scale: 0.66 },
  { width: 1903, scale: 0.72 },
];

const calculator = new VWScaleCalculator(referencePoints);

const updateElementScale = () => {
  const scale = calculator.calculateScale(window.innerWidth);
  document.getElementById('scalable-element').style.transform = `scale(${scale})`;
};

window.addEventListener('resize', updateElementScale);
updateElementScale(); // Initialize on page load
```

## Development

### Prerequisites

- [Node.js](https://nodejs.org/) (version 12.x or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [TypeScript](https://www.typescriptlang.org/)

### Building the Project

To build the project, run:

```bash
npm run build
```

This will compile the TypeScript code into JavaScript and output it into the `dist` folder.

### Running Tests

If you have set up tests, you can run them using:

```bash
npm test
```

## Contributing

Contributions are welcome! Please fork the [Github](https://github.com/sreeragh-s/vw-scale-calculator) repository and submit a pull request for any features, bug fixes, or enhancements. Make sure to follow the code style and add relevant tests.

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/sreeragh-s/vw-scale-calculator/blob/main/LICENSE) file for details.
```

### How to Use the README

- Copy the content above into a new `README.md` file in the root of your project.
- Adjust any sections as necessary to fit your project specifics, especially under **Development** and **Contributing** if you have additional guidelines or tools.
- Make sure to update any placeholder text (e.g., "Your Name") with your actual details.

This README provides a thorough overview of your package, including installation, usage, and contribution guidelines, which will help users understand and utilize your package effectively.