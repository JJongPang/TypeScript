// Java: Exception
// JavaScript: Error

// Error(Exception) Handling: try -> catch -> finally
function readFile(fileName: string): string {
    if(fileName === 'Not File') {
        throw new Error(`Not File ${fileName}`);
    }
    return 'file contents';
}

function closeFile(fileName: string): void {
    console.log(`${fileName} Close`);
}

const fileName = 'Not File';

try {
    console.log(readFile(fileName));
}catch(e) {
    console.log(`catched ${e}~!!!!`)
}finally {
    closeFile(fileName);
}