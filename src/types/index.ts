export interface Course {
  id: string
  title: string
  description: string
  category: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  price: number
  image: string
  students: number
  rating: number
  duration: string
}

export interface Product {
  id: string
  title: string
  description: string
  category: string
  price: number
  image: string
  rating: number
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
}

export interface Testimonial {
  id: string
  name: string
  role: string
  content: string
  image: string
  rating: number
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  category: string
  image: string
  readTime: string
}

export interface FAQ {
  id: string
  question: string
  answer: string
}
