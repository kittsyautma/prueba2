import { tabla } from "../models/alumnos.models.js";

tabla.create({
    name: "Pancho", 
    edad: 65
})

export const test = () => console.log("Funciona el controlador")
