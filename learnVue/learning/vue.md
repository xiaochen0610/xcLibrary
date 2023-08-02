
# 没吃到的基础
## js
### 大写
.toUpperCase()
### 当前时间戳
Date.now()


# 基础

## 模版语法

### 插值语法
往往用于标签体
    {{表达式}}
```
  <div id="root">
    <h1>你好，{{ name }}</h1>
  </div>

  <script>
    new Vue({
        el:'#root',
        data:{
          name:'jack'
        }
      })
  </script>
```

### 指令语法
用于解析标签：标签属性 标签体内容 绑定时间
v-bind:  可以简写为 :

```
    <a v-bind:href="url"></a>
    //<a :href="url"></a>
    //绑定href,将“”内容看作表达式,将url看作属性或方法
    <script>
    new Vue({
        el:'#root',
        data:{
          url:'http://'
        }
      })
  </script>
```

## 数据绑定

v两种数据绑定的方式：
1. 单向绑定(v-bind):数据只能从data流向页面
2. 双向绑定(v-module):数据不仅能从data流向页面,还可以从页面流向data
- 备注:1\双向绑定一般都应用在表单类元素上 input select   2\v-modul:value 可以简写为v-module

```
    <div id="root">
        单向数据绑定：<input type="text" v-bind:value="name"><br>
        双向数据绑定：<input type="text" v-module:value="name">
        //v-module只能用在有value值的地方 如表单类元素 输入类元素
        //简写
        单向数据绑定：<input type="text" :value="name"><br>
        双向数据绑定：<input type="text" v-module="name">
    </div>
```

## el与data两种写法
1.el有2种写法
	(1).new Vue时候配置el属性。
	(2).先创建Vue实例，随后再通过vm.$mount('#root')指定el的值。
2.data有2种写法
	(1).对象式
	(2).函数式
	如何选择：目前哪种写法都可以，以后学习到组件时，data必须使用函数式，否则会报错。
3.一个重要的原则：
	由Vue管理的函数(例如data)，一定不要写箭头函数，一旦写了箭头函数，this就不再是Vue实例了，是window。
```
   <div id="root">
       <h1>你好，{{ name }}</h1>
   </div>
   <script type="text/javascript">
       Vue.config.productionTip = false;
       //el的两种写法
       // const v = new Vue({
       //     // el: '#root', //第一种写法
       //     data: {
       //         name: '上海'
       //     }
       // });
       //
       // // console.log(v);
       // //关联root容器，用mount方法
       // setTimeout(() => {
       //     v.$mount('#root'); //第二种写法 挂载到页面上
       // }, 3000)

       //data的两种写法
       new Vue({
          el: '#root',
           //data的第一种写法:对象式
           // data: {
           //     name: 'shanghai'
           // }
           //第二种写法: 函数式(返回对象中包含你想渲染的模版数据)
           //学习组件的时候要是用函数式 这个函数是Vue来调用的
           // data: () => {
           //    console.log(`@@@@`, this); //此时this是window，因为箭头函数没有自己的this，它向外查找找到的window
           //    return ({
           //         name: 'shanghai'
           //     })
           // }
           //尽量不要写成箭头函数，因为会丢失this
           data (){
              console.log('@@@', this); //此时this是Vue
              return {
                  name: 'shanghai'
              }
           }
       });
   </script>
```

## mvvm模型
MVVM模型
	1. M：模型(Model) ：data中的数据
	2. V：视图(View) ：模板代码
	3. VM：视图模型(ViewModel)：Vue实例
观察发现：
	1.data中所有的属性，最后都出现在了vm身上。
	2.vm身上所有的属性 及 Vue原型上所有属性，在Vue模板中都可以直接使用。

```
<div id="root">
    <!--view-->
    <h1>学校名称: {{ name }}</h1>
    <h1>学校地址:{{ address }}</h1>
    <h1>测试一下1:  {{ 1 + 1 }}</h1>
    <!--所有viewModel和vue原型上的属性在视图中的{{}}都可以看到-->
<!--        <h1>测试一下2: {{ $options }}</h1>-->
<!--        <h1>测试一下3: {{ $emit }}</h1>-->
<!--        <h1>测试一下4: {{ _c }}</h1>-->
</div>
<script type="text/javascript">
    //view model view与model之间的纽带
    //vm view实例对象
    const vm =  new Vue({
        el: '#root',
        data(){
            //model
            return {
                name:'武汉科技大学',
                address: '武汉'
            }
        }
    });
    console.log(vm);
</script>

```


## 数据代理

### 回顾Object.defineProperty(数据代理)
```
<script type="text/javascript">
       let number = 18;
       let person = {
           name: '张三',
           sex:'男'
       }

       //此时age是不可以枚举的
       //往person对象里添加属性
       //关联
       Object.defineProperty(person,'age', {
           // value: 18,
           // enumerable: true, //此时代表这个属性是可以枚举的
           // writable: true, //代表可以重写该属性(控制属性是否被修改)
           // configurable:true, //控制属性是否可以被删除 默认为false


           //当读取person的age属性时get属性就会被调用，且返回值就是age的值
           //invoke property proxy映射数据代理
           get: function () {
               //测试它的调用情况
               console.log('@@@ GET AGE');
               //此时age的值依赖number的值
               return number
           },
           //当修改person的age属性时set(setter)属性就会被调用，且会收到修改的具体值
           set(v) {
               //测试
               console.log('CHANGE AGE');
               number=v;
           }
       });

       // console.log(Object.keys(person))
       //传入的对象的所有属性名提取出为一个数组，证明age是否可以枚举的

       //遍历
       // for(var p  in  person){
       //     console.log('@@', person[p])
       // }



       console.log(person);
   </script>
```

### 何为数据代理
数据代理:通过一个对象代理另一个对象中属性的操作

``` 
   <script type="text/javascript">
        let obj = { x:200 }
        let obj2 = { y:200 }
        //通过obj2代理obj，来操作obj的x
        Object.defineProperty(obj2, 'x',{
            get(){
                return obj.x
            },
            set(v){
                obj.x = v;
            }
        });

    </script>
```


### vue的数据代理
1.Vue中的数据代理：
    通过vm对象来代理data对象中属性的操作（读/写）
2.Vue中数据代理的好处：
    更加方便的操作data中的数据
3.基本原理：
    通过Object.defineProperty()把data对象中所有属性添加到vm上。
    为每一个添加到vm上的属性，都指定一个getter/setter。
    在getter/setter内部去操作（读/写）data中对应的属性。

```
     <div id="root">
         <h2>学校名称:{{ name }}</h2>
         <h2>学校地址: {{ address }}</h2>
     </div>
    <script type="text/javascript">
        Vue.config.productionTip = false;
        let data;
        //通过vm代理
        const vm = new Vue({
           el:'#root',
            //vm._data === options.data = data
            //
           data(){
               return data = {
                   name:'panyue',
                   address:'shanghai'
               }
           }
        });
    </script>
```



# vue-cli


# vue-router


# vuex


# element-ui


# vue3