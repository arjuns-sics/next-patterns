# Next.js Rendering Patterns – Teaching Template Guide

This document is designed to help an agent set up a **single Next.js project** that demonstrates **all major rendering patterns** in modern Next.js (App Router, Next.js 13+ / 14+). The goal is to make the project a **teaching and reference tool**, where each route clearly shows *when*, *where*, and *why* a rendering strategy is used.

---

## 0. Project Assumptions

* **Next.js App Router** (`app/` directory)
* **TypeScript enabled**
* Uses **React Server Components (default)**
* Tailwind or minimal styling (not essential)
* Data fetching uses `fetch()` with cache options

---

## 1. Folder & Route Structure (High-Level)

```
app/
├── layout.tsx
├── page.tsx                  # Landing page explaining rendering types
├── csr/
│   └── page.tsx
├── ssr/
│   └── page.tsx
├── ssg/
│   └── page.tsx
├── isr/
│   └── page.tsx
├── streaming/
│   └── page.tsx
├── ppr/
│   └── page.tsx
├── rsc/
│   └── page.tsx
├── server-actions/
│   └── page.tsx
└── api/
    └── time/route.ts
```

Each route demonstrates **exactly one primary rendering pattern**.

---

## 2. Rendering Patterns to Implement

### 2.1 Static Site Generation (SSG)

**Concept**

* Page rendered at **build time**
* HTML is static
* Fastest possible response

**How to implement**

* Default behavior in App Router
* Use `fetch()` with `cache: 'force-cache'`

```ts
await fetch(url, { cache: 'force-cache' })
```

**Teaching points**

* Happens at build time
* No per-request computation
* Best for marketing pages, docs

**Route**: `/ssg`

---

### 2.2 Server-Side Rendering (SSR)

**Concept**

* Rendered on **every request**
* Always fresh data
* Slower than SSG

**How to implement**

* Use `cache: 'no-store'`

```ts
await fetch(url, { cache: 'no-store' })
```

**Teaching points**

* Runs on server for every request
* Useful for dashboards, auth-based pages

**Route**: `/ssr`

---

### 2.3 Incremental Static Regeneration (ISR)

**Concept**

* Static page that **revalidates** in the background
* Combines SSG speed + freshness

**How to implement**

```ts
await fetch(url, { next: { revalidate: 10 } })
```

**Teaching points**

* Page is cached
* Rebuilt after interval
* Old content served while revalidating

**Route**: `/isr`

---

### 2.4 Client-Side Rendering (CSR)

**Concept**

* Rendering happens in the browser
* JS required
* Similar to traditional React

**How to implement**

* Add `'use client'`
* Fetch data inside `useEffect`

```ts
'use client'
```

**Teaching points**

* No SEO-friendly HTML
* Good for highly interactive UIs

**Route**: `/csr`

---

### 2.5 React Server Components (RSC)

**Concept**

* Default in App Router
* Components render on the server
* No JS sent to browser

**How to demonstrate**

* Fetch data directly in component
* No `use client`

**Teaching points**

* Smaller JS bundles
* Secure data access
* Cannot use browser-only APIs

**Route**: `/rsc`

---

### 2.6 Streaming & Suspense

**Concept**

* Send HTML in chunks
* Improves perceived performance

**How to implement**

* Use `Suspense`
* Artificial delays in components

```tsx
<Suspense fallback={<Loading />}>
  <SlowComponent />
</Suspense>
```

**Teaching points**

* Page renders progressively
* Works with Server Components

**Route**: `/streaming`

---

### 2.7 Partial Prerendering (PPR)

**Concept**

* Hybrid of static + dynamic
* Static shell, dynamic holes

**How to implement**

* Enable PPR in `next.config.js`
* Use `Suspense` boundaries

**Teaching points**

* Static outer layout
* Dynamic inner data
* Edge-first optimization

**Route**: `/ppr`

---

### 2.8 Server Actions

**Concept**

* Run server code from forms or buttons
* No API routes required

**How to implement**

```ts
'use server'
```

**Teaching points**

* Replaces many REST endpoints
* Secure mutations

**Route**: `/server-actions`

---

## 3. API Route for Demonstrations

Create a simple API route:

```ts
app/api/time/route.ts
```

Returns:

* Current timestamp
* Random number

Used to visually show caching differences.

---

## 4. Landing Page (`/`)

Should:

* Explain all rendering patterns
* Link to each demo route
* Show a comparison table

---

## 5. Teaching Enhancements (Highly Recommended)

* Display:

  * Render time
  * Cache strategy used
  * Whether data is fresh
* Add comments inside code explaining *why* each option exists
* Use environment badges:

  * `Static`
  * `Dynamic`
  * `Client`

---

## 6. Summary Table (For Learners)

| Pattern   | Where Rendered | Cached   | SEO | JS Sent |
| --------- | -------------- | -------- | --- | ------- |
| SSG       | Build          | Yes      | Yes | Minimal |
| SSR       | Server         | No       | Yes | Minimal |
| ISR       | Server         | Timed    | Yes | Minimal |
| CSR       | Browser        | No       | No  | Full    |
| RSC       | Server         | Optional | Yes | None    |
| Streaming | Server         | Optional | Yes | Minimal |
| PPR       | Mixed          | Partial  | Yes | Minimal |

---

## 7. Goal Outcome

After setup, this project should:

* Serve as a **living Next.js rendering reference**
* Allow learners to **see behavior differences instantly**
* Be easy to extend as Next.js evolves

---

**This document can be handed directly to an agent as implementation instructions.**
