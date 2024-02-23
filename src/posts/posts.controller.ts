import { Controller, Get, Post, Body } from '@nestjs/common';
import { PostsService } from './posts.service';
import { RequestLogDocument } from '../modules/request-log/request-log.shema'; // Importa el 
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  async getAllPosts(): Promise<RequestLogDocument[]> {
    // Usa el tipo de documento del esquema de registro de solicitudes
    return this.postsService.getAllPosts();
  }

  @Post()
  async createPost(@Body() postData: any): Promise<any> {
    // Aquí puedes manejar la lógica para crear un nuevo post utilizando el servicio
    // Por ejemplo:
    return this.postsService.createPost(postData);
  }
}
