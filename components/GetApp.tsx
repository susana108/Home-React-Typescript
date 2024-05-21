import React from 'react'
import Button from './Button'
import Image from 'next/image'

const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40  text-black lg:bold-64 xl:max-w-[320px]">Vamos Pescaa!</h2>
          <p className="regular-16  text-gray-30">A avaliação é crucial em diversos aspectos da vida, como na educação, no trabalho e no desenvolvimento pessoal. Ela permite medir progresso, identificar áreas de melhoria e orientar decisões. No contexto educacional, ajuda a personalizar o ensino e promover um aprendizado eficaz. No mundo profissional, impulsiona o crescimento organizacional e individual. Na esfera pessoal, facilita o autoconhecimento e o desenvolvimento de habilidades. </p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button 
              type="button"
              title="Avaliar Barco"
              icon="/apple.svg"
              variant="btn_green"
              full
            />
            <Button 
              type="button"
              title="Reportar"
              icon="/android.svg"
              variant="btn_green"
              full
            />
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end">
        </div>
      </div>
    </section>
  )
}

export default GetApp