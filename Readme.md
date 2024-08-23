## Installation

```bash
npm install vw-scale-calculator
# or
yarn add vw-scale-calculator
```

## Usage

### Basic Usage

Import the `useViewportScale` hook from the package and pass your custom reference points to it. The hook will return the calculated scale based on the current viewport width.

```jsx
import React from 'react';
import useViewportScale from 'vw-scale-calculator';

function MyComponent() {
  // Define your reference points here
  const referencePoints = [
    { width: 1263, scale: 0.6 },
    { width: 1519, scale: 0.66 },
    { width: 1903, scale: 0.72 },
  ];

  // Use the hook to get the scale
  const scale = useViewportScale(referencePoints);

  return (
    <div style={{ transform: `scale(${scale})` }}>
      {/* Your content here */}
      <p>The current scale is: {scale.toFixed(2)}</p>
    </div>
  );
}

export default MyComponent;
```

### Function Usage

If you need to calculate the scale outside of a React component, you can use the `calculateScale` function directly:

```js
import { calculateScale } from 'vw-scale-calculator';

// Define your reference points
const referencePoints = [
  { width: 1263, scale: 0.6 },
  { width: 1519, scale: 0.66 },
  { width: 1903, scale: 0.72 },
];

// Calculate the scale for a specific viewport width
const viewportWidth = window.innerWidth;
const scale = calculateScale(viewportWidth, referencePoints);

console.log(`The scale is: ${scale}`);
```

## API

- **`useViewportScale(referencePoints)`**: React hook that returns the calculated scale based on the current viewport width and the provided reference points.
  - **Parameters**: 
    - `referencePoints` (Array): An array of objects where each object has:
      - `width` (Number): The viewport width at which the `scale` applies.
      - `scale` (Number): The scale factor corresponding to the `width`.
  - **Returns**: The calculated scale (Number) based on the viewport width and reference points.

- **`calculateScale(viewportWidth, referencePoints)`**: Function to calculate the scale based on a specific viewport width and reference points.
  - **Parameters**:
    - `viewportWidth` (Number): The viewport width for which the scale is calculated.
    - `referencePoints` (Array): An array of objects with `width` and `scale` properties.
  - **Returns**: The calculated scale (Number) for the given viewport width.

## Notes

- The hook automatically handles viewport resize events to recalculate the scale as needed.
- Ensure that `referencePoints` is an array with at least two points for proper interpolation.

## License

This package is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contributing

If you'd like to contribute to this package, please open an issue or a pull request on the [GitHub repository](https://github.com/yourusername/vw-scale-calculator).
```