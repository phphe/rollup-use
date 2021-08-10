export { default } from "./LibraryComponent.vue";

export function otherExport() {
  console.log("this is a pure js export");
}

export function otherExport2(obj: Record<string, unknown>) {
  // @ts-ignore
  return obj.a?.b?.c;
}
