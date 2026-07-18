const fs = require('fs');
const path = require('path');

function walkDir(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function (file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walkDir(file));
        } else {
            if (file.endsWith('.tsx')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walkDir(path.join(__dirname, 'src', 'app'));

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    if (content.includes('justify: "center"')) {
        content = content.replace(/justify:\s*"center"/g, 'justifyContent: "center"');
        fs.writeFileSync(file, content);
        console.log('Fixed:', file);
    }
});
