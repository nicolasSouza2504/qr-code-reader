import { useFrameProcessor } from 'react-native-vision-camera';
import { useState } from 'react';
import { runOnJS } from 'react-native-reanimated';
import { scanBarcodes } from '.';
export function useScanBarcodes(types, options) {
  const [barcodes, setBarcodes] = useState([]);
  const frameProcessor = useFrameProcessor(frame => {
    'worklet';

    const detectedBarcodes = scanBarcodes(frame, types, options);
    runOnJS(setBarcodes)(detectedBarcodes);
  }, []);
  return [frameProcessor, barcodes];
}
//# sourceMappingURL=hook.js.map