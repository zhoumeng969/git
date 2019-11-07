<template>
  <div class="modo5">
      <p class="modo5-p1">3.输入贵宾信息</p>
      <button
        id="modo5-button"
        class="btn btn-primary btn-lg"
        data-toggle="modal"
        data-target="#myModal"
      >重要须知</button>
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
              <h4 class="modal-title" id="myModalLabel">重要须知</h4>
            </div>
            <div class="modal-body">
              <p>请注意：</p>
              <ul class="modo5-ul">
                <li>内地游客，请提供中华人民共和国居民身份证证件号。</li>
                <li>香港、澳门地区游客，请提供《港澳居民来往内地通行证》或《中华人民共和国旅行证》号码。</li>
                <li>台湾地区游客，请提供《台湾居民来往大陆通行证》或《中华人民共和国旅行证》号码。</li>
                <li>其他国家及地区游客，请提供有效护照号</li>
              </ul>
              <p>入园时，您必须出示相应身份证件。</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
            </div>
          </div>
        </div>
      </div>
      <form action class="modo5-form" name="frm" id="frm" method="post">
        <p class="modo5-p2">证件类型</p>
        <select name id class="modo5-select">
          <option value class="modo5-select-option1">居民身份证</option>
          <option value class="modo5-select-option2">旅行证件或护照</option>
        </select>
        <p>
          <input type="text"  class="modo5-input1"  placeholder="身份证"/>
        </p>
        <p> 
          <input type="text"  class="modo5-input2" placeholder="手机号" />
        </p>
        <input type="checkbox" name="vehicle" value="Bike" class="modo5-input3" />
        <p class="modo5-p3">我愿意了解更多上海迪士尼度假区和华特迪士尼公司集团的进展、优惠及其他相关信息</p>
      </form>
    </div>
</template>

<script>

export default {
  name: 'modo5',
  props: {}
  }
</script>
