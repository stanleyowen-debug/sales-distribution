const { PythonShell } = window.require('python-shell');

export function executePython(filePath, fileName, callback) {
    const pyShell = new PythonShell(localStorage.getItem('script-py'));
    pyShell.send(filePath);
    pyShell.send(fileName);
    pyShell.on('message', (outputPath) => {
        callback(outputPath);
    });
    pyShell.end((err) => {
        if (err) throw err;
    });
}
