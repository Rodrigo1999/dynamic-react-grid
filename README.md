# dinamic-grid

### Grid dinâmica para react, responsíva e inspirada na grade do material-ui, no entanto trazendo maiores simplicidades, funcionalidades e customizações.

Essa lib foi inspirada na [Grid](https://material-ui.com/pt/components/grid/) do material-ui, contendo atribuições semelhantes.

![Imagem de exemplo](https://uploaddeimagens.com.br/images/003/272/326/full/Captura_de_tela_de_2021-06-02_21-51-52.png?1622681532)
## Props:

 Nome | valor |  Descrição  |
| ----- | -------- | ----------- |
| row | `true/false` | Se atribuído, indica ao componente que ele deve ser uma linha |
| xs, xs-m, sm, sm-m, md, md-m, lg, lg-m, xl | recomendável: `0...12` (mas pode ser do 0 ao infinito, porém isso é loucura) | São os breakpoints padrão, mas você pode customizar e criar os seus, mais tarde veremos isso. Se |
| spacing | `0...infinity` | Definito na tag `Grid` com props `row`. Indica o Espaçamento das colunas, vai de 0 ao infinito. Padrão `0` |
| direction | row, row-reverse, column, column-reverse, inherit, initial, unset  | valores do flex-direction |
| justify | `center` `flex-start` `flex-end` `space-between` `space-around` `inherit` `initial` `unset` | valores do justify-content |
| align | `center` `flex-start` `flex-end` `space-between` `space-around` `stretch` `inherit` `initial` `unset` | valores do align-content |
| alignItems | `normal` `stretch` `center` `start` `end` `flex-start` `flex-end` `self-start` `self-end` `baseline` `first baseline` `last baseline` `safe center` `unsafe center` `inherit` `initial` `unset` | valores do align-items |
| wrap | `nowrap` `wrap` `wrap-reverse` `inherit` `initial` `unset` | valores do flex-wrap |
| self | `auto` `center` `flex-start` `flex-end` `baseline` `stretch` `inherit` `initial` `unset` | valores do align-self. Padrão `wrap` |
| order | `0...infinity` | valores do order |


## Ramificações dos breakpoints:

eu também posso colocar ramificações de breakpoints para as props mencionadas a cima, exemplo:

```jsx
    import Grid from 'dinamic-grid'

    <Grid row spacing={2} ou spacing={{xs:1, sm:4, md:3, /*...*/}}>
        <Grid order={1} ou order={{xs:1, sm:2, md:4, /*...*/}}>
        </Grid>
    </Grid>

    <Grid row direction='row' ou direction={{xs:'row', sm:'row-reverse', md:'column-reverse', /*...*/}}>
        ...
    </Grid>
    
```

Isso vale para todas as props a cima, exceto a props `row`

## breakpoints:

Por padrão há os seguintes pontos de quebra:

```js
    {
        xs: 0,
        'xs-m': 300,
        sm: 600,
        'sm-m': 780,
        md: 960,
        'md-m': 1120,
        lg: 1280,
        'lg-m': 1600,
        xl: 1920
    }
```

No entanto vc pode cirar seus próprios pontos:

```jsx 
    import {WithBreakpoints} from 'dinamic-grid'

    let Grid = WithBreakpoints({
        xs:0,
        sm:400,
        jsIsLife:600,
        reactIsGood:1000
    })

    <Grid row>
        ...
    </Grid>
```