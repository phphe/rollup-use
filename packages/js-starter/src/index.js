// test import out module and tree shaking
import * as hp from "helper-js";

export default class DefaultExportClass {
  static staticA = "foo";
  static staticB;
  a = 1;
  b = 2;
  c = 3;
  d() {
    return this.a + this.b + this.c;
  }
  useOutsideFunction() {
    return (
      hp.randInt(100, 999) +
      hp.randString(8) +
      hp.randChoice(["a", "b", "c", "d", "e"])
    );
  }
}

export class ExtendedClass extends DefaultExportClass {
  e = 4;
  d() {
    return super.d() + this.e;
  }
}
