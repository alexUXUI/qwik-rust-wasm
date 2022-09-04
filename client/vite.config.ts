import { defineConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import wasmPack from 'vite-plugin-wasm-pack';

export default defineConfig(() => {
  return {
    plugins: [qwikVite(), wasmPack('./src/grid')],
  };
});
