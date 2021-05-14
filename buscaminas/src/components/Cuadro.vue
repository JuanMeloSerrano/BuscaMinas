<template>
  <div class="cuadro" :class="!info.inicial || info.suspenso ? 'cuadro-vacio': 'cuadro-inicial'">
    <span :class="clase">{{ valor }}</span>
  </div>
</template>

<script>
export default {
  props: ['info'],
  computed: {
    valor () {
      if (this.info.inicial) {
        if (this.info.bandera) {
          return '🚩'
        }
        else {
          return ''
        }
      }
      else {
        return this.info.valor
      }
    },
    clase () {
      if (this.info.inicial) {
        if (this.info.bandera) {
          return 'bandera'
        }
        else {
          return ''
        }
      }
      else if (this.info.valor == '❌') {
        return 'bandera-falsa'
      }
      else {
        return this.info.claseValor
      }
    }
  }
}
</script>


<style>

.bandera {
  font-size: 12px;
}

.bandera-falsa {
  font-size: 18px;
}

.cuadro {
  display: grid;
  justify-items: center;
  align-items: center;
}
.cuadro-inicial{
    width: 20px;
    height: 20px;
    background-color: #228B22;
    border-top-color: #32CD32;
    border-left-color: #32CD32;
    border-right-color: #008000;
    border-bottom-color: #008000;
    border-style: solid;
    border-width: 3px;
    cursor: pointer;
}
.cuadro-vacio{
    width: 25px;
    height: 25px;
    background-color: #F4A460;
    border-right-color: #CD853F;
    border-bottom-color: #CD853F;
    border-top-width: 0;
    border-left-width: 0;
    border-bottom-width: 1px;
    border-right-width: 1px;
    border-style: solid;
    cursor: default;
}

</style>
