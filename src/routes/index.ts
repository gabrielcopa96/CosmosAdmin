import { Router } from 'express';
import { readdirSync } from 'fs';

import cleanFileName from '../utils/cleanFileName.utils';

const PATH_ROUTER = `${__dirname}`;

const router = Router();

readdirSync(PATH_ROUTER).filter(fileName => {
    const cleanName = cleanFileName(fileName)
    if(cleanName !== "index") {
        import(`./${cleanName}.routes`).then(moduleRouter => {
            console.log(`Ruta -> ${cleanName}`);
            router.use(`/${cleanName}`, moduleRouter.router)
        })
    }
});

export { router }