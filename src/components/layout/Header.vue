<template>
  <header>
    <div class="header">
      <ul class="nav">
        <li class="nav-item">
          <router-link :to="{ name: 'home' }">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'product' }">Product</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'register' }">Register</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>
