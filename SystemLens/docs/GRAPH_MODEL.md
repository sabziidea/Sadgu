# SystemLens Graph Model

## Principle
SystemLens uses one underlying graph. Customer Flow, Product Flow, Workflow, Infrastructure, CHAIN, System Thinking, Root Cause, System Map, Top View, and Documentation are projections/derivations of that graph.

## Graph-level structure
The current bundle uses graph structures that include, as applicable:
- graph/project identity and name/description
- `nodes`
- `edges`
- `groups`
- `views`
- per-view positions/metadata
- optional `chain`
- root-cause/investigation evidence metadata
- causal-loop/system-thinking metadata

## Node model
Observed/current node fields include concepts such as:
- `id` — unique identifier
- `name`
- `type` — e.g. Service, Application, API, Database, Variable, Metric, Cause, Problem, Evidence
- `layer` — common layers include Customer, Client, Product, Application, Edge, Services, Data, Events, External Systems, Outcomes
- `description`
- `properties` / impact and I/O metadata where used
- `metrics`
- `owner`
- `assumptions`
- `status` / evidence confidence where used
- `detail` — density/detail filtering
- `x`, `y` and/or per-view position data

## Edge model
Observed/current edge fields include:
- `id`
- `source`
- `target`
- `relationship`
- optional `label` / `description`
- optional `direction`
- optional `confidence`
- causal metadata such as `polarity` / delay where relevant

Every source/target must reference an existing node. Relationship semantics, not arbitrary view styling, should drive traversal and behavior.

## CHAIN
CHAIN is graph-backed. It references existing node IDs and graph relationships rather than duplicating components. The current model includes:
- request
- start / end node IDs
- `steps` keyed by graph node ID
- `links` keyed by graph relationship/edge ID
- link semantics including Normal, Fallback, Compensation, Response and optional required/async/outcome metadata

## Root Cause / evidence
Root Cause uses graph relationships such as CAUSES, AFFECTS, BLOCKS and can add evidence nodes/relationships such as SUPPORTS. Investigation/evidence data must remain associated with the same graph entities.

## System Thinking
Causal variables/metrics and CAUSES/AFFECTS/BLOCKS relationships can be traversed to identify causal paths and loops. Polarity/delay metadata belongs on the relationship where applicable.

## Validation rules
- unique node IDs
- valid edge source/target references
- no accidental duplicate semantic entities
- valid relationship/view metadata
- CHAIN references must point to existing graph nodes/edges
- generated changes should be validated before replacing project state
