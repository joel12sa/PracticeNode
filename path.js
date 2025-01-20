const { stat, Stats } = require('node:fs')
const fs = require('node:fs/promises')
const path = require('node:path')

// fs.readdir('.',(err,files)=>{
//     if(err){
//         console.log('Error de direccion de archivos')
//     }
//     files.forEach(file=>{
//         console.log(file)
//     })
// })

//console.log(process.cwd());
const folder = process.argv[2] ?? '.' //si pasa 3 argumento null entonces pone "."

async function listar(){
    let files//puede cambiar
    let filestat
    try{
         files =await fs.readdir(folder)//asincrono pero debe terminar de leer para que siga a la siguiente linea
    }catch{
        console.error('No se puede leer esto...')
        process.exit(1)
    }

    const filesPromises = files.map(async file =>{
        const filePath = path.join(folder,file)
        try{
             filestat= await fs.stat(filePath)
        }catch{
            console.error('No se puede leer esto...')
            process.exit(1)
        }
        const isDirectory = filestat.isDirectory()
        const fileType = isDirectory ? 'd' : 'f'
        const fileSize = filestat.size
        const fileModify= filestat.mtime.toLocaleDateString()
        return `${fileType} ${file} ${fileSize} bytes ${fileModify}`;
    })

    const filesInfo=await Promise.all(filesPromises)
    filesInfo.forEach(filesInfo => console.log(filesInfo))

}

listar(folder)
