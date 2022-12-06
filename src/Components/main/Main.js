import React, { useContext } from "react";
import { imcLevels, calculateImc } from "../../Helpers/Helper";
import { BackButton, GridItem } from "../grid";
import { MainWrapper, SectionLeft, SectionRigth } from "./MainStyle";
import { GlobalContext } from "../../GlobalContext";

import Button from "../form/Button";
import Input from "../form/Input";
import Loading from "../loading/Loading";
export const Main = () => {
  const [weight, setWeight] = React.useState(0);
  const [height, setHeight] = React.useState(0);
  const [result, setResult] = React.useState(null);

  const { loading, setLoading } = useContext(GlobalContext);

  function handleSubmit(event) {
    event.preventDefault();
    setResult(calculateImc(weight, height));
    setLoading(true);
    setTimeout(() => {
      setLoading(null);
    }, 400);
  }

  function handleBack() {
    setResult(null);
    setLoading(true);
    setTimeout(() => {
      setLoading(null);
    }, 400);
  }

  return (
    <MainWrapper>
      <SectionLeft>
        <h1>Calcule seu IMC.</h1>
        <p className="imcDescription">
          IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela
          Organização Mundial de Saúde para calcular o peso ideal de cada
          pessoa.
        </p>
        <form onSubmit={handleSubmit}>
          <Input
            placeholder="Digite a sua altura. Ex: 1.5(em metros)"
            name="weight"
            type="number"
            value={weight > 0 ? weight : ""}
            setValue={setWeight}
          />
          <Input
            placeholder="Digite o seu peso. Ex: 75.1(em kg)"
            name="height"
            type="number"
            value={height > 0 ? height : ""}
            setValue={setHeight}
          />
          <Button disabled={weight && height ? false : true}>Calcular</Button>
        </form>
      </SectionLeft>

      <SectionRigth result={result}>
        {!loading &&
          !result &&
          imcLevels.map(({ id, title, color, icon, imc }) => {
            return (
              <GridItem
                result={result}
                key={id}
                title={title}
                color={color}
                icon={icon}
                imc={imc}
              />
            );
          })}
        {loading && <Loading />}
        {!loading && result && (
          <>
            <GridItem
              result={result}
              key={result.id}
              title={result.title}
              color={result.color}
              icon={result.icon}
              imc={result.imc}
            />
            <BackButton onClick={handleBack} />
          </>
        )}
      </SectionRigth>
    </MainWrapper>
  );
};

export default Main;
