export function formatNumber(value) {
  let str = value.toString();

  let partes = str.split(".");

  partes[0] = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  if (partes.length === 1) {
    partes.push("00");
  }

  if (partes[1].length < 2) {
    partes[1] += "0";
  }

  return partes.join(",");
}
