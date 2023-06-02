import { ITemplateExample } from './types';

export function templateExample({ subject, field1, field2, field3 }: ITemplateExample) {
  return ` <div style="background-size: cover; background: #ededed; padding: 24px;">
<div
  style="
    width: 500px;
    margin: auto;
    background: white;
    border-radius: 32px;
    padding: 24px 0;
  "
>
  <img
    src="https://adasoftwarehouse.com/_next/static/images/LogoAdaName-0e8e17ba8186991ece3c1c56860f64d6.svg"
    alt=""
    style="margin: 0 auto; display: block; height: 87px;"
  />

  <div style="width: 328px; margin: 0 auto;">
    <h3 style="color: #000000; margin: 40px 0 24px; text-align: center;">
     ${subject}
    </h3>

    <p>
      <strong>Edificação: </strong>
      ${field1}
    </p>

    <p>
      <strong>Data do relato: </strong>
      ${field2}
    </p>

    <p><strong>Categoria:
    </strong>${field3}
    </p>

  </div>
</div>
</div>`;
}
