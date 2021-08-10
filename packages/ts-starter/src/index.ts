// test import out module and tree shaking
import * as hp from "helper-js";

export default class DefaultExportClass {
  static staticA = "foo";
  static staticB: number;
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

export const obj = {
  propA: 1,
  propB: "1",
  propC: ["1"],
};

export interface Interface1 {
  propA: number;
  propB: string;
  porpC: number[];
  propD?: string[];
}

export function genericFun<T>(param: T) {
  return param;
}

export const addClass = hp.addClass;

function f() {
  console.log("f(): evaluated");
  return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
      console.log("f(): called");
  }
}

function g() {
  console.log("g(): evaluated");
  return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
      console.log("g(): called");
  }
}

export class DecoratorExapmle {
  @f()
  @g()
  // @ts-ignore
  method() {}
}
