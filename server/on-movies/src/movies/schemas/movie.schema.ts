import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MovieDocument = Movie & Document;

@Schema()
export class Awards {
    @Prop()
    wins?: number;
    @Prop()
    nominations?: number;
    @Prop()
    text?: string;
}
export const AwardsSchema = SchemaFactory.createForClass(Awards);

@Schema()
export class Imdb {
    @Prop()
    rating?: number;
    @Prop()
    votes?: number;
    @Prop()
    id?: number;
}
export const ImdbSchema = SchemaFactory.createForClass(Imdb);

@Schema()
export class TomatoRating {
    @Prop()
    rating?: number;
    @Prop()
    numReviews?: number;
    @Prop()
    meter?: number;
}
export const TomatoRatingSchema = SchemaFactory.createForClass(TomatoRating);

@Schema()
export class Tomatoes {
    @Prop({ type: TomatoRatingSchema })
    viewer?: TomatoRating;

    @Prop({ type: TomatoRatingSchema })
    critic?: TomatoRating;

    @Prop()
    lastUpdated?: Date;
}
export const TomatoesSchema = SchemaFactory.createForClass(Tomatoes);

@Schema()
export class Movie {
    @Prop({ required: true })
    title: string;

    @Prop()
    fullplot?: string;

    @Prop()
    plot?: string;

    @Prop()
    poster?: string;

    @Prop()
    runtime?: number;

    @Prop([String])
    genres?: string[];

    @Prop([String])
    cast?: string[];

    @Prop()
    released?: Date;

    @Prop()
    year?: number;

    @Prop([String])
    countries?: string[];

    @Prop([String])
    directors?: string[];

    @Prop()
    rated?: string;

    @Prop({ type: AwardsSchema })
    awards?: Awards;

    @Prop({ type: ImdbSchema })
    imdb?: Imdb;

    @Prop({ type: TomatoesSchema })
    tomatoes?: Tomatoes;

    @Prop([String])
    languages?: string[];

    @Prop()
    type?: string;

    @Prop()
    lastupdated?: string;

    @Prop()
    num_mflix_comments?: number;
}

export const MovieSchema = SchemaFactory.createForClass(Movie);