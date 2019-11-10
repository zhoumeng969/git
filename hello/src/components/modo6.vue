<template>
    <div class="modo6">
      <p class="modo6-p1">4.确认订单</p>
      <br />
      <h4>周年年卡</h4>
      <p class="modo6-p2">2019年11月1日 - 2020年11月14日</p>
      <p class="modo6-p3">受限于限定日期，年卡有效期内不少于45天的可入园日，包括大部分的星期日。</p>
      <div>
        <ul>
          <li v-for="(item,index) in numData" :key="index" >
            <div class="modo6-numData" v-if="item.num >= 1" >
              <div class="numData-name">
                <label for="" >{{item.name}}</label>
                <label for="" >×{{item.num}}</label>
              </div>
              <div class="numData-price" v-if="item.num >= 1">
                <label for="" >¥{{item.num*item.price}}</label>
              </div>
            </div>
          </li>
        </ul>
      </div>
        <div>
          <p>总计</p>
          <!-- <p>¥{{item.num*item.price}}</p> -->
        </div>
        <input type="submit" value="确定付款" class="modo6-input1" ><!-- @:cklik="aaa"-->
        <div class="modo6-p5">
          <p >点击上方的“确认付款”按钮，即表示您同意</p>
          <div>条款声明</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'modo6',
  props: {},
  data() {
    return {
      active : 1,
      show: false,
      numData:[{
        id:1,
        name:'标准',
        price:'1299',
        num : 2,
      },{
        id:2,
        name:'儿童',
        price:'974',
        num : 0,
      },{
        id:3,
        name:'老年人',
        price:'974',
        num : 0,
      },{
        id:4,
        name:'残疾人',
        price:'974',
        num : 0
      }]
    }
  },
}
  
</script>
