import { component$, useClientEffect$ } from '@builder.io/qwik';
import init from '../../grid/pkg';

export const Grid = component$(() => {
  useClientEffect$(async () => {
    const wasm = await init();
    wasm.greet();
  });

  return (
    <div>
      <h1>Grid</h1>
    </div>
  );
});
