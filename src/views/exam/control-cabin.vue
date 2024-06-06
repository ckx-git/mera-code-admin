<script setup lang='ts'>
import { ref, reactive } from 'vue'

defineOptions({
  name: 'ControlCabin'
})

const autoMode = reactive({
  startTime: '',
  duration: '',
})
const usacoMode = reactive({
  startTime: '',
  duration: '',
})
const manualMode = reactive({
  duration: '',
})

const examMode = ref('1')

const isActiveMode = (mode: number) => {
  return examMode.value === mode.toString()
}

const getButtonType = (mode: number) => {
  return isActiveMode(mode) ? 'primary' : 'info'
}

const onSubmit = () => {
  console.log(examMode.value)
}

</script>

<template>
  <div class="view-container">
    <div class="section-container">
      <div class="title">考试模式设置</div>
      <el-form :inline="true" :model="autoMode" class="exam-mode-item" :class="isActiveMode(1) ? '' : 'inactive'">
        <div class="left-item">
          <el-form-item label="">
            <el-radio v-model="examMode" value="1">自动考试模式</el-radio>
          </el-form-item>
        </div>
        <div class="right-items">
          <el-form-item label="开始时间">
            <el-date-picker v-model="autoMode.startTime" type="date" placeholder="开始时间" :disabled="!isActiveMode(1)" />
          </el-form-item>
          <el-form-item label="考试时长">
            <el-time-picker v-model="autoMode.duration" placeholder="考试时长" :disabled="!isActiveMode(1)" />
          </el-form-item>
          <el-form-item>
            <el-button :type="getButtonType(1)" :disabled="!isActiveMode(1)" @click="onSubmit">启用设置</el-button>
          </el-form-item>
        </div>
      </el-form>

      <el-form :inline="true" :model="usacoMode" class="exam-mode-item" :class="isActiveMode(2) ? '' : 'inactive'">
        <div class="left-item">
          <el-form-item label="">
            <el-radio v-model="examMode" value="2">USACO考试模式</el-radio>
          </el-form-item>
        </div>
        <div class="right-items">
          <el-form-item label="开始时间">
            <el-date-picker v-model="usacoMode.startTime" type="date" placeholder="开始时间" :disabled="!isActiveMode(2)" />
          </el-form-item>
          <el-form-item label="考试时长">
            <el-time-picker v-model="usacoMode.duration" placeholder="考试时长" :disabled="!isActiveMode(2)" />
          </el-form-item>
          <el-form-item>
            <el-button :type="getButtonType(2)" :disabled="!isActiveMode(2)" @click="onSubmit">启用设置</el-button>
          </el-form-item>
        </div>
      </el-form>

      <el-form :inline="true" :model="manualMode" class="exam-mode-item" :class="isActiveMode(3) ? '' : 'inactive'">
        <div class="left-item">
          <el-form-item label="">
            <el-radio v-model="examMode" value="3">手动开考模式</el-radio>
          </el-form-item>
        </div>
        <div class="right-items">
          <el-form-item label="考试时长">
            <el-time-picker v-model="manualMode.duration" placeholder="考试时长" :disabled="!isActiveMode(3)" />
          </el-form-item>
          <el-form-item>
            <el-button :type="getButtonType(3)" :disabled="!isActiveMode(3)" @click="onSubmit">开始考试</el-button>
          </el-form-item>
        </div>
      </el-form>

    </div>
  </div>
</template>

<style lang="scss" scoped>
// .view-container {
//   padding: 20px;
// }

.section-container {
  width: 100%;
  border: 1px solid #eee;
  border-radius: 5px;
  padding: 25px;
  background: #fff;

  .title {
    margin-bottom: 20px;
  }

  .exam-mode-item {
    border: 1px solid #eee;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    padding: 10px 30px;
    margin-bottom: 20px;

    &.inactive {
      background: #eee;
    }

    .el-form-item {
      margin-bottom: 0;
    }
  }
}
</style>
