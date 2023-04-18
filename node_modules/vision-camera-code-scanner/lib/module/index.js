/**
 * @see https://developers.google.com/android/reference/com/google/mlkit/vision/barcode/Barcode.BarcodeFormat
 */
export let BarcodeFormat;
/**
 * @see https://developers.google.com/android/reference/com/google/mlkit/vision/barcode/Barcode.BarcodeValueType
 */

(function (BarcodeFormat) {
  BarcodeFormat[BarcodeFormat["UNKNOWN"] = -1] = "UNKNOWN";
  BarcodeFormat[BarcodeFormat["ALL_FORMATS"] = 0] = "ALL_FORMATS";
  BarcodeFormat[BarcodeFormat["CODE_128"] = 1] = "CODE_128";
  BarcodeFormat[BarcodeFormat["CODE_39"] = 2] = "CODE_39";
  BarcodeFormat[BarcodeFormat["CODE_93"] = 4] = "CODE_93";
  BarcodeFormat[BarcodeFormat["CODABAR"] = 8] = "CODABAR";
  BarcodeFormat[BarcodeFormat["DATA_MATRIX"] = 16] = "DATA_MATRIX";
  BarcodeFormat[BarcodeFormat["EAN_13"] = 32] = "EAN_13";
  BarcodeFormat[BarcodeFormat["EAN_8"] = 64] = "EAN_8";
  BarcodeFormat[BarcodeFormat["ITF"] = 128] = "ITF";
  BarcodeFormat[BarcodeFormat["QR_CODE"] = 256] = "QR_CODE";
  BarcodeFormat[BarcodeFormat["UPC_A"] = 512] = "UPC_A";
  BarcodeFormat[BarcodeFormat["UPC_E"] = 1024] = "UPC_E";
  BarcodeFormat[BarcodeFormat["PDF417"] = 2048] = "PDF417";
  BarcodeFormat[BarcodeFormat["AZTEC"] = 4096] = "AZTEC";
})(BarcodeFormat || (BarcodeFormat = {}));

export let BarcodeValueType;
/**
 * @see https://developers.google.com/android/reference/com/google/mlkit/vision/barcode/Barcode.Address.AddressType
 */

(function (BarcodeValueType) {
  BarcodeValueType[BarcodeValueType["UNKNOWN"] = 0] = "UNKNOWN";
  BarcodeValueType[BarcodeValueType["CONTACT_INFO"] = 1] = "CONTACT_INFO";
  BarcodeValueType[BarcodeValueType["EMAIL"] = 2] = "EMAIL";
  BarcodeValueType[BarcodeValueType["ISBN"] = 3] = "ISBN";
  BarcodeValueType[BarcodeValueType["PHONE"] = 4] = "PHONE";
  BarcodeValueType[BarcodeValueType["PRODUCT"] = 5] = "PRODUCT";
  BarcodeValueType[BarcodeValueType["SMS"] = 6] = "SMS";
  BarcodeValueType[BarcodeValueType["TEXT"] = 7] = "TEXT";
  BarcodeValueType[BarcodeValueType["URL"] = 8] = "URL";
  BarcodeValueType[BarcodeValueType["WIFI"] = 9] = "WIFI";
  BarcodeValueType[BarcodeValueType["GEO"] = 10] = "GEO";
  BarcodeValueType[BarcodeValueType["CALENDAR_EVENT"] = 11] = "CALENDAR_EVENT";
  BarcodeValueType[BarcodeValueType["DRIVER_LICENSE"] = 12] = "DRIVER_LICENSE";
})(BarcodeValueType || (BarcodeValueType = {}));

export let AddressType;
/**
 * @see https://developers.google.com/android/reference/com/google/mlkit/vision/barcode/Barcode.Address
 */

(function (AddressType) {
  AddressType[AddressType["UNKNOWN"] = 0] = "UNKNOWN";
  AddressType[AddressType["WORK"] = 1] = "WORK";
  AddressType[AddressType["HOME"] = 2] = "HOME";
})(AddressType || (AddressType = {}));

/**
 * @see https://developers.google.com/android/reference/com/google/mlkit/vision/barcode/Barcode.Email.FormatType
 */
export let EmailType;
/**
 * @see https://developers.google.com/android/reference/com/google/mlkit/vision/barcode/Barcode.Email
 */

(function (EmailType) {
  EmailType[EmailType["UNKNOWN"] = 0] = "UNKNOWN";
  EmailType[EmailType["WORK"] = 1] = "WORK";
  EmailType[EmailType["HOME"] = 2] = "HOME";
})(EmailType || (EmailType = {}));

/**
 * @see https://developers.google.com/android/reference/com/google/mlkit/vision/barcode/Barcode.Phone.FormatType
 */
export let PhoneType;
/**
 * @see https://developers.google.com/android/reference/com/google/mlkit/vision/barcode/Barcode.Phone
 */

(function (PhoneType) {
  PhoneType[PhoneType["UNKNOWN"] = 0] = "UNKNOWN";
  PhoneType[PhoneType["WORK"] = 1] = "WORK";
  PhoneType[PhoneType["HOME"] = 2] = "HOME";
  PhoneType[PhoneType["FAX"] = 3] = "FAX";
  PhoneType[PhoneType["MOBILE"] = 4] = "MOBILE";
})(PhoneType || (PhoneType = {}));

/**
 * @see https://developers.google.com/android/reference/com/google/mlkit/vision/barcode/Barcode.WiFi.EncryptionType
 */
export let EncryptionType;
/**
 * @see https://developers.google.com/android/reference/com/google/mlkit/vision/barcode/Barcode.WiFi
 */

(function (EncryptionType) {
  EncryptionType[EncryptionType["OPEN"] = 1] = "OPEN";
  EncryptionType[EncryptionType["WPA"] = 2] = "WPA";
  EncryptionType[EncryptionType["WEP"] = 3] = "WEP";
})(EncryptionType || (EncryptionType = {}));

/**
 * Scans barcodes in the passed frame with MLKit
 *
 * @param frame Camera frame
 * @param types Array of barcode types to detect (for optimal performance, use less types)
 * @returns Detected barcodes from MLKit
 */
export function scanBarcodes(frame, types, options) {
  'worklet'; // @ts-ignore
  // eslint-disable-next-line no-undef

  return __scanCodes(frame, types, options);
}
export * from './hook';
//# sourceMappingURL=index.js.map