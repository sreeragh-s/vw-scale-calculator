import { ReferencePoint, ScaleCalculatorOptions } from './types';

export class VWScaleCalculator {
  private referencePoints: ReferencePoint[];
  private minScale: number;
  private maxScale: number;

  constructor(options: ScaleCalculatorOptions) {
    this.referencePoints = options.referencePoints.sort((a, b) => a.width - b.width);
    this.minScale = options.minScale ?? 0.5;
    this.maxScale = options.maxScale ?? 1.0;
  }

  calculateScale(viewportWidth: number): number {
    let lowerBound = this.referencePoints[0];
    let upperBound = this.referencePoints[this.referencePoints.length - 1];

    for (let i = 0; i < this.referencePoints.length - 1; i++) {
      if (
        viewportWidth >= this.referencePoints[i].width &&
        viewportWidth < this.referencePoints[i + 1].width
      ) {
        lowerBound = this.referencePoints[i];
        upperBound = this.referencePoints[i + 1];
        break;
      }
    }

    const widthRatio =
      (viewportWidth - lowerBound.width) /
      (upperBound.width - lowerBound.width);

    const calculatedScale =
      lowerBound.scale + widthRatio * (upperBound.scale - lowerBound.scale);

    return Math.max(this.minScale, Math.min(this.maxScale, calculatedScale));
  }

  onResize(callback: (scale: number) => void): () => void {
    const handleResize = () => {
      const scale = this.calculateScale(window.innerWidth);
      callback(scale);
    };

    handleResize(); // Initial call
    window.addEventListener('resize', handleResize);

    // Return a function to remove the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }
}