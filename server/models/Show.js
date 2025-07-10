import mongoose from 'mongoose';
import Movie from './Movie.js';

const showSchema = new mongoose.Schema(
    {
        movie: {type: String, required: true, ref: 'Movie'},
        showDateTime:  { type: Date, required: true },
        showPrice: { type: Number, required: true },
        occupiedSeats: { type: Object, default: {} },
    }, {minimize: false } // This allows empty objects to be stored without removing them from the document
)

const Show = mongoose.model('Show', showSchema);

export default Show;