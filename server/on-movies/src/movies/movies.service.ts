import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Movie, MovieDocument } from './schemas/movie.schema';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Injectable()
export class MoviesService {
    constructor(
        @InjectModel(Movie.name) readonly movieModel: Model<MovieDocument>,
    ) { }

    async create(dto: CreateMovieDto): Promise<Movie> {
        const createdMovie = new this.movieModel(dto);
        return createdMovie.save();
    }

    async findAll(): Promise<Movie[]> {
        return this.movieModel.find().exec();
    }

    async findOne(id: string): Promise<Movie> {
        const movie = await this.movieModel.findById(id).exec();
        if (!movie) {
            throw new NotFoundException(`Movie with id ${id} not found`);
        }
        return movie;
    }

    async update(id: string, dto: UpdateMovieDto): Promise<Movie> {
        const updatedMovie = await this.movieModel.findByIdAndUpdate(
            id,
            dto,
            { new: true },
        ).exec();
        if (!updatedMovie) {
            throw new NotFoundException(`Movie with id ${id} not found`);
        }
        return updatedMovie;
    }

    async remove(id: string): Promise<void> {
        const result = await this.movieModel.findByIdAndDelete(id).exec();
        if (!result) {
            throw new NotFoundException(`Movie with id ${id} not found`);
        }
    }
}