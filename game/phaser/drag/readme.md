- 命名空间 name space
    Phaser { }
    1. 申明领地
    取名字  var MIUI = {}
    MIUI.version = '7.77'
    MIUI.openSystem = function() { }
    游戏框架 最小化入侵我们的window 
    污染了全局命名空间
    2. var Phaser = {}   挂载到window 作用域 scope
    window => 
    3. ES5 类的构造 function() {}
    函数名首字母大写 类 构造函数
    方法 Phaser.Game.Prototype.getName
    