interface ReferencePoint {
    width: number;
    scale: number;
  }
  
  export function calculateScale(
    viewportWidth: number,
    referencePoints: ReferencePoint[]
  ): number {
    if (referencePoints.length < 2) {
      throw new Error('At least two reference points are required');
    }
  
    const sortedReferencePoints = [...referencePoints].sort((a, b) => a.width - b.width);
    let lowerBound = sortedReferencePoints[0];
    let upperBound = sortedReferencePoints[sortedReferencePoints.length - 1];
  
    for (let i = 0; i < sortedReferencePoints.length - 1; i++) {
      if (
        viewportWidth >= sortedReferencePoints[i].width &&
        viewportWidth < sortedReferencePoints[i + 1].width
      ) {
        lowerBound = sortedReferencePoints[i];
        upperBound = sortedReferencePoints[i + 1];
        break;
      }
    }
  
    const widthRatio =
      (viewportWidth - lowerBound.width) /
      (upperBound.width - lowerBound.width);
    const calculatedScale =
      lowerBound.scale + widthRatio * (upperBound.scale - lowerBound.scale);
  
    return Math.max(0.5, Math.min(1, calculatedScale));
  }
  
  export function createScaleCalculator(referencePoints: ReferencePoint[]) {
    return (viewportWidth: number) => calculateScale(viewportWidth, referencePoints);
  }