function calculateScale(viewportWidth, referencePoints) {
    referencePoints.sort((a, b) => a.width - b.width);
    let lowerBound = referencePoints[0];
    let upperBound = referencePoints[referencePoints.length - 1];
  
    for (let i = 0; i < referencePoints.length - 1; i++) {
      if (
        viewportWidth >= referencePoints[i].width &&
        viewportWidth < referencePoints[i + 1].width
      ) {
        lowerBound = referencePoints[i];
        upperBound = referencePoints[i + 1];
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
  
  function useViewportScale(referencePoints) {
    if (!Array.isArray(referencePoints) || referencePoints.length < 2) {
      throw new Error("Reference points must be an array with at least two items.");
    }
  
    const [scale, setScale] = useState(calculateScale(window.innerWidth, referencePoints));
  
    useEffect(() => {
      const handleResize = () => {
        setScale(calculateScale(window.innerWidth, referencePoints));
      };
  
      handleResize(); 
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, [referencePoints]);
  
    return scale;
  }
  
  export default useViewportScale;
  export { calculateScale };
  