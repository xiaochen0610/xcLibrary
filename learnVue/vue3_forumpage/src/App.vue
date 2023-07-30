<template>
  <!-- vue3组件中的模版结构可以没有根标签 -->
  <h1>姓名：{{ person.name }}</h1>
  <button @click="sayHello">say</button>
</template>

<script>
import { reactive, ref } from 'vue'

//setup是vue3的新的配置项，值为一个函数
//没有setup写不了组合式api，组件中的数据 方法要配置在setup中
export default {
  name: 'App',
  setup() {
    //响应式数据用ref函数，基本类型和对象类型都能用，加工为 引用实现的实例对象 即引用对象
    // let name = ref('小猪佩奇')
    //reactive函数-响应式 将对象变为proxy的实例对象 数组也可以 hobby[0] = '11'
    // let age = reactive({})

    let person = reactive({
      name:'小猪佩奇',
      job:{
        type:'11',
        a:{
          b:{
            c:111
          }
        }
      }
    })
    //方法
    function sayHello() {
      // alert(`hello ${name.value} ${age}`)
    }

    //返回一个对象 常用
    return {
      person,
      // name,
      sayHello
    }

    //返回渲染函数
    // import { h } from 'vue'
    // return()=>h('h1', '小猪佩奇')
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
