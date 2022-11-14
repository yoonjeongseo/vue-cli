import Vue from 'vue'
import App from './App.vue' //컴포넌트파일 (싱글파일 컴포넌트)

Vue.config.productionTip = false

// var App = {
//   template: '<div>app</div>'
// }

new Vue({
  render: h => h(App),
  // components: {
  //   'app': App
  // }
}).$mount('#app')


// new Vue({
//   el: '#app',
//   render: h => h(App),
//import App from './App.vue'를 함으로써 파일을 불러와서 render한다
// 뷰 내부적으로 사용하는 함수, 템플릿을 실행할 경우 render가 실행된다
// })
// 위에 내용과 같은 내용이다