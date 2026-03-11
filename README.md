# bertui-components ⚡

Official component library for [BertUI](https://www.npmjs.com/package/bertui). 17 production-ready React components with default dark styles, built for the BertUI ecosystem.

[![Version](https://img.shields.io/badge/version-1.1.0-blue)](https://www.npmjs.com/package/bertui-components)
[![Bun Powered](https://img.shields.io/badge/runtime-Bun-f472b6)](https://bun.sh)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

---

## Install

```bash
bun add @peaseernest/bertui-components
```

---

## Components

| Group | Components |
|---|---|
| **Layout** | `Sidebar`, `TopNav` |
| **Media** | `Carousel` |
| **Popover / Menu** | `Tooltip`, `Dropdown`, `ContextMenu`, `CommandPalette` |
| **Overlay** | `Modal`, `Drawer`, `Toast` |
| **Form** | `Input`, `Select`, `Toggle`, `Checkbox`, `Radio`, `RadioGroup` |
| **Utility** | `Search` |

---

## Usage

```jsx
import {
  Sidebar, SidebarItem,
  TopNav, TopNavItem,
  Carousel, CarouselImage, CarouselSlide,
  Search,
  Tooltip,
  Dropdown, DropdownItem,
  ContextMenu,
  CommandPalette,
  Modal,
  Drawer,
  ToastProvider, useToast,
  Input,
  Select,
  Toggle,
  Checkbox,
  Radio, RadioGroup,
} from 'bertui-components'
```

---

## Layout

### `<Sidebar>`

```jsx
<Sidebar>
  <SidebarItem label="Home"     to="/"         icon="🏠" />
  <SidebarItem label="About"    to="/about"    icon="👤" />
  <SidebarItem label="Settings" to="/settings" icon="⚙️" />
</Sidebar>

<Sidebar items={[
  { label: 'Home', to: '/', icon: '🏠' },
]} defaultCollapsed position="right" />
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `items` | `{label, to, icon}[]` | — | Nav items via prop |
| `defaultCollapsed` | `boolean` | `false` | Start collapsed |
| `position` | `'left' \| 'right'` | `'left'` | Side to render on |

---

### `<TopNav>`

```jsx
<TopNav logo="MyApp" logoTo="/">
  <TopNavItem label="Home"  to="/" />
  <TopNavItem label="Blog"  to="/blog" />
</TopNav>

<TopNav logo="MyApp" sticky={false} items={[{ label: 'Home', to: '/' }]} />
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `logo` | `ReactNode` | — | Logo text or element |
| `logoTo` | `string` | `'/'` | Logo href |
| `items` | `{label, to}[]` | — | Nav items via prop |
| `sticky` | `boolean` | `true` | Stick to top on scroll |

---

## Media

### `<Carousel>`

```jsx
<Carousel autoPlay showDots showArrows>
  <CarouselImage src="./img1.png" alt="Slide 1" />
  <CarouselImage src="./img2.png" alt="Slide 2" />
</Carousel>

<Carousel items={['./img1.png', './img2.png']} autoPlay interval={5000} />

<Carousel>
  <CarouselSlide><h2>Custom content</h2></CarouselSlide>
</Carousel>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `items` | `string[]` | — | Array of image src strings |
| `autoPlay` | `boolean` | `false` | Auto-advance slides |
| `interval` | `number` | `3000` | Ms between slides |
| `showDots` | `boolean` | `true` | Dot indicators |
| `showArrows` | `boolean` | `true` | Prev/next arrows |

---

## Popover / Menu

### `<Tooltip>`

```jsx
<Tooltip text="Helpful info" position="top">
  <button>Hover me</button>
</Tooltip>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `text` | `string` | — | Tooltip content |
| `position` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'` | Placement |

---

### `<Dropdown>`

```jsx
<Dropdown trigger={<button>Open ▾</button>} align="left">
  <DropdownItem label="Edit"   icon="✏️" onClick={() => {}} />
  <DropdownItem divider />
  <DropdownItem label="Delete" icon="🗑️" onClick={() => {}} />
</Dropdown>

<Dropdown trigger={<button>Options ▾</button>} items={[
  { label: 'Edit',   icon: '✏️', onClick: () => {} },
  { divider: true },
  { label: 'Delete', icon: '🗑️', onClick: () => {} },
]} />
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `trigger` | `ReactNode` | — | Element that opens the menu |
| `items` | `{label, icon, onClick, divider}[]` | — | Items via prop |
| `align` | `'left' \| 'right'` | `'left'` | Menu alignment |

---

### `<ContextMenu>`

```jsx
<ContextMenu items={[
  { label: 'Open',   icon: '📂', onClick: () => {} },
  { label: 'Delete', icon: '🗑️', onClick: () => {} },
]}>
  <div>Right-click me</div>
</ContextMenu>
```

---

### `<CommandPalette>`

Opens with `Ctrl+K` / `Cmd+K`.

```jsx
<CommandPalette
  items={[
    { label: 'Go Home',       icon: '🏠', onClick: () => {}, shortcut: '⌘H' },
    { label: 'New File',      icon: '📄', onClick: () => {}, shortcut: '⌘N' },
    { label: 'Open Settings', icon: '⚙️', onClick: () => {} },
  ]}
  onSelect={(item) => console.log(item)}
/>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `items` | `{label, icon, onClick, shortcut}[]` | — | Command items |
| `hotkey` | `string` | `'k'` | Key for Ctrl/Cmd combo |
| `onSelect` | `(item) => void` | — | Fires on selection |

---

## Overlay

### `<Modal>`

Closes on Escape or backdrop click.

```jsx
const [open, setOpen] = useState(false);

<Modal open={open} onClose={() => setOpen(false)} title="Confirm" size="md">
  <p>Are you sure?</p>
</Modal>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `open` | `boolean` | — | Visibility |
| `onClose` | `() => void` | — | Close callback |
| `title` | `string` | — | Header title |
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Width |

---

### `<Drawer>`

Slides in from any edge.

```jsx
<Drawer open={open} onClose={() => setOpen(false)} title="Menu" side="right" size="320px">
  <p>Content here.</p>
</Drawer>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `open` | `boolean` | — | Visibility |
| `onClose` | `() => void` | — | Close callback |
| `side` | `'left' \| 'right' \| 'top' \| 'bottom'` | `'right'` | Slide direction |
| `size` | `string` | `'320px'` | Width or height |

---

### `<Toast>` / `useToast`

Wrap app in `<ToastProvider>`, fire toasts anywhere with `useToast()`.

```jsx
// Root layout
<ToastProvider>
  <App />
</ToastProvider>

// Anywhere inside
const toast = useToast();
toast({ message: 'Saved!',        type: 'success' });
toast({ message: 'Network error', type: 'error',   duration: 5000 });
toast({ message: 'Heads up',      type: 'warning' });
toast({ message: 'FYI',           type: 'info' });
```

| Option | Type | Default | Description |
|---|---|---|---|
| `message` | `string` | — | Toast text |
| `type` | `'info' \| 'success' \| 'error' \| 'warning'` | `'info'` | Color variant |
| `duration` | `number` | `3000` | Auto-dismiss ms |

---

## Form

### `<Input>`

```jsx
<Input label="Email" type="email" placeholder="you@example.com"
  value={email} onChange={e => setEmail(e.target.value)}
  hint="We'll never share your email." />

<Input label="Password" type="password" value={pw}
  onChange={e => setPw(e.target.value)}
  error="Must be at least 8 characters." />

<Input label="Search" icon={<span>🔍</span>} placeholder="Search..." />
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `label` | `string` | — | Field label |
| `type` | `string` | `'text'` | Input type |
| `error` | `string` | — | Error message |
| `hint` | `string` | — | Helper text |
| `icon` | `ReactNode` | — | Left icon |
| `disabled` | `boolean` | `false` | Disabled |

---

### `<Select>`

```jsx
<Select label="Country" placeholder="Pick a country"
  value={country} onChange={e => setCountry(e.target.value)}
  options={[
    { label: 'Kenya',         value: 'ke' },
    { label: 'United States', value: 'us' },
    { label: 'Japan',         value: 'jp' },
  ]} />
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `options` | `{label, value}[] \| string[]` | — | Options list |
| `placeholder` | `string` | — | Empty default option |
| `error` | `string` | — | Error message |

---

### `<Toggle>`

```jsx
<Toggle checked={enabled} onChange={e => setEnabled(e.target.checked)}
  label="Enable notifications" />
```

---

### `<Checkbox>`

```jsx
<Checkbox checked={checked} onChange={e => setChecked(e.target.checked)}
  label="Accept terms" />

<Checkbox indeterminate label="Select all" />
```

---

### `<Radio>` / `<RadioGroup>`

```jsx
<RadioGroup
  value={selected}
  onChange={setSelected}
  options={[
    { label: 'Option A', value: 'a' },
    { label: 'Option B', value: 'b' },
    { label: 'Option C', value: 'c', disabled: true },
  ]}
/>
```

---

## Utility

### `<Search>`

```jsx
<Search
  placeholder="Search posts..."
  onSearch={query => console.log(query)}
  onChange={val => console.log(val)}
  debounce={300}
/>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `placeholder` | `string` | `'Search...'` | Placeholder |
| `onSearch` | `(q: string) => void` | — | Fires on Enter or debounce |
| `onChange` | `(v: string) => void` | — | Fires on every keystroke |
| `debounce` | `number` | `0` | Debounce ms |

---

## Project Structure

```
bertui-components/
├── package.json
├── README.md
└── src/
    ├── index.js
    ├── styles/
    │   └── bertui-components.css
    └── components/
        ├── Sidebar/
        ├── TopNav/
        ├── Carousel/
        ├── Search/
        ├── Tooltip/
        ├── Dropdown/
        ├── ContextMenu/
        ├── CommandPalette/
        ├── Modal/
        ├── Drawer/
        ├── Toast/
        ├── Input/
        ├── Select/
        ├── Toggle/
        ├── Checkbox/
        └── Radio/
```

---

## License

MIT © Pease Ernest
