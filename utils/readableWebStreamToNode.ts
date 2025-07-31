import { Readable } from "stream";

export function readableWebStreamToNode(
  stream: ReadableStream<Uint8Array>
): Readable {
  const reader = stream.getReader();

  return new Readable({
    async read() {
      const { done, value } = await reader.read();
      if (done) {
        this.push(null); // no more data
      } else {
        this.push(value);
      }
    },
  });
}
