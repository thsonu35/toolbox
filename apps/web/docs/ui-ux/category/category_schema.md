You are a Senior Database Architect.

Design the complete PostgreSQL schema required for the Category Page of Toolbox.

This document will be saved as

docs/categories/category_schema.md

Only create tables required for the Category Page MVP.

Do NOT design authentication, payments, subscriptions or admin tables.

Required Tables

categories

tools

category_faqs

category_related

tool_executions

For every table include

Purpose

Table Name

Columns

Column Name

Data Type

Length

Nullable

Default Value

Primary Key

Foreign Key

Unique Constraints

Indexes

Check Constraints

Description

Example Data

Generate PostgreSQL CREATE TABLE statements.

Create indexes for

slug

category_id

status

display_order

is_featured

is_popular

usage_count

created_at

Explain relationships.

Generate an ER Diagram.

Example

categories

↓

tools

↓

tool_executions

categories

↓

category_faqs

categories

↓

category_related

Explain why every table exists.

Explain future scalability.

Suggest future tables but do NOT implement them.

Examples

favorites

collections

tags

analytics

users

search_history

The document should follow production database standards.