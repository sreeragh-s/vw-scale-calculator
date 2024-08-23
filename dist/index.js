"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function useViewportScale(referencePoints) {
    var _a = (0, react_1.useState)(1), scale = _a[0], setScale = _a[1];
    var calculateScale = function () {
        var viewportWidth = window.innerWidth;
        var sortedPoints = __spreadArray([], referencePoints, true).sort(function (a, b) { return a.width - b.width; });
        var lowerBound = sortedPoints[0];
        var upperBound = sortedPoints[sortedPoints.length - 1];
        for (var i = 0; i < sortedPoints.length - 1; i++) {
            if (viewportWidth >= sortedPoints[i].width &&
                viewportWidth < sortedPoints[i + 1].width) {
                lowerBound = sortedPoints[i];
                upperBound = sortedPoints[i + 1];
                break;
            }
        }
        var widthRatio = (viewportWidth - lowerBound.width) /
            (upperBound.width - lowerBound.width);
        var calculatedScale = lowerBound.scale + widthRatio * (upperBound.scale - lowerBound.scale);
        return Math.max(0.5, Math.min(1, calculatedScale));
    };
    (0, react_1.useEffect)(function () {
        var handleResize = function () {
            setScale(calculateScale());
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return function () { return window.removeEventListener('resize', handleResize); };
    }, [referencePoints]);
    return scale;
}
exports.default = useViewportScale;
