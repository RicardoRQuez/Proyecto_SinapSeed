export const verifyToken = (req, res, next) => {
    try {
        let { token } = req.query;
        // console.log(token);
        if (!token) {
            token = req.headers["authorization"];
            if (!token)
                return res
                    .status(400)
                    .send(
                        "ruta protegida, debe proporcionar un token de acceso."
                    );
            token = token.split(" ")[1];
            // console.log(token);
            if (token.length == 0) {
                throw new Error("No se ha proporcionado un token");
            }
        }

        jwt.verify(
            token,
            secretPhrase,
            async (error, decoded) => {
                if (error) {
                    return res.status(401).json({
                        code: 401,
                        message:
                            "debe proporcionar un token válido / su token puede estar expirado.",
                    });
                }

                try {
                    let usuario = await Admins.findByPk(decoded.data.id, {
                        attributes: ["id", "firstName", "lastName", "email"],
                    });

                    if (!usuario) {
                        return res.status(400).json({
                            code: 400,
                            message: "Usuario ya no existe en el sistema.",
                        });
                    }
                    req.usuario = usuario;

                    next();
                } catch (error) {
                    res.status(500).json({ code: 500, message: "Error en autencicación." })
                }
            }
        );

    } catch (error) {
        return res.status(401).json({
            code: 401,
            message: error.message,
        });
    }
};