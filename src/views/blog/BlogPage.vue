<template>
  <div>
    <el-row>
      <el-col :span='12' :offset='3'>
        <div class='blog-list flex'>
          <el-input placeholder='搜索文章' clearable/>&nbsp;
          <el-button type='primary' :icon='Search'>搜索</el-button>
        </div>
        <el-card v-for='blog in state.blogList' class='blog-list'>
          <div class='card-header'>
            <div class='user-info'>
              <el-space>
                <el-avatar size='small' src='https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'/>
                <h5>{{ blog.author }}</h5>
              </el-space>
              <div class='update-time'>
                <el-icon>
                  <Clock/>
                </el-icon>
                {{ blog.updateTime }}
              </div>
            </div>
          </div>
          <div class='title-info'>
            <h3>{{ blog.title }}</h3>
            <el-tag size='small'>测试</el-tag>
          </div>
          <div>{{ blog.content }}</div>
        </el-card>
        <el-pagination
            background
            layout='prev, pager, next'
            v-model:total='state.page.total'
            v-model:current-page='state.page.current'
            v-model:page-size='state.page.size'
            @current-change='getCurrentBlogList'
        />
      </el-col>
      <el-col :span='6'>
        <el-card class='rank-list'>
          <h2 style='color: rgba(234,40,92,0.99); text-align: center'>热度排行榜</h2>
          <el-space direction='vertical'>
            <el-space v-for='rank in rankIcon' size='default' wrap>
              <img :src='rank' alt='' style='width: 25px; height: 25px;'>
              <h2>ok</h2>
            </el-space>
          </el-space>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import {getBlogList} from '../../api/blog/blog.api';
import {onMounted, reactive} from 'vue';
import {Search} from '@element-plus/icons-vue';

const rankIcon = [
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAkCAYAAADy19hsAAAC5UlEQVR4Ae2WNXDcUBCGQ1WYS1epkyrM1AabcOUxhRmaMDMzM2M/qcLMnGPmO/l0zkkbrazI+yydXhw03M78hv0XvhHNa/SXIx/5gMEz2kDvsh5GlXSpncA9i85CjyIwqvhm7YPtVTqMQNZuYLzlCpSnlgMbYWs1MGza1Ax6Fs9QgASEqo3ABLRkrALygEDVLmByRdfQ21+rgfEby0LUfWChrgALlS9f8cZ/BgxfPz9kFI+3Y/2PI+H5qycGkJ5Ft6BfUYFaM2z27pzAU1a6wfZ5DDvz0zW600pGYNsXYOTzdWZ8t7MQ3r6rXN6nVAXAM0KVb+sDKw+W5wQu3Vg51/H1XFWP4zPdaSUDsOywAbjsqvBvM2BslI/fABXc7byhe6LYQlnuhbVHwQoY56LAYZunA5Od2m8zGYHVYo9Tlxkw9TVgxuMAk16HV/1EetyXld67qrxuB3pMjeahDMBYxAX2eUCRARgX/xSw1ou/we/vxswP+Bcx+/3ePY2sQh3m96K0gb7nEPA+1oVXQPNVBQM36LOo5tafyA1cslGk/RDyTzIAa7tRfOCgH2okChwO+jBnCVy0IUX7IRSYzgBHQkuoL4VC1sBSOAg1EQWWQ6EE5qyA5aL1CdqPV7Q6MPX5wNEIsIqekuKxgz8kp5K3GT8WZa4w5uSNpyyvMO2HWKTEAEznJ+LWwNlYFBQwVfg3JJOdGT8VL8S8VscAS7HYE8zJm8/mvsIztum9+FsWxdHMBUvFl2geig8sJRNAZApM/Wy5oAPjHcAcD5iZn04XGICJz7/CggBZIaVJACVYYFEszKZSgMIaCixXiMMxzwHWe78Jwn3DBctklmi7VUmiyAEW00BkDkx8CoyBzzgPWJ+dTg81A6bz+cCZDBCZA7M1DDAeluRlRz5ZAUsVFXGlbzzto8BkNh9YkqQFVHg+YIAAulJfe2mYsDxejlz8qPrMavN70fn4mDX62/H3z8P5yEc+8sGL7+ZJUQMb+gFLAAAAAElFTkSuQmCC',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAkCAYAAADy19hsAAADIElEQVR4Ae2XU7gjSxCA59q2Xq6eLp6urddr22vbtm3btm3bm2RjO/nOma7t2k2fU3Mmmc4ieEh/3x/VdNU/aETJUSu1UoP2yh3QWHkCGikvI/gZfysuwQbKX5yZHB/UVyADrtQx1Qt2AtBQ+QQa3HhcLyflDBf/Mv+y9ZWkRMyQvEnjc8kLhjlwjSR5rudzL9xA6SkT4ezkbMzixMblVnbqezdx4UBGAXym8arRu9FA2WF0cpgzd8I4VRlcMXy20zxCzxv2yeVjgdOS0dRl0C/zlNdIeT2nj4RYGPBqcn7g1OVCHfBkDAYpZKS58kBxrX4NlMEGwtZrS37+zK4Kzp7eBSaT5uzh3Kkv8PdKzvTR5YjFHuWxznD+9DqY29opmYtbw7nT80lN8Z4WvbDpLGhwOB7VxC2mfzVxi2mhJm49/zaYz3kxxua3BYlsAB8HMJ8/K/LJSC9sOS9IKyxiVYUhHr8TrGY7nDsObOTXhrKs8a0Ac5qPwn4oTGoaoRdmVjMQ0gpr4lTYbv2PHdsGrNvLhrIIW9oV8OQuDeILljlgtWxLYab58RgRQ/TCdisQiDCRonGXvVJ49YBNrMX90ivLVvWp7O90vqrJ73a20Di4nUNpPL2w046kOrgOcak9AuawmTAmEMJcpgkHJFhh76Kgpr/H+atOGGNZC3ucoLovwzziHdH+JkBhMW1J2IjzMXM5z2j6e1x1qgqTmnJh1eMG1ZsBD3lHMPGgjy1ZbISaiP0C3jGaBwU1wgFfS1pTLuz3gRb/ZDXgHyVgft8mEWOTfgdD2Wb3uqsuu7y/ieZnkfD/OmFaPxzKQjgYqAAXARovjwT/xWNw4BjJsvbPgHp87XDaF6c9njMhauA7hEJf6YRJfblwOASUdMLltpM42qXC0Om5JG43BXjFWZcXgZL6i/VLRf1EvCWpLxcuj0aBoBPGW6hOr0bkrh3cPFFhWl8uHI8DQSesHl3eFK9uToVJfTWZlAgnk0DQC4/9agYWyaUwqS8XVlW1KQUHCo1Dq4fW5lIYAN6k9cvKyj5TrqVBfcWVS+FSK7VSK7Xr0y4C9z6dQCEt2bkAAAAASUVORK5CYII=',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAkCAYAAADy19hsAAADhUlEQVR4AeyXA7AcTRDHvzp8tl36bNsqfI5LKUSlV45tJ4XYPMW2bds8++7xZjs9m3uT3uy+2Wdv1b9ma3p7+rfjvqcKn8an8QHPI0+C5953wH3/q7DzL1vtA5xr/xQc1jkw13IOHJY0lkCFdV607wOHbQAsePiZmgPFXkSQrQTOXPhDCD4aFj73UDX36n2v856TA0qEI1J9sDisCHvVFMq8t3OqB9hp6SUfcut0cFqbYTkW6yIS6KNVD4urXkwFPWwhOO0fa753Wf+R9XKVz2V1q8IeRLiDuh3BYV1p+IOyXvbYP6pKXh1MdqdoqW5ZOA2MvtP9GBXu2bVrj8aFJdkpttU8IO91nMfgtP2SXXRQ4nx32L6veMDLF/YJXTy/D65ceUJjv3TuX7Ve6MJI3ZYnwGSw1pbC58rF+TSmKA2kA0ZngMtE4cAzGvuNa235N0LXrizV2Hf3aSWFXfAKwMmVwCHvtHn1Aomp1RVSonTAytXLCHFb+G4IzOuLRYEhmXwQTniCAk4CrezsigBnOwlgEVOUhtID37gKVIbA1M6Bqe3IdAon1/p/ctU5f/PGAvTdpcp746qmff9Nv7Ch9MDeG0BlCEztfq8A5oHZ0WmgrP4NlO05ABtbXeanmUlvuzTtB/1d72p/HLUbA/u9XFkH3xEIeA8IYQ8IO4oC86Glvjy42oN40EgXIJ52FJj7lx446IeyiIWCApgPH7VBNNxBrUcg6WmH2xsF1rYfkgMjALCwsTIhUYp3CqyEQgn6PURDrQWI7N7ssHSmwLQNc+BoBLSKzmGx6ORiKdHINrXedwrYpdWgHBpwkN/e1GE/OjJCfXkPE+CVpQFWkrFumviJuBw4E49CJh7LKgpQVPQstcO635eA024cePn7KerLErFhwg/TpxKB8Q5CgYv9UebALJkAIh0wOz5isGzVY68LXyWVuMR3GekVky86PB0pMI1v3sPpNBDpgDP5+W2VFZ9KD4XMhYWQSfFeCgE7PTkJ7kdYaVMlVlDQjcZn+fkmwHl5QGUEnPHtBuNpQYR2lHlCirmhDpjENwcuKAAqQ2CsZxfmAu25cgmnimiYAJP45sCMsU5U/H5A7QDwgbB7Nw2BBc+eLUfy6QWX7Q+j+ADwFY1fVFT0exXcf/m2ZjlVClB1C6w1WQYsePAF9eKO2xSCtedS3/Ek47ngrTEMXTAKRsEoAADbNKMIzO1V0QAAAABJRU5ErkJggg==',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAkCAQAAABY3hDnAAAA50lEQVR42u3VPwrCMBQG8CydunR0ce3YMeDYA3gBF5eews29u0dw7uwF3HqA0u+FgggFwblQdPBPEs2ieQXBvm8r5EcpX/qEGOeboYikDhvbB9jXF50+YILrrcmywbS2WSaYFq8sC0wS3QDwYYrjO+sNtyFKF+sNo9CU/eZeMHKDrTBngpEZ0LmJSbLAKtVdQKdSIVjgJsbJ+AzZrXbeMEWoDDZ/9NkT7gPsDLbQF8UTrjcGW7YhE6xm5nGsaPmM9SO6P5t80Ab3TXNHpSP8Q3AbInHH3iMkkSDRZfTaJINs6REe5//mCs0Zr4e3xnZFAAAAAElFTkSuQmCC',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAkCAQAAABY3hDnAAABSklEQVR42u2VIW+DUBCAmyaIJfyDSQweha6pQc2QKUQNClU5jV3mp/gJyNrVTiEmencParBkYknNW5igPLaWce81y5LeKQQfj7vv7s1m1/jDwBS251MsWWAoQJ5PihhYacHhImByx7Bc8N2lwA8KpPkx7zlOZD3s1qRsr71ffjaGlXP86IHXrSWlIxbk17YWuHT6FcYUM3jvnirM9rfcQgQjRjQYyznHifW4bJjqOnHaY1/LCZBQUCI88uFxcOa3yeUoHbGkBJ8whx3mRxMoGZzZNaWhhbUCDs0Nzka7gb9pKwtc2+SKBUVq7zFXwPHUzVZA072cK6NeaQg3mLuD8LpPhqpuk1cQ7BRAhYG0apui48b4Om9i4v74fgO+SIvT/XhkU9T8DbdSh0HBbtjYNvY3GKvVbkuCOYWslXnKZ1xhIDzNG+Qa/yE+AdTgy7YIVdhqAAAAAElFTkSuQmCC',
];

const state = reactive({
  blogList: [],
  page: {
    current: 1,
    size: 4,
    total: 0,
  }
});

const initBlogList = async () => {
  const result = await getBlogList(0, state.page.size);
  state.blogList = result.data.data.content;
  state.page.total = result.data.data.totalElements;
};

const getCurrentBlogList = async () => {
  const result = await getBlogList(state.page.current - 1, state.page.size);
  state.blogList = result.data.data.content;
};

onMounted(() => {
  initBlogList();
});
</script>

<style scoped>
.card-header {
  height: 30px;
}

.user-info {
  display: flex;
  justify-content: center;
  align-items: center;
}

.blog-list {
  margin: 18px auto;
}

.update-time {
  flex: 1;
  text-align: right;
  font-size: 10px;

  color: #bbb;
  line-height: 100%;
}

.title-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.rank-list {
  margin: 25px auto;
  width: 80%;
}
</style>