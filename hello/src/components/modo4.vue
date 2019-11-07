<template>
  <div class="modo4">
      <p class="modo4-p1">2.选择购买数量</p>
      <div class="van-stepper1">
        标准 ￥1299
        <van-stepper
          v-model="value1"
          step="1"
          min="0"
          max="5"
          integer
          input-width="40px"
          button-size="32px"
        />
      </div>
      <div class="van-stepper2">
        儿童 ￥974
        <van-stepper
          v-model="value2"
          step="1"
          min="0"
          max="5"
          integer
          input-width="40px"
          button-size="32px"
        />
      </div>

      <div class="van-stepper3">
        老年人 ￥974
        <van-stepper
          v-model="value3"
          step="1"
          min="0"
          max="5"
          integer
          input-width="40px"
          button-size="32px"
        />
      </div>

      <div class="van-stepper4">
        残障游客 ￥974
        <van-stepper
          v-model="value4"
          step="1"
          min="0"
          max="5"
          integer
          input-width="40px"
          button-size="32px"
        />
      </div>
      <p>上海迪士尼度假区新儿童票标准将于2019年10月8日起实行。</p>
      <button
        class="btn btn-primary btn-lg"
        id="modo4-button"
        data-toggle="modal"
        data-target="#myModal"
      >点击了解详情</button>
      <div
        class="modal fade"
        id="myModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title" id="myModalLabel">标准票及特殊票价定义标准</h4>
            </div>
            <h5>入园日在2019年10月8日前的门票</h5>
            <div class="modal-body">
              <p>特殊票价：</p>
              <ul>
                <li>儿童：身高1.0米以上至1.4米（含1.4米）</li>
                <li>老年人：65周岁及以上</li>
                <li>残障游客：需提供有效残障证明</li>
              </ul>
              <p>免票入园</p>
              <li>1.0米及以下的婴幼儿</li>
              <p>未满16周岁的游客须由16周岁（含）及以上的游客陪同入园。</p>
              <p>不符合以上特殊票价或免票入园标准的游客在进入上海迪士尼乐园时，须购买乐园标准票。</p>
              <h5>入园日自2019年10月8日（含）起的门票：</h5>
              <p>特殊票价：</p>
              <ul>
                <li>儿童：身高1.0米以上至1.4米（含1.4米）</li>
                <li>老年人：65周岁及以上</li>
                <li>残障游客：需提供有效残障证明</li>
              </ul>
              <p>免票入园</p>
              <li>在游园当日年龄在3周岁以下或身高1.0米及以下的婴幼儿</li>
              <p>以上对于“年龄”的定义以游客的出生日期为准。未满16周岁的游客须由16周岁及以上的游客陪同入园。</p>
              <p>不符合以上特殊票价或免票入园标准的游客在进入上海迪士尼乐园时，须购买乐园标准票。</p>
              <h5>儿童年卡将于2019年10月8日（含）起同步实行新标准。</h5>
              <p>以年龄为标准享受儿童票优惠或婴幼儿免费入园（如上所述）的儿童或婴幼儿，在入园时，其监护人必须携带并出示能被接受的儿童或婴幼儿本人含出生日期及照片的政府签发的有效身份证件原件 （“官方身份证件”）。</p>
              <ul>
                中国内地游客，可被接受的“官方身份证件”包括：
                <li>中华人民共和国居民身份证</li>
                <li>中华人民共和国社会保障卡</li>
                <li>护照</li>
              </ul>
              <ul>
                中国内地游客，不被接受的“官方身份证件”包括：
                <li>户口簿（无照片）</li>
                <li>出生证明（无照片）</li>
                <li>学生证（非政府签发身份证件）</li>
              </ul>
              <ul>
                其他游客，可被接受的“官方身份证件”仅为：
                <li>中国香港、中国澳门地区游客：《港澳居民来往内地通行证》或《中华人民共和国旅行证》</li>
                <li>中国台湾地区游客：《台湾居民来往大陆通行证》或《中华人民共和国旅行证》</li>
                <li>其他国家及地区游客：外国护照</li>
              </ul>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  name: 'modo1',
  props: {},
  data() {
    return {
      active: 1,
      value1: 1, 
      value2 : 0, 
      value3 : 0, 
      value4 : 0, 
      show: false,
      numData:[{
        id:1,
        name:'标准',
        price:'1299',
        num:0
      },{
        id:2,
        name:'儿童',
        price:'974',
        num:0
      },{
        id:3,
        name:'老年人',
        price:'974',
        num:0
      },{
        id:4,
        name:'残疾人',
        price:'974',
        num:0
      }]
    }
  },
  }
</script>
