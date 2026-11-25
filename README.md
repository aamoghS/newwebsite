# site demo

Personal site for Aamogh. Next.js app that lists public work: agent tooling, systems experiments, shipped apps, and data projects.

## Run

```bash
bun install
bun run dev
```

Open http://localhost:3000.

## System design

How a request or a run moves through the code, then the choices behind that shape. In the decision charts, a **solid** box is the route this repo takes and a **dashed** box is the alternative it turns down; the edge label is the tradeoff.

### Request path

A Next.js app with no backend. Projects are a typed array in `src/data/work.ts`; the page renders them, and one client component, `WorkBench`, filters by lane in React state.

```mermaid
flowchart LR
  classDef chosen fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px,color:#1b5e20
  classDef rejected fill:#f5f5f5,stroke:#9e9e9e,stroke-width:1px,stroke-dasharray:5 5,color:#616161
  data["src/data/work.ts typed Project array"]
  page["app/page.tsx server component"]
  mandoo["Mandoo section"]
  bench["WorkBench client component"]
  lane["Lane filter in useState"]
  data --> page
  page --> mandoo
  page --> bench --> lane
  class data,page,mandoo,bench,lane chosen
```

### Why this shape

The content changes when the work changes, so it lives in the repo as typed data and a commit is the edit. Only the filter needs the browser, so only `WorkBench` is a client component.

```mermaid
flowchart TD
  classDef chosen fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px,color:#1b5e20
  classDef rejected fill:#f5f5f5,stroke:#9e9e9e,stroke-width:1px,stroke-dasharray:5 5,color:#616161
  content{"Where the project list lives"}
  content -->|"type-checked, edited in a commit"| ts["Typed array in the repo"]
  content -->|"a service to run for a short list"| cms["CMS or database"]
  filter{"Where lane filtering runs"}
  filter -->|"one small list, instant"| client["Client state in WorkBench"]
  filter -->|"a request per click"| server["Server round trip per lane"]
  class ts,client chosen
  class cms,server rejected
```
