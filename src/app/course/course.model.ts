export interface Course {
  id: number;
  title: string;
}

export interface CourseResolved {
  courses: [Course];
  error?: any;
}
