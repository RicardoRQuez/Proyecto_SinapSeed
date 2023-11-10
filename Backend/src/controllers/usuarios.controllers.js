import * as path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const findAllUsers = (req, res) => {
    res.send('Ruta findAll usuarios');
}
export const createUser = (req, res) => {
    //console.log(req.body);
    //console.log(req.files);
    let foto = req.files.foto;
    let formatosPermitidos = ["jpeg", "png", "webp", "gif", "svg"]

    let extension= `${foto.mimetype.split("/")[1]}`

    if(!formatosPermitidos.includes(extension))
    return res.status(400).json({code: 400, message: `Formato no permitido ${extension}, formatos permitidos (${formatosPermitidos.join("-")})`})
    let nombreFoto = `${Date.now()}-img.${extension}`;
    let pathDestino = path.join(__dirname, "/./../../public/uploads", nombreFoto);
    //console.log(pathImagen);
    //console.log(nombreFoto);
    foto.mv(pathDestino, (error) => {
        if (error) return res.status(500).json({ code:500, message: "Error al subir la imagen"});
        res.status(201).json({
            code: 201,
            message: `La imagen ha sido cargada correctamente`,
            data: {img:nombreFoto}
        })
    })
     
}
