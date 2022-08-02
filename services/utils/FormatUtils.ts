
/**
 *
 * @param {string | number} value
 * @returns {string}
 */
export function formatNumber(value: string | number) {
  if (!value) return "0";

  value = parseInt(value.toString()) ? parseInt(value.toString()) : 0;
  value = Number(value).valueOf().toString();
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}