import type { Student } from '@/types'

export default {
  async getStudents(): Promise<{ data: Student[] }> {
    try {
      // 暂时返回模拟数据，避免 API 错误
      const mockData: Student[] = [
        {
          id: 1,
          name: 'John',
          surname: 'Doe',
          studentId: '6512345678',
          image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
          description: 'Software Engineering student',
          gpa: 3.8
        },
        {
          id: 2,
          name: 'Jane',
          surname: 'Smith',
          studentId: '6512345679',
          image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
          description: 'Computer Science major',
          gpa: 3.2
        },
        {
          id: 3,
          name: 'Bob',
          surname: 'Johnson',
          studentId: '6512345680',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
          description: 'IT student',
          gpa: 2.7
        }
      ]

      return { data: mockData }
    } catch (error) {
      console.error('Error fetching students:', error)
      throw error
    }
  }
}
