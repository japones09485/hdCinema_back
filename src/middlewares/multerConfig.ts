import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination: (req,file,cb) =>{
        cb(null, path.join(__dirname, "../assets/img"));
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
})

// Filtro para aceptar solo ciertos tipos de archivos
const fileFilter = (req: any, file: any, cb: any) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true); // Aceptar el archivo
  } else {
    cb(new Error('Tipo de archivo no soportado'), false); // Rechazar el archivo
  }
};

// Configuración de Multer
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 5, // Límite de tamaño: 5MB
  },
});

export default upload;