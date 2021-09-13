require('./bootstrap');

import Vue from "vue";
window.Vue = Vue;

import Chart from "chart.js/dist/chart.min"

new Vue({
    el:"#app",
    Chart
})
