let { stat, exists, readFile } = require('fs');
//等同于
let _fs = require('fs');
let stat = _fs.stat;
let exists= _fs.exists;
let readFile = _fs.readFile;
//上述代码的实质是整体加载fa模块（即加载fs的所有方法）,生成一个对象（ _fs ）
