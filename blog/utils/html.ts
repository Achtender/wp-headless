import { DOMParser, initParser } from "jsr:@b-fuze/deno-dom/wasm-noinit";

await initParser();
const parser = new DOMParser();

export function parse(html: string): unknown | undefined{
  const node = parser //
    .parseFromString(`<div>${html || ""}</div>`, "text/html")
    .body.children[0] as unknown as HTMLElement | undefined;

  return node ? mapElements(node) : undefined;
}

export function mapElements(node: HTMLElement): unknown {
  return ({
    tagName: node.tagName,
    attributes: Array.from(node.attributes).reduce((result, attr) => {
      result[attr.name] = attr.value;
      return result;
    }, {} as Record<string, string>),
    children: Array.from(node.children).map((_) => mapElements(_)),
    innerText: node.innerText,
    innerHTML: node.innerHTML,
  });
}
