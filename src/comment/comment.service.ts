import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Image } from '../comment.entity'; 

@Injectable()
export class ImageService {
  constructor(
    @InjectRepository(Image)
    private imageRepository: Repository<Image>,
  ) {}

  async createImage(imageUrl: string): Promise<Image> {
    const newImage = this.imageRepository.create({ imageUrl });
    return await this.imageRepository.save(newImage);
  }

  // Otros métodos para manejar imágenes, como recuperar, actualizar, borrar, etc.
}