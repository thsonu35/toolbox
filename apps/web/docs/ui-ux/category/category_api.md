You are a Senior Backend Architect and API Designer.

Design the REST APIs required for the Toolbox Category Page.

This document will be saved as

docs/categories/category_api.md

Use REST best practices.

API Version

/api/v1

Create documentation for the following APIs.

GET /api/v1/categories/{slug}/page

This endpoint should return everything required to render the complete page in one request.

Include

Category Information

Statistics

Featured Tools

Tool Grid

Coming Soon Tools

Related Categories

FAQ

Response Structure

Example JSON

Error Responses

Validation

Caching Strategy

HTTP Status Codes

------------------------------------------------

GET /api/v1/categories/{slug}

Purpose

Returns category information only.

------------------------------------------------

GET /api/v1/categories/{slug}/tools

Supports

search

filter

sort

page

limit

Example

GET /api/v1/categories/developer-suite/tools?page=1&limit=12&filter=POPULAR&sort=usage&search=json

------------------------------------------------

GET /api/v1/categories/{slug}/featured-tools

Returns

Featured tools only.

------------------------------------------------

GET /api/v1/categories/{slug}/coming-soon

Returns

Tools where

status = COMING_SOON

------------------------------------------------

GET /api/v1/categories/{slug}/related

Returns

Related categories.

------------------------------------------------

GET /api/v1/categories/{slug}/faq

Returns

FAQ list.

------------------------------------------------

POST /api/v1/tools/json-formatter

The only working tool in MVP.

Request Example

Response Example

Validation

Error Handling

------------------------------------------------

For every API provide

Purpose

URL

Method

Headers

Path Parameters

Query Parameters

Request Body

Response Body

Validation

Business Rules

Success Response

Error Response

HTTP Status Codes

Database Tables Used

Indexes Used

SQL Query Example

Frontend Usage

Caching Recommendations

Rate Limiting Recommendations

Generate complete JSON examples for every endpoint.

Use production-quality API documentation similar to Stripe, GitHub or Notion.