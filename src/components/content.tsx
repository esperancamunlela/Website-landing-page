import type { dadosHeader } from '../types/headerInfo'

export const Content = ({ nome }: dadosHeader) => {
  return (
    <div>
      <h2>
        Olá,{nome}, aqui saberás um pouco mais sobre estatística e porquê escolher este curso
      </h2>
      <h3>O que é estatística?</h3>
      <img
        src="https://th.bing.com/th/id/OIP.z868S8xeQIFU9kzAGvTDHwHaE8?cb=iwc1&rs=1&pid=ImgDetMain"
        alt="Imagem de Estatistica"
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem
        officia veritatis minus eum odio? Placeat quasi quos ipsum omnis dolore
        aperiam error repellendus eum illum. Similique numquam esse saepe
        quibusdam.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
        commodi tempore tenetur itaque veniam dignissimos doloremque nostrum
        expedita iusto eius, necessitatibus, beatae vel eveniet non cumque hic
        inventore labore! Perferendis!
      </p>
      <h3>Motivos para não desistir do curso</h3>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, cum
      voluptatem consequatur sint, ducimus rem placeat sit quia expedita vero
      vel fugiat molestias excepturi? Optio, placeat. Impedit vitae quaerat
      incidunt?
      <ol>
        <li>É bom</li>
        <li>É interessante</li>
        <li>É simples</li>
        <li>Muito mais...</li>
      </ol>
    </div>
  )
}
