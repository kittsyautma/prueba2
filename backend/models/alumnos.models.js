import {Schema, model} from 'mongoose';
const Esqueleto = new Schema({
    name: String,
    edad: Number,
});
export const tabla = new model("alumnos reprobados", Esqueleto)
