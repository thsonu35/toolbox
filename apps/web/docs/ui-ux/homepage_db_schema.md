You are a Senior Software Architect, Senior Backend Engineer, Senior Database Architect, and Senior Product Manager.

Your task is to design the MVP backend architecture and technical documentation for my SaaS product called "Toolbox".

## Project Overview

Toolbox is an all-in-one online utility platform.

Users can access hundreds of tools from one platform.

Examples:

- JSON Formatter
- Password Generator
- UUID Generator
- PDF Merge
- Image Compressor
- Base64 Encoder
- AI Tools
- Security Tools
- Video Tools
- Audio Tools

However, for MVP only ONE tool will actually work.

Tool:

✅ JSON Formatter

Every other tool will display:

"Coming Soon"

Therefore do NOT over-engineer the database.

The database should support future expansion while remaining simple.

The frontend has already been completed.

Now I need proper backend planning.

---

# Deliverable

Create professional engineering documentation.

The document should be written as if it will be shared with frontend developers, backend developers, database engineers, and QA engineers.

Use proper Markdown.

---

# 1. Project Architecture

Explain

- Overall architecture
- Folder structure
- API flow
- Database flow
- Frontend communication
- Future scalability

---

# 2. MVP Scope

Explain clearly what belongs in MVP.

Working Features

- Homepage
- Categories
- Tool Listing
- Tool Detail
- JSON Formatter

Coming Soon Features

- PDF
- AI
- Image
- Audio
- Video
- Authentication
- Dashboard
- Analytics
- Subscription

Explain why they are excluded from MVP.

---

# 3. Database Design

Design only the required MVP tables.

Keep homepage data completely separate from tool data.

The homepage should have its own table.

Required Tables

homepage

categories

tools

faq

tool_executions

For every table provide

Purpose

Column Name

Data Type

Length

Nullable

Default

Primary Key

Foreign Key

Indexes

Description

Example Data

Use PostgreSQL.

Follow production naming conventions.

Example

created_at

updated_at

status

display_order

slug

is_active

is_featured

usage_count

tool_count

Do NOT use generic names.

Use professional naming.

---

# 4. Database Relationships

Explain relationships.

Homepage

↓

Categories

↓

Tools

↓

Tool Executions

FAQ

Generate an ER Diagram using text.

---

# 5. API Design

Design REST APIs.

GET /api/v1/home

GET /api/v1/categories

GET /api/v1/tools

GET /api/v1/tools/{slug}

POST /api/v1/tools/json-formatter

For every endpoint provide

Purpose

Request

Response

HTTP Status

Validation

Example Response

Example Errors

---

# 6. Mock JSON

Generate realistic JSON responses for every endpoint.

The JSON should exactly match future API responses.

The frontend should initially consume local JSON files.

Later only the service layer should change.

No React component should need modification.

---

# 7. TypeScript Interfaces

Generate complete TypeScript interfaces.

Examples

Homepage

Category

Tool

FAQ

Statistics

Hero

PopularTool

APIResponse

ErrorResponse

Use interface naming suitable for production.

---

# 8. Service Layer

Recommend frontend architecture.

Example

services

home.service.ts

category.service.ts

tool.service.ts

The service layer should initially read local JSON.

Later replace with API calls without changing UI components.

Provide code examples.

---

# 9. Backend Folder Structure

Recommend a clean backend structure.

Example

src

controllers

services

repositories

routes

middlewares

schemas

validators

models

utils

config

database

migrations

seeders

Explain the responsibility of every folder.

---

# 10. Homepage Data Flow

Explain how homepage data should be loaded.

homepage table

↓

categories table

↓

tools table

↓

faq table

↓

combined response

↓

GET /api/v1/home

↓

Frontend

---

# 11. Tool Data Flow

Explain

Category

↓

Tool

↓

Execution

↓

Response

↓

Frontend

---

# 12. Tool Status

The tools table should support

ACTIVE

COMING_SOON

DISABLED

BETA

Explain why this is better than using only true/false.

The frontend should display badges based on status.

---

# 13. Future Expansion

Explain how the architecture can later support

Authentication

Favorites

Collections

Search

Analytics

Subscriptions

Admin Panel

API Marketplace

without changing existing APIs.

---

# 14. Acceptance Criteria

The backend is considered complete when

Homepage API works

Categories API works

Tools API works

JSON Formatter API works

Homepage loads successfully

Frontend can switch from JSON to API by modifying only service files

No UI component changes required

---

# Important Requirements

Keep the architecture simple.

Do NOT design a huge enterprise database.

Only design what is required for MVP.

However, use production-quality naming conventions.

The design should be scalable.

The homepage should have its own database table and API.

The tools should have their own database table.

Homepage content must not be hardcoded.

The tools table must contain all tools, but only JSON Formatter should have status ACTIVE.

Every other tool should have status COMING_SOON.

The final documentation should look like an internal engineering specification used by companies like Vercel, GitHub, Notion, or Linear.

Use tables, diagrams, JSON examples, SQL examples, TypeScript interfaces, and implementation notes wherever appropriate.