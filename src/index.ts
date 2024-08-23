import { useState, useEffect } from 'react';

interface ReferencePoint {
  width: number;
  scale: number;
}

function useViewportScale(referencePoints: ReferencePoint[]) {
  const [scale, setScale] = useState<number>(1);

  const calculateScale = () => {
    const viewportWidth = window.innerWidth;
    const sortedPoints = [...referencePoints].sort((a, b) => a.width - b.width);
    let lowerBound = sortedPoints[0];
    let upperBound = sortedPoints[sortedPoints.length - 1];

    for (let i = 0; i < sortedPoints.length - 1; i++) {
      if (
        viewportWidth >= sortedPoints[i].width &&
        viewportWidth < sortedPoints[i + 1].width
      ) {
        lowerBound = sortedPoints[i];
        upperBound = sortedPoints[i + 1];
        break;
      }
    }

    const widthRatio =
      (viewportWidth - lowerBound.width) /
      (upperBound.width - lowerBound.width);
    const calculatedScale =
      lowerBound.scale + widthRatio * (upperBound.scale - lowerBound.scale);

    return Math.max(0.5, Math.min(1, calculatedScale));
  };

  useEffect(() => {
    const handleResize = () => {
      setScale(calculateScale());
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [referencePoints]);

  return scale;
}

export default useViewportScale;
