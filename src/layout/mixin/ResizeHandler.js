import store from '@/store'

const { body } = document
const WIDTH = 992 // refer to Bootstrap's responsive design

export default {
  watch: {
    $route(route) {
      if(this.device === 'mobile' && this.sidebar.opened) {
        store.dispatch('app/closeSideBar', { withoutAnimation: false })
      }
    }
  },
  beforeMount() {
    window.addEventListener('resize', this.$_resizeHandle)
  },
  beforeDestory() {
    window.removeEventListener('resize', this.$_resizeHandle)
  },
  mounted() {
    const isMobile = this.$_isMobile()
    if(isMobile) {
      store.dispatch('app/toggleDevice', 'mobile')
      store.dispatch('app/closeSideBar', { withoutAnimation: true })
    }
  },
  methods: {
    $_isMobile() {
      const rect = body.getBoundingClientRect()
      return rect.width - 1 < WIDTH
    },
    $_resizeHandle() {
      if(!document.hidden) {
        const isMobile = this.$_isMobile()
        // 根据屏幕宽度判断是移动端还是pc端
        store.dispatch('app/toggleDevice', isMobile ? 'mobile' : 'desktop')
        
        if(isMobile) {
          store.dispatch('app/closeSideBar', { withoutAnimation: true })
        }
      }
    }
  }
}
