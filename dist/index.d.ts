interface ReferencePoint {
    width: number;
    scale: number;
}
export declare function calculateScale(viewportWidth: number, referencePoints: ReferencePoint[]): number;
export declare function useViewportScale(referencePoints: ReferencePoint[]): number;
export {};
