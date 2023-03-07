<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="containerLogin">
    <h1 class="titleLogin">Login</h1>
    <AuthHuggy :clientId="clientId" :urlCallback="payload.redirect_uri" />
  </div>
</template>
<script src="./login.ts"></script>
