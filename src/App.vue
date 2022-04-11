<template>
  <Header ref="header"></Header>
  <product ref="product" @buy="onBuy()" v-if="isShowProduct" productName="Ao dong phuc">
    <p>Dong phuc dep</p>
  </product>
  <br />
  <div>
    <p v-if="isBuy" class="text-success">Buy successfully...</p>
  </div>
  <button @click="onChangeName()">Show Product</button>
  <Footer></Footer>
</template>

<script>
import Header from "./components/layout/Header.vue";
import Footer from "./components/layout/Footer.vue";
import Product from "./components/pages/product.vue";

export default {
  data() {
    return {
      isShowProduct: true,
      isBuy: false,
    };
  },
  methods: {
    onChangeName: function () {
      this.isShowProduct = !this.isShowProduct;
    },

    onBuy: function () {
      this.isBuy = true;
    },
  },
  components: {
    Header,
    Footer,
    Product,
  },
};
</script>
