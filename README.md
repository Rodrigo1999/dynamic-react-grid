# dinamic-grid

### Grid dinâmica para react, responsíva e inspirada na grade do material-ui, no entanto trazendo maiores simplicidades, funcionalidades e customizações.

Essa lib foi inspirada na [Grid](https://material-ui.com/pt/components/grid/) do material-ui, contendo atribuições semelhantes.

![Imagem de exemplo](https://uploaddeimagens.com.br/images/003/272/326/full/Captura_de_tela_de_2021-06-02_21-51-52.png?1622681532)
# Props:

 Nome | valor |  Descrição  |
| ----- | -------- | ----------- |
| row | true/false | Se atribuído, indica ao componente que ele deve ser uma linha |
| xs, xs-m, sm, sm-m, md, md-m, lg, lg-m, xl | recomendável: 0...12 (mas pode ser do 0 ao infinito, porém isso é loucura) | são os breakpoints padrão, mas você pode customizar e criar os seus, mais tarde veremos isso. Se |
| direction | row, row-reverse, column, column-reverse, inherit, initial, unset  | valores do flex-direction |
| justify | `center` `start` `end` `flex-start` `flex-end` `left` `right` `normal` `space-between` `space-around` `space-evenly` `stretch` `safe center` `unsafe center` `inherit` `initial` `unset` | valores do justify-content |