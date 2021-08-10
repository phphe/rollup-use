/*!
 * @rollup-use/ts-starter v1.0.0
 * (c) phphe <phphe@outlook.com>
 * Homepage: null
 * Released under the ISC License.
 */
import * as hp from 'helper-js';

// test import out module and tree shaking
class DefaultExportClass {
    constructor() {
        this.a = 1;
        this.b = 2;
        this.c = 3;
    }
    d() {
        return this.a + this.b + this.c;
    }
    useOutsideFunction() {
        return (hp.randInt(100, 999) +
            hp.randString(8) +
            hp.randChoice(["a", "b", "c", "d", "e"]));
    }
}
DefaultExportClass.staticA = "foo";
class ExtendedClass extends DefaultExportClass {
    constructor() {
        super(...arguments);
        this.e = 4;
    }
    d() {
        return super.d() + this.e;
    }
}
const obj = {
    propA: 1,
    propB: "1",
    propC: ["1"],
};
function genericFun(param) {
    return param;
}

export { ExtendedClass, DefaultExportClass as default, genericFun, obj };
