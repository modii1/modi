import { serveDir } from "https://deno.land/std@0.224.0/http/file_server.ts";

export default {
  async fetch(request) {
    // يخدم ملفات مجلد public (الذي بداخله index.html)
    return serveDir(request, {
      fsRoot: "public",
      showDirListing: false,
      quiet: true,
    });
  }
};
