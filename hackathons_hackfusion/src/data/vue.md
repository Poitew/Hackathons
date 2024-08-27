
# Vue.js with Composition API
&nbsp;

Vue.js is a **progressive JavaScript framework** used for building user interfaces and single-page applications. The Composition API, introduced in Vue 3, offers a flexible and intuitive way to write component logic using function-based approaches.

---

&nbsp;

# The Basics

&nbsp;

The Composition API enables developers to organize code by logical concerns rather than by options, which enhances readability and maintainability.

&nbsp;

## Getting Started

To get started with Vue 3 and the Composition API you can create a project using Vue CLI or Vite:

```bash
    # Using Vue CLI
    npm install -g @vue/cli
    vue create my-vue-app

    # Using Vite (recommended for modern Vue projects)
    npm create vite@latest my-vue-app -- --template vue
    cd my-vue-app
    npm install
```

Make sure to select Vue 3 during the setup process.

&nbsp;

### **Setting Up a Basic Component**

Here's how you can create a simple component using the Composition API:

```html
    <template>
    	<div>
    		<p>{{ message }}</p>
    		<button @click="updateMessage">Click me</button>
    	</div>
    </template>

    <script setup>
    	import { ref } from 'vue';

    	const message = ref('Hello, Vue with Composition API and <script setup>!');
    	const updateMessage = () => {
    		message.value = 'You clicked the button!';
    	};
    </script>
```

In this example:
- `ref` is used to define reactive data.
- `message` is a reactive reference, and `updateMessage` is a function that changes its value.

---

&nbsp;

# Reactive Data

&nbsp;

The `ref` and `reactive` functions are at the core of the reactivity system in the Composition API.

&nbsp;

### **Using `ref` for Primitive Values**

`ref` is used to create reactive references to primitive values (string, number, boolean, etc.).

```html
    <template>
    	<div>
    		<p>Count: {{ count }}</p>
    		<button @click="increment">Increment</button>
    	</div>
    </template>

    <script setup>
    	import { ref } from 'vue';

    	const count = ref(0);
    	const increment = () => {
    		count.value++;
    	};
    </script>
```

&nbsp;

### **Using `reactive` for Objects**

`reactive` is used to create a reactive state object.

```html
    <template>
    	<div>
    		<p>{{ state.name }} is at version {{ state.version }}</p>
    		<button @click="updateVersion">Update Version</button>
    	</div>
    </template>

    <script setup>
    	import { reactive } from 'vue';

    	const state = reactive({
    		name: 'Vue',
    		version: 3,
    	});

    	const updateVersion = () => {
    		state.version++;
    	};
    </script>
```

---

&nbsp;

# Computed Properties

&nbsp;

Computed properties are created using the `computed` function, which allows you to define reactive, cached values based on other reactive data.

```html
    <template>
    	<div>
    		<p>Full Name: {{ fullName }}</p>
    		<input v-model="firstName" placeholder="First Name">
    		<input v-model="lastName" placeholder="Last Name">
    	</div>
    </template>

    <script setup>
    	import { ref, computed } from 'vue';

    	const firstName = ref('John');
    	const lastName = ref('Doe');

    	const fullName = computed(() => {
    		return `${firstName.value} ${lastName.value}`;
    	});
    </script>
```

In this example, `fullName` will automatically update whenever `firstName` or `lastName` changes.

---

&nbsp;

# Watching Data

&nbsp;

The `watch` function allows you to perform side effects in response to changes in reactive data.

&nbsp;

### **Basic Watcher**

```html
    <template>
    	<div>
    		<p>Count: {{ count }}</p>
    		<button @click="increment">Increment</button>
    	</div>
    </template>

    <script setup>
    	import { ref, watch } from 'vue';

    	const count = ref(0);

    	watch(count, (newValue, oldValue) => {
    		console.log(`Count changed from ${oldValue} to ${newValue}`);
    	});

    	const increment = () => {
    		count.value++;
    	};
    </script>
```

&nbsp;

### **Watching Multiple Sources**

You can watch multiple sources by passing an array to the `watch` function.

```html
    <template>
    	<div>
    		<p>{{ firstName }} {{ lastName }}</p>
    		<input v-model="firstName" placeholder="First Name">
    		<input v-model="lastName" placeholder="Last Name">
    	</div>
    </template>

    <script setup>
    	import { ref, watch } from 'vue';

    	const firstName = ref('John');
    	const lastName = ref('Doe');

    	watch([firstName, lastName], ([newFirst, newLast], [oldFirst, oldLast]) => {
    		console.log(`Name changed from ${oldFirst} ${oldLast} to ${newFirst} ${newLast}`);
    	});
    </script>
```

---

&nbsp;

# Lifecycle Hooks

&nbsp;

Lifecycle hooks are available in the Composition API and can be used inside `<script setup>` to manage component lifecycles.

&nbsp;

### **Using Lifecycle Hooks**

```html
    <template>
    	<div>
    		<p>Check the console for lifecycle logs.</p>
    	</div>
    </template>

    <script setup>
    	import { onMounted, onUnmounted } from 'vue';

    	onMounted(() => {
    		console.log('Component has been mounted');
    	});

    	onUnmounted(() => {
    		console.log('Component is about to be destroyed');
    	});
    </script>
```

Other hooks like `onBeforeMount`, `onBeforeUpdate`, and `onUpdated` can be used similarly.

---

&nbsp;

# Using Vue Router with `<script setup>`

&nbsp;

Vue Router integrates seamlessly with the Composition API. You can use `useRoute` and `useRouter` to handle routing in your components.

&nbsp;

### **Accessing Route and Router**

```html
    <template>
    	<div>
    		<p>Current Route: {{ currentRoute }}</p>
    		<button @click="navigate">Go Home</button>
    	</div>
    </template>

    <script setup>
    	import { ref } from 'vue';
    	import { useRoute, useRouter } from 'vue-router';

    	const route = useRoute();
    	const router = useRouter();

    	const currentRoute = ref(route.path);

    	const navigate = () => {
    		router.push({ name: 'home' });
    	};
    </script>
```

- `useRoute` provides access to the current route object.
- `useRouter` provides methods to programmatically navigate to different routes.

---

&nbsp;

# Reusable Composition Functions

&nbsp;

The Composition API allows you to extract and reuse logic across different components by using custom composition functions (often referred to as composables).

&nbsp;

### **Creating a Reusable Composable**

Create a reusable composable file:

```javascript
    // useCounter.js
    import { ref } from 'vue';

    export function useCounter() {
    	const count = ref(0);
    	const increment = () => {
    		count.value++;
    	};
    	return {
    		count,
    		increment,
    	};
    }
```

&nbsp;

### **Using the Composable in a Component**

```html
    <template>
    	<div>
    		<p>Count: {{ count }}</p>
    		<button @click="increment">Increment</button>
    	</div>
    </template>

    <script setup>
    	import { useCounter } from './useCounter.js';

    	const { count, increment } = useCounter();
    </script>
```

---

&nbsp;

# Exercise

&nbsp;

Create a Vue 3 application using the Composition API and `<script setup>`. Your app should have the following:

1. A counter component that uses a reusable composable to manage its state.
2. A computed property that shows whether the count is odd or even.
3. A lifecycle hook that logs to the console when the component is mounted.
4. Use Vue Router to navigate between different views.

---

These are the basics of Vue.js with the Composition API and `<script setup>`. This approach enhances flexibility, maintainability, and reusability in your Vue applications. Happy coding with Vue 3!