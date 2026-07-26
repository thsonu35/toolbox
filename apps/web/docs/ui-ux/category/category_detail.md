You are a Senior Product Manager, Senior UI/UX Architect, and Technical Writer.

Create a complete Product Requirement Document (PRD) for the Category Detail Page of a SaaS platform called Toolbox.

This document will be saved as:

docs/categories/category_detail.md

The page represents a single category such as:

Developer Suite

PDF Essentials

Image & Graphics

Security & Hash

AI Productivity

Data Converters

The page is already designed.

Do NOT redesign the UI.

Document how the page should work.

Include the following sections:

# Overview

Purpose

Goals

Target Users

User Journey

Business Objective

# Page Structure

Explain every section.

Navbar

Breadcrumb

Category Hero

Statistics Cards

Search Bar

Sticky Filter Bar

Featured Tools

Tool Grid

Coming Soon

About Category

Related Categories

FAQ

CTA

Footer

For every section explain:

Purpose

Displayed Data

Frontend Behaviour

Backend Requirements

Loading State

Empty State

Error State

Accessibility

SEO Considerations

Responsive Behaviour

# Tool Card Behaviour

ACTIVE

COMING_SOON

BETA

DISABLED

Explain how every status should appear in UI.

# Search

Explain search behaviour.

Debounce

Empty results

Loading

Pagination

# Filter Behaviour

Popular

Newest

Free

Coming Soon

Sort

Grid/List

# Tool Navigation

Explain routing.

/categories/{slug}

/tools/{slug}

# Performance

Lazy Loading

Skeleton

Caching

Code Splitting

Image Optimization

# Acceptance Criteria

List everything required before the page can be marked complete.

Write the document like an internal engineering specification.