import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DBConfigService } from 'database/data-source'
import { UsersModule } from './users/users.module'
import { AuthModule } from './auth/auth.module'
import { ImagesModule } from './images/images.module'
import { CoursesModule } from './courses/courses.module'
import { LessonsModule } from './lessons/lessons.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.local', '.env']
    }),
    TypeOrmModule.forRootAsync({
      useClass: DBConfigService
    }),
    UsersModule,
    AuthModule,
    ImagesModule,
    CoursesModule,
    LessonsModule
  ],
  controllers: [AppController],
  providers: []
})
export class AppModule {}
