export interface ReferencePoint {
    width: number;
    scale: number;
  }
  
  export interface ScaleCalculatorOptions {
    referencePoints: ReferencePoint[];
    minScale?: number;
    maxScale?: number;
  }
  