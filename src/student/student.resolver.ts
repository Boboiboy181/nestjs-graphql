import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateStudentInput } from './student.input';
import { StudentService } from './student.service';
import { StudentType } from './student.type';

@Resolver((of) => StudentType)
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  @Mutation((returns) => StudentType)
  async createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput,
  ) {
    return await this.studentService.createStudent(createStudentInput);
  }

  @Query((returns) => [StudentType])
  async students() {
    return await this.studentService.getStudents();
  }

  @Query((returns) => StudentType)
  async student(@Args('id') id: string) {
    return await this.studentService.getStudent(id);
  }
}
