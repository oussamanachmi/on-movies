import { IsString, IsOptional, IsNumber, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class AwardsDto {
    @IsOptional()
    @IsNumber()
    wins?: number;

    @IsOptional()
    @IsNumber()
    nominations?: number;

    @IsOptional()
    @IsString()
    text?: string;
}

class ImdbDto {
    @IsOptional()
    @IsNumber()
    rating?: number;

    @IsOptional()
    @IsNumber()
    votes?: number;

    @IsOptional()
    @IsNumber()
    id?: number;
}

class TomatoesDto {
    @IsOptional()
    viewer?: {
        rating?: number;
        numReviews?: number;
        meter?: number;
    };

    @IsOptional()
    critic?: {
        rating?: number;
        numReviews?: number;
        meter?: number;
    };

    @IsOptional()
    lastUpdated?: Date;
}

export class CreateMovieDto {
    @IsString()
    title: string;

    @IsOptional()
    @IsString()
    fullplot?: string;

    @IsOptional()
    @IsString()
    plot?: string;

    @IsOptional()
    @IsString()
    poster?: string;

    @IsOptional()
    @IsNumber()
    runtime?: number;

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    genres?: string[];

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    cast?: string[];

    @IsOptional()
    @Type(() => Date)
    released?: Date;

    @IsOptional()
    @IsNumber()
    year?: number;

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    countries?: string[];

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    directors?: string[];

    @IsOptional()
    @IsString()
    rated?: string;

    @IsOptional()
    @ValidateNested()
    @Type(() => AwardsDto)
    awards?: AwardsDto;

    @IsOptional()
    @ValidateNested()
    @Type(() => ImdbDto)
    imdb?: ImdbDto;

    @IsOptional()
    @ValidateNested()
    @Type(() => TomatoesDto)
    tomatoes?: TomatoesDto;

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    languages?: string[];

    @IsOptional()
    @IsString()
    type?: string;

    @IsOptional()
    @IsString()
    lastupdated?: string;

    @IsOptional()
    @IsNumber()
    num_mflix_comments?: number;
}
