export const imcLevels = [
  {
    id: "imc1",
    title: "Magreza",
    color: "#98a2ac",
    icon: "down",
    imc: [0, 18.5],
    yourImc: "",
  },
  {
    id: "imc2",
    title: "Normal",
    color: "#0eab68",
    icon: "up",
    imc: [18.6, 24.9],
    yourImc: "",
  },
  {
    id: "imc3",
    title: "Sobrepeso",
    color: "#e3b03b",
    icon: "down",
    imc: [25, 30],
    yourImc: "",
  },
  {
    id: "imc4",
    title: "Obesidade",
    color: "#c54041",
    icon: "down",
    imc: [30.1, 99],
    yourImc: "",
  },
];

export function calculateImc(heigth, weight) {
  const imc = weight / (heigth * heigth);
  for (let i in imcLevels) {
    if (imc >= imcLevels[i].imc[0] && imc <= imcLevels[i].imc[1]) {
      let imcLevelsCopy = { ...imcLevels[i] };
      imcLevelsCopy.yourImc = Number(parseFloat(imc.toFixed(2)));
      return imcLevelsCopy;
    }
  }
  return null;
}
