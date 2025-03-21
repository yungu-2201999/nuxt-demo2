import { defineComponent, createElementBlock } from 'vue';

const ServerPlaceholder = defineComponent({
  name: "ServerPlaceholder",
  render() {
    return createElementBlock("div");
  }
});

// @__NO_SIDE_EFFECTS__
async function createClientPage(loader) {
  const m = await loader();
  m.default || m;
  return pageToClientOnly();
}
function pageToClientOnly(component) {
  {
    return ServerPlaceholder;
  }
}

export { createClientPage };
//# sourceMappingURL=client-component.mjs.map
