<template>
  <footer>
    <section class="footer-top">
      <footer-description />
      <footer-aside />
    </section>
    <section class="section-mobile">
      <div class="mobile-app">
        <h2>Mobile App</h2>
        <div class="mobile-app-imgs">
          <img src="../../assets/footer/app-store.svg" alt="" />
          <img src="../../assets/footer/google-play.svg" alt="" />
        </div>
      </div>
    </section>
    <section class="footer-bottom">
      <footer-bottom />
    </section>
  </footer>
</template>

<script setup>
import FooterDescription from "./footer-top/footer-description.vue";
import FooterAside from "./footer-top/footer-aside.vue";
import FooterBottom from "./footer-bottom/footer-bottom.vue";
</script>

<style scoped>
footer {
  margin-top: 50px;
  width: 100%;
  background-color: #dfdfe2;
  color: #2a2a40;
  font-size: 16px;
  line-height: 1.6;
  padding: 40px 15px;
}
section {
  width: min(100%, 1300px);
  margin: 0 auto;
  position: relative;
}
.footer-top {
  display: flex;
  flex-direction: row;
}
@media (max-width: 1024px) {
  .footer-top {
    flex-direction: column;
  }
}

@media (min-width: 1200px) {
  .footer-bottom {
    border-top: 1px solid #d0d0d5;
  }
}
h2,
section :deep(h2) {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 0;
  padding: 0 15px 15px;
  text-align: center;
}
section.section-mobile {
  padding-top: 20px;
  position: relative;
  margin-bottom: 3rem;
}

@media (max-width: 500px) {
  section.section-mobile {
    padding: 0;
  }
}
.mobile-app {
  width: 50%;
  position: relative;
  margin: 0 50%;
}
@media (max-width: 1024px) {
  .mobile-app {
    margin: 0 auto;
    width: 100%;
  }
}
.mobile-app-imgs {
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 15px;
  width: 50%;
  margin: 0 auto;
}

@media (max-width: 1024px) {
  .mobile-app-imgs {
    justify-content: center;
  }
}
@media (max-width: 500px) {
  .mobile-app-imgs {
    flex-direction: column;
    align-items: center;
  }
}
.mobile-app-imgs img {
  height: 3rem;
  width: 9.5rem;
  object-fit: cover;
  cursor: pointer;
}
</style>
