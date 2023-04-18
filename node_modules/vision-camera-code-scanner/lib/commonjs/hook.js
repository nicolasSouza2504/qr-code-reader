"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useScanBarcodes = useScanBarcodes;

var _reactNativeVisionCamera = require("react-native-vision-camera");

var _react = require("react");

var _reactNativeReanimated = require("react-native-reanimated");

var _ = require(".");

function useScanBarcodes(types, options) {
  const [barcodes, setBarcodes] = (0, _react.useState)([]);
  const frameProcessor = (0, _reactNativeVisionCamera.useFrameProcessor)(frame => {
    'worklet';

    const detectedBarcodes = (0, _.scanBarcodes)(frame, types, options);
    (0, _reactNativeReanimated.runOnJS)(setBarcodes)(detectedBarcodes);
  }, []);
  return [frameProcessor, barcodes];
}
//# sourceMappingURL=hook.js.map