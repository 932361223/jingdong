<template>
  <div>
    <div class="position">
      <span class="iconfont position__icon">&#xe680;</span>
      北京理工大学国防科技园2号楼10层
      <span class="iconfont position_notice">&#xe601;</span>
    </div>
    <div class="search">
      <span class="iconfont">&#xe61f;</span>
      <span class="search__text">山姆会员商店优惠商品</span>
    </div>
    <div class="banner">
      <img class="banner__img"
           src="http://www.dell-lee.com/imgs/vue3/banner.jpg" />
    </div>
    <div class="icons">
      <div class="icons__item">
        <img class="icons__item__img"
             src="http://www.dell-lee.com/imgs/vue3/超市.png" />
        <p class="icons__item__desc">超市便利</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img"
             src="http://www.dell-lee.com/imgs/vue3/菜市场.png" />
        <p class="icons__item__desc">菜市场</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img"
             src="http://www.dell-lee.com/imgs/vue3/水果店.png" />
        <p class="icons__item__desc">水果店</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img"
             src="http://www.dell-lee.com/imgs/vue3/鲜花.png" />
        <p class="icons__item__desc">鲜花绿植</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img"
             src="http://www.dell-lee.com/imgs/vue3/医药健康.png" />
        <p class="icons__item__desc">医药健康</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img"
             src="http://www.dell-lee.com/imgs/vue3/家居.png" />
        <p class="icons__item__desc">家居时尚</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img"
             src="http://www.dell-lee.com/imgs/vue3/蛋糕.png" />
        <p class="icons__item__desc">烘培蛋糕</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img"
             src="http://www.dell-lee.com/imgs/vue3/签到.png" />
        <p class="icons__item__desc">签到</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img"
             src="http://www.dell-lee.com/imgs/vue3/大牌免运.png" />
        <p class="icons__item__desc">大牌免运</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img"
             src="http://www.dell-lee.com/imgs/vue3/红包.png" />
        <p class="icons__item__desc">红包套餐</p>
      </div>
    </div>
    <div class="gap"></div>
  </div>
</template>

<script>
export default {
  name: 'StaticPart'
}
</script>

<style lang="scss">
@import "../../style/viriables.scss";
@import "../../style/mixins.scss";
.position {
  position: relative;
  padding: 0.16rem 0.24rem 0.16rem 0;
  line-height: 0.22rem;
  font-size: 0.16rem;
  @include ellipsis;
  .position__icon {
    position: relative;
    top: 0.01rem;
    font-size: 0.2rem;
  }
  .position_notice {
    position: absolute;
    right: 0;
    top: 0.17rem;
    font-size: 0.2rem;
  }
  color: $content-fontcolor;
}
.search {
  margin-bottom: 0.12rem;
  line-height: 0.32rem;
  background: #f5f5f5;
  color: #b7b7b7;
  border-radius: 0.16rem;
  .iconfont {
    display: inline-block;
    padding: 0 0.08rem 0 0.16rem;
    font-size: 0.16rem;
  }
  &__text {
    display: inline-block;
    font-size: 0.14rem;
  }
}
.banner {
  height: 0;
  overflow: hidden;
  padding-bottom: 25.4%;
  &__img {
    width: 100%;
  }
}
.icons {
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.16rem;
  &__item {
    width: 20%;
    &__img {
      display: block;
      width: 0.4rem;
      height: 0.4rem;
      margin: 0 auto;
    }
    &__desc {
      margin: 0.06rem 0 0.16rem 0;
      text-align: center;
      color: $content-fontcolor;
    }
  }
}
.gap {
  margin: 0 -0.18rem;
  height: 0.1rem;
  background: $content-bgColor;
}
</style>
