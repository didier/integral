![Integral banner](/static/cover.svg)

# Integral

_Unstyled, composable and accessible Svelte components_

### Unstyled (by default) 🖌

Integral aims to provide all components as-is, without styling. This way, you can use Integral to fit whatever design system you need. Everything can be easily customized with plain old CSS.

[more soon]

### Composable 🔣

Integral aims to keep the syntax simple and composable. No weird methods, messing with indices or workarounds. Use these Svelte components like you would normally.

### 100% (keyboard-)accessible 🥳

The main goal for this project is to create accessible-by-default components, because accessibility is essential (maybe even _integral_) for any website or application and thus should be easy.

## Usage

```html
<script>
  /* Supports SSR by default! No `svelte-integral/src/lib/Tabs.svelte` nonsense. */
  import { Tab, Tabs } from 'svelte-integral'
</script>

<Tabs>
  <Tab title="One">I'm the first tab, so I'm being shown by default.</Tab>
  <Tab title="Two">Hey! I'm number two, now back to you!</Tab>
  <Tab title="Three">Number three, look at me!</Tab>
  <Tab title="Four">Four. What's more?</Tab>
</Tabs>
```
