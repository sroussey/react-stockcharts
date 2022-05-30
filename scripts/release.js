const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');

const origPackage = fs.readFileSync(path.join(root, 'package.json')).toString();

try {
  // eslint-disable-next-line prefer-const
  let pkg = JSON.parse(origPackage);
  delete pkg.devDependencies;
  delete pkg.scripts;
  delete pkg.browserify;
  pkg.main = 'index.js';
  pkg.module = 'es/index.js';
  pkg.esnext = 'es/index.js';

  const buildPackage = JSON.stringify(pkg, null, 2);

  fs.writeFile(
    path.join(root, 'build', 'package.json'),
    buildPackage,
    function() {
      // eslint-disable-next-line no-console
      console.log('CJS package.json file rendered');
    }
  );
} catch (er) {
  // eslint-disable-next-line no-console
  console.error('package.json parse error: ', er);
  // process.exit(1);
}
