# dinamic-grid

### Grid dinâmica para react, responsíva e inspirada na grade do material-ui, no entanto trazendo maiores simplicidades, funcionalidades e customizações.

Essa lib foi inspirada na [Grid](https://material-ui.com/pt/components/grid/) do material-ui, contendo atribuições semelhantes.

![Imagem de exemplo](https://uploaddeimagens.com.br/images/003/272/326/full/Captura_de_tela_de_2021-06-02_21-51-52.png?1622681532)
## Props:

 Nome | valor |  Descrição  |
| ----- | -------- | ----------- |
| row | `true/false` | Se atribuído, indica ao componente que ele deve ser uma linha |
| xs, xs-m, sm, sm-m, md, md-m, lg, lg-m, xl | recomendável: `0...12` (mas pode ser do 0 ao infinito, porém isso é loucura) | São os breakpoints padrão, mas você pode customizar e criar os seus (mais tarde veremos isso). |
| spacing | `0...infinity` | Definito na tag `Grid` com props `row`. Indica o Espaçamento das colunas, vai de 0 ao infinito. Padrão `0` |
| direction | `row` `row-reverse` `column` `column-reverse` `inherit` `initial` `unset` | valores do flex-direction |
| justify | `center` `flex-start` `flex-end` `space-between` `space-around` `inherit` `initial` `unset` | valores do justify-content |
| align | `center` `flex-start` `flex-end` `space-between` `space-around` `stretch` `inherit` `initial` `unset` | valores do align-content |
| alignItems | `normal` `stretch` `center` `start` `end` `flex-start` `flex-end` `self-start` `self-end` `baseline` `first baseline` `last baseline` `safe center` `unsafe center` `inherit` `initial` `unset` | valores do align-items |
| wrap | `nowrap` `wrap` `wrap-reverse` `inherit` `initial` `unset` | valores do flex-wrap |
| self | `auto` `center` `flex-start` `flex-end` `baseline` `stretch` `inherit` `initial` `unset` | valores do align-self. Padrão `wrap` |
| order | `0...infinity` | valores do order |


## Ramificações dos breakpoints:

eu também posso colocar ramificações de breakpoints para as props mencionadas acima, exemplo:

```jsx
    import Grid from 'dinamic-grid'

    <Grid row spacing={2} ou spacing={{xs:1, sm:4, md:3, /*...*/}}>
        <Grid order={1} ou order={{xs:1, sm:2, md:4, /*...*/}}>
        </Grid>
    </Grid>

    <Grid row direction='row' ou direction={{xs:'row', sm:'row-reverse', md:'column-reverse', /*...*/}}>
        <Grid xs={12} md={6}>
        </Grid>
    </Grid>
    
```

Isso vale para todas as props acima, exceto a props `row`

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

No entanto vc pode criar seus próprios pontos:

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
> você também pode usar window.breakpoints = {/*...*/} que o dinamic-grid irá detectar automaticamente, mas não é recomendo; caso vc esteja usando react pode ser, mas se for next não recomendo devido a problemas relacionados à renderizações do lado do servidor, pra reverter isso no lugar de window vc pode usar globalThis, mas aí surge também questões relacionadas à versão javascript ou node.

## utilizades públicas:

úteis para serem usadas com styled-components

```jsx
    import {media, mapObject} from 'dinamic-grid'


    styled.div(props => media(breakpoints)({
        width:{xs:20, md:'50%', sm:'100vw'} //ou width:100
        //ou
        width: mapObject({xs:20, sm:30, md:40}, [key, val] => `calc(100 - ${val}px)`) // retorno {xs:'calc(100 - 20px)', sm:'calc(100 - 30px)', ...}
        //ou 
        width: mapObject({xs:20, sm:30, md:40}, [key, val] => [`${key}-m`, `calc(100 - ${val}px)`]) // retorno {xs-m:'calc(100 - 20px)', sm-m:'calc(100 - 30px)', ...}
    })
```