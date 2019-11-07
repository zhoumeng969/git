<template>
    <div class="modo3">
      <p class="modo3-p1">1.选择上海迪士尼乐园年卡类型</p>
      <van-tabs v-model="active">
        <van-tab title="周日年卡">
          <p>
            受限于限定日期，年卡有效期内不少于45天的可入园日，包括大部分的星期日。
            <a
              href="https://www.shanghaidisneyresort.com/ticket/#103"
            >查看上海迪士尼乐园年卡日历</a>
          </p>
          <ul>
            <li>【约8折】吃遍乐园及度假区酒店缤纷美食，尽享惊喜！</li>
            <li>【约8折】乐购迪士尼度假区商店，尊享超值优惠！</li>
            <li>【多重好礼】横扫迪士尼小镇吃喝玩乐，尽显魅力</li>
            <li>【更多惊喜福利】欢享不定期迪士尼主题酒店折扣、百老汇经典音乐剧《美女与野兽》演出票折扣及其他更多精彩活动福利</li>
          </ul>
        </van-tab>
        <van-tab title="平日+周日年卡">
          <p>
            受限于限定日期，年卡有效期内不少于250天的可入园日，包括大部分的星期日至星期五和部分寒假、暑假。
            <a
              href="https://www.shanghaidisneyresort.com/ticket/#103"
            >查看上海迪士尼乐园年卡日历</a>
          </p>
          <ul>
            <li>【约8折】吃遍乐园及度假区酒店缤纷美食，尽享惊喜！</li>
            <li>【约8折】乐购迪士尼度假区商店，尊享超值优惠！</li>
            <li>【多重好礼】横扫迪士尼小镇吃喝玩乐，尽显魅力！</li>
            <li>【更多惊喜福利】欢享不定期迪士尼主题酒店折扣、百老汇经典音乐剧《美女与野兽》演出票折扣及其他更多精彩活动福利</li>
          </ul>
        </van-tab>
        <van-tab title="无限年卡">
          <p>
            365天无限次入园，可能不包括部分特别活动时间段。
            <a
              href="https://www.shanghaidisneyresort.com/ticket/#103"
            >查看上海迪士尼乐园年卡日历</a>
          </p>
          <ul>
            <li>【约8折】吃遍乐园及度假区酒店缤纷美食，尽享惊喜！</li>
            <li>【约8折】乐购迪士尼度假区商店，尊享超值优惠！</li>
            <li>【无限年卡持卡人尊享】全年至多12次提前入园机会，早享精彩！</li>
            <li>【多重好礼】横扫迪士尼小镇吃喝玩乐，尽显魅力！</li>
            <li>【更多惊喜福利】欢享不定期迪士尼主题酒店折扣、百老汇经典音乐剧《美女与野兽》演出票折扣及其他更多精彩活动福利</li>
          </ul>
        </van-tab>
      </van-tabs>
    </div>
</template>

<script>

export default {
  name: 'modo1',
  props: {},
  data(){
    return {
    active: 1,
    show: false,  
    }
  },
}
</script>

