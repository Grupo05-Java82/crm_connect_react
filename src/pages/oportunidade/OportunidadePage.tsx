import type Oportunidade from "../../models/Oportunidade";
import { useEffect, useState } from "react";
import { listar } from "../../services/Service";
import CardOportunidade from "../../components/oportunidade/CardOportunidade";

function OportunidadePage() {

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [oportunidade, setOportunidades] = useState<Oportunidade[]>([]);

  async function buscarOportunidade() {
    try {
      setIsLoading(true);
      await listar("/oportunidades", setOportunidades);
    } catch (error: any) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    buscarOportunidade();
  }, [oportunidade.length]);

  return (
    <>
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col mx-2">
          {!isLoading && oportunidade.length === 0 && (
            <span className="text-3xl text-center my-8">
              Nenhuma Oportunidade foi encontrada!
            </span>
          )}

          <div
            className="grid grid-cols-1 md:grid-cols-2 
                                    lg:grid-cols-3 gap-8"
          >
            {oportunidade.map((oportunidade) => (
              <CardOportunidade key={oportunidade.id} oportunidade={oportunidade} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default OportunidadePage;
