
//requiring path and fs modules
const path = require('path');
const fs = require('fs');

const directoryPath = path.join(__dirname, './src/Icons');
const fileNames = [];
const reservedWords = ['abstract', 'boolean', 'break', 'byte', 'case', 'catch', 'char', 'class', 'const', 'continue', 'debugger', 'default',
  'delete', 'do', 'double', 'else', 'enum', 'export', 'extends', 'false', 'final', 'finally', 'float', 'for', 'function', 'goto', 'if',
  'implements', 'import', 'in', 'instanceof', 'int', 'interface', 'let', 'long', 'native', 'new', 'null', 'package', 'private', 'protected',
  'public', 'return', 'short', 'static', 'super', 'switch', 'synchronized', 'this', 'throw', 'throws', 'transient', 'true', 'try', 'typeof',
  'var', 'void', 'volatile', 'while', 'with', 'yield'];
/** CREATE ICONS */

function normalizeFileName(fileName) {
  // Extraer la extensión del archivo
  const fileExtension = fileName.substring(fileName.lastIndexOf('.') + 1);

  // Remover caracteres especiales y espacios del nombre del archivo (sin la extensión)
  const sanitized = fileName.substring(0, fileName.lastIndexOf('.')).replace(/[^a-zA-Z0-9]/g, '');
  // Detectar si contiene numeros al inicio
  const startsWithNumber = sanitized.match(/^\d+/g);
  let iconName = sanitized;
  if (startsWithNumber) {
    iconName = 'icon ' + sanitized;
  }
  // Detectar si contiene palabras reservadas

  if (reservedWords.includes(iconName)) {
    iconName = 'icon ' + sanitized;
  }
  // Convertir a Camel Case
  const camelCase = iconName.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => {
    if (+match === 0) return ''; // Ignorar espacios iniciales
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  });

  // Concatenar el nombre normalizado con la extensión del archivo

  return camelCase + '.' + fileExtension;



}

const readFiles = () => {
  return fs.promises.readdir(directoryPath)
    .then(files => {
      console.log('reading files...')
      console.log('founded', files.length, ' files...')
      return new Promise((resolve, reject) => {
        if (files.length === 0) resolve();
        files.forEach(file => {
          const fileDir = file;
          fileNames.push({ fileDir, fileName: fileDir });
          resolve();
        });
      });
    })

}

const createReactFiles = () => {
  console.log('creating files...')
  const directoryPathReactComponentFile = path.join(__dirname, './src/components/');
  console.log('creating', fileNames.length, ' files...')
  const areAllFilesCreated = new Promise((resolve, reject) => {
    const indexDir = directoryPathReactComponentFile + 'index.js';
    let reactIndexFile = ``;
    fileNames.forEach(elementIcon => {
      const fileName = elementIcon.fileName.split('.')[0];
      const componentName = fileName.charAt(0).toUpperCase() + fileName.slice(1);
      const componentDir = directoryPathReactComponentFile + componentName + '.jsx';
      reactIndexFile += `export { default as ${componentName} } from './${componentName}';\n`;
      const reactFile = "import React from 'react';\n" +
        `import ${componentName}_ from './../Icons/${elementIcon.fileDir}';\n` +
        'const ' + componentName + ' = (props) => {\n' +
        '  return (\n' +
        `    <img src={${componentName}_} alt={props.alt || ''} {...props} >\n` +
        '    </img>\n' +
        '  );\n' +
        '};\n' +
        'export default ' + componentName + ';\n';

      fs.writeFile(componentDir, reactFile, err => {
        if (err) {
          console.error(err);
          reject(err);
        }
        else {
          resolve();
        }
        // file written successfully
      });
      // console.log(reactFile)
    });

    fs.writeFile(indexDir, reactIndexFile, err => {
      if (err) {
        console.error(err);
      }
    });
  });
  return areAllFilesCreated;

}

const removeFiles = () => {

  const directoryPathReactComponentFile = path.join(__dirname, './src/components/');
  const areAllFilesRemoved = new Promise((resolve, reject) => {
    fs.readdir(directoryPathReactComponentFile, (err, files) => {
      console.log('removing', files.length, ' files...')
      if (err) throw err;
      if (files.length === 0) resolve();
      for (const file of files) {
        fs.unlink(path.join(directoryPathReactComponentFile, file), (err) => {
          if (err) { reject(err) }
          resolve();
        });
      }
    });
  });
  return areAllFilesRemoved
};

const publishFiles = () => {
  console.log('publishing files...', fileNames.length)
  const directoryPathReactComponentFile = path.join(__dirname, './src/');
  const appDir = directoryPathReactComponentFile + 'Icons.js';
  const importImages = `import { ${fileNames.map(elementIcon => {
    const fileName = elementIcon.fileName.split('.')[0];
    const componentName = fileName.charAt(0).toUpperCase() + fileName.slice(1);
    return `${componentName},\n`;
  }).join('')
    } } from './components';\n`
  // console.log(importImages)
  const appFile = "import React from 'react';\n" +
    "import './Icons.css';\n" +
    importImages +
    'function Icons() {\n' +
    '  return (\n' +
    '    <div className="Icons">\n' +
    fileNames.map(elementIcon => {
      const fileName = elementIcon.fileName.split('.')[0];
      const componentName = fileName.charAt(0).toUpperCase() + fileName.slice(1);
      return `       <div className="iconImage" onClick={()=>{
        navigator?.clipboard?.writeText('<${componentName} alt="${componentName}" />')
        alert('Copied to clipboard')
      }}>\n<${componentName} alt="${componentName}" />\n<p>${componentName}</p>\n</div>\n`;
    }).join('') +
    '    </div>\n' +
    '  );\n' +
    '}\n' +
    'export default Icons;\n';
  fs.writeFile(appDir, appFile, err => {
    if (err) {
      console.error(err);
    }
  });
}
/**Finish Create ICONS */


const normalizeSVGs = () => {
  console.log('Normalizing file names...')
  const areAllFilesNormalized = new Promise((resolve, reject) => {
    fs.promises.readdir(directoryPath).then(files => {
      files.forEach(file => {

        const newFileName = normalizeFileName(file);
        if (file === newFileName) {
          resolve()
          return;
        }
        // count how many files are with the same name
        const count = files.filter(f => f === newFileName).length;
        // if there is more than one file with the same name, add a number to the end of the file
        if (count > 1) {
          const fileExtension = newFileName.substring(newFileName.lastIndexOf('.') + 1);
          const fileName = newFileName.substring(0, newFileName.lastIndexOf('.'));
          const newFileNameWithNumber = `${fileName}${count}.${fileExtension}`;
          fs.renameSync(`${directoryPath}/${file}`, `${directoryPath}/${newFileNameWithNumber}`);
          console.log(file, 'previous name')
          console.log(newFileNameWithNumber, 'Normalized');
          resolve();
        } else {
          fs.renameSync(`${directoryPath}/${file}`, `${directoryPath}/${newFileName}`);
          console.log(file, 'previous name')
          console.log(newFileName, 'Normalized');
          resolve();
        }
      });
    }).catch(err => {
      console.error('error reading files...');
      console.error(err);
      reject(err);
    });

  });
  return areAllFilesNormalized;
}

for (const i of process.argv) {
  switch (i) {
    case 'createIcons':
      normalizeSVGs().then(() => {
        console.log('files normalized successfully...');

        removeFiles().then(() => {
          readFiles().then(() => {
            createReactFiles().finally(() => {
              console.log('files created successfully...')
              publishFiles();
            });
          }).catch(err => {
            console.error('====================================');
            console.error('error reading files...');
            console.error(err);
            console.error('====================================');
          });
        }).catch(err => {
          console.error('====================================');
          console.error('error removing files...');
          console.error(err);
          console.error('====================================');
        });
      }).catch(err => {
        console.error('====================================');
        console.error('error normalizing files...');
        console.error(err);
        console.error('====================================');
      });

      break;
    default:
      break;
  }
}

module.exports.readFiles = readFiles;