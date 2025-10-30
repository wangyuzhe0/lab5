<template>
  <div class="student-list-view">
    <h1>Student Information</h1>
    <div class="students-grid">
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

interface Student {
  id: number;
  name: string;
  surname: string;
  studentId: string;
  description: string;
  gpa: number;
}

const students = ref<Student[]>([])

const mockStudents: Student[] = [
  {
    id: 1,
    name: 'John',
    surname: 'Doe',
    studentId: '6512345678',
    description: 'Software Engineering student',
    gpa: 3.8
  },
  {
    id: 2,
    name: 'Jane',
    surname: 'Smith',
    studentId: '6512345679',
    description: 'Computer Science major',
    gpa: 3.2
  },
  {
    id: 3,
    name: 'Bob',
    surname: 'Johnson',
    studentId: '6512345680',
    description: 'IT student',
    gpa: 2.7
  }
]

onMounted(() => {
  students.value = mockStudents
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
