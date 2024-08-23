

# vw-scale-calculator

`vw-scale-calculator` is a React hook designed to dynamically scale components based on the viewport width. It allows you to create responsive and adaptable user interfaces that automatically adjust their scale as the window size changes.

## Installation

To get started with `vw-scale-calculator`, you need to install it from npm. You can do this using either npm or Yarn:

```bash
npm install vw-scale-calculator
```

or

```bash
yarn add vw-scale-calculator
```

## Usage

### Importing the Hook

First, import the `useViewportScale` hook into your React component:

```tsx
import React from 'react';
import useViewportScale from 'vw-scale-calculator';
```

### Defining Reference Points

Create an array of reference points that define how the scale should change based on viewport width. Each reference point is an object with a `width` and a corresponding `scale` value.

```tsx
const referencePoints = [
  { width: 1263, scale: 0.6 },
  { width: 1519, scale: 0.66 },
  { width: 1903, scale: 0.72 },
];
```

### Using the Hook in a Component

Use the `useViewportScale` hook in your component, passing the reference points array as an argument. The hook returns the current scale value, which you can then use to adjust the style or layout of your component.

```tsx
const MyComponent: React.FC = () => {
  // Get the current scale based on the viewport width
  const scale = useViewportScale(referencePoints);

  return (
    <div style={{ transform: `scale(${scale})`, border: '1px solid black', padding: '20px' }}>
      This content scales with the viewport width.
    </div>
  );
};

export default MyComponent;
```

### Example

Here’s a complete example that demonstrates how to use `useViewportScale`:

```tsx
import React from 'react';
import useViewportScale from 'vw-scale-calculator';

// Define the reference points
const referencePoints = [
  { width: 1263, scale: 0.6 },
  { width: 1519, scale: 0.66 },
  { width: 1903, scale: 0.72 },
];

const MyComponent: React.FC = () => {
  // Calculate the scale based on the viewport width
  const scale = useViewportScale(referencePoints);

  return (
    <div style={{ transform: `scale(${scale})`, border: '1px solid black', padding: '20px' }}>
      This content scales with the viewport width.
    </div>
  );
};

export default MyComponent;
```

## API

### `useViewportScale(referencePoints: ReferencePoint[])`

- **Parameters**
  - `referencePoints`: An array of objects where each object contains:
    - `width`: The viewport width at which the scale changes (number).
    - `scale`: The scale value corresponding to the viewport width (number).

- **Returns**
  - The calculated scale value based on the current viewport width (number).

## License

This package is licensed under the [MIT License](https://github.com/sreeragh-s/vw-scale-calculator/blob/main/LICENSE).

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository on [GitHub](https://github.com/sreeragh-s/vw-scale-calculator/blob/main/LICENSE).
2. Create a new branch for your feature or fix.
3. Make your changes and test thoroughly.
4. Submit a pull request with a clear description of your changes.

## Contact

For questions or support, please open an issue on the GitHub repository or contact the author directly.

## Acknowledgments

Thank you to the contributors and the open-source community for their support and inspiration.
```

This `README.md` file includes sections on installation, usage, API details, and more, providing clear guidance for users to get started with the `vw-scale-calculator` package.