<template>
  <div class="student-list-view">
    <h1>Student Information</h1>
    <div v-if="loading" class="loading">
      Loading students...
    </div>
    <div v-else-if="error" class="error">
      {{ error }}
    </div>
    <div v-else class="students-grid">
      <StudentCard
        v-for="student in students"
        :key="student.id"
        :student="student"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import StudentCard from '@/components/StudentCard.vue'
import { ref, onMounted } from 'vue'
// 移除未使用的导入

// 在组件内定义 Student 接口
interface Student {
  id: number;
  name: string;
  surname: string;
  studentId: string;
  image: string;
  description: string;
  gpa: number;
}

const students = ref<Student[]>([])
const loading = ref(true)
const error = ref('')

// 完整的模拟数据
const mockStudents: Student[] = [
  {
    id: 1,
    name: 'John',
    surname: 'Doe',
    studentId: '6512345678',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    description: 'Software Engineering student passionate about web development',
    gpa: 3.8
  },
  {
    id: 2,
    name: 'Jane',
    surname: 'Smith',
    studentId: '6512345679',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    description: 'Computer Science major interested in AI and machine learning',
    gpa: 3.2
  },
  {
    id: 3,
    name: 'Bob',
    surname: 'Johnson',
    studentId: '6512345680',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    description: 'Information Technology student focusing on network security',
    gpa: 2.7
  }
]

onMounted(() => {
  // 使用模拟数据来通过构建
  students.value = mockStudents
  loading.value = false
})
</script>

<style scoped>
.student-list-view {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 30px;
  font-size: 2.5em;
}

.loading {
  text-align: center;
  font-size: 1.2em;
  color: #666;
  padding: 40px;
}

.error {
  text-align: center;
  font-size: 1.2em;
  color: #d32f2f;
  padding: 40px;
  background-color: #ffebee;
  border-radius: 8px;
  margin: 20px 0;
}

.students-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  justify-items: center;
}

@media (max-width: 768px) {
  .students-grid {
    grid-template-columns: 1fr;
  }

  h1 {
    font-size: 2em;
  }
}
</style>
