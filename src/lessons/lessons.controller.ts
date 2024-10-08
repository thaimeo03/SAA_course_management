import { Body, Controller, Delete, Param, Post } from '@nestjs/common'
import { LessonsService } from './lessons.service'
import { CreateLessonDto } from './dto/create-lesson.dto'
import { DataResponse } from 'common/core/response-success.core'
import { LessonMessages } from 'common/constants/messages/lesson.message'

@Controller('lessons')
export class LessonsController {
  constructor(private readonly lessonsService: LessonsService) {}

  @Post()
  async createLesson(@Body() createLessonDto: CreateLessonDto) {
    const data = await this.lessonsService.createLesson(createLessonDto)

    return new DataResponse({ message: LessonMessages.CREATE_LESSON_SUCCESS, data })
  }

  @Delete(':id')
  async deleteLesson(@Param('id') id: string) {
    await this.lessonsService.deleteLesson(id)

    return new DataResponse({ message: LessonMessages.DELETE_LESSON_SUCCESS })
  }
}
