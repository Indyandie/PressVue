# آموزش Vue

[[toc]]

## Interpolation


``` v-pre
{{ 1 + 24 }}
```
⬇️<br/>
{{ 1 + 1 }}


## Directives

``` html
<ul v-for="i in 3">
  <li>{{ i }} </li>
</ul>
```
⬇️
<ul v-for="i in 3">
  <li>{{ i }} </li>
</ul>


## Escaping
Display raw vue.

``` md
::: v-pre
`{{ 2 + 424 }}`
:::
```
⬇️ <br/>
::: v-pre
`{{ 2 + 424 }}`
:::

## Components

### File Tree
``` md{4}
.
└─ .vuepress
   └─ components
      ├─ Beep.vue
      └─ Circus
         └─ Creep.vue
```

### Beep Component
``` html
<Beep/> <!-- Beep vue component-->
<Creep/> <!-- Creep vue component in /Circus-->
```
⬇️
<br><br>
<Beep/>
<Circus-Creep/>
