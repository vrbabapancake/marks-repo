---
title: "PagerDuty API Quickstart"
summary: "A short example of clear, task-based onboarding docs for an API."
tags: ["api", "getting-started", "technical-writing"]
---

This sample shows how I approach technical documentation for an API: short, task-based, and focused on helping someone be successful in their first 15–30 minutes.

## Who this is for

Someone who is comfortable with HTTP requests and wants to quickly integrate PagerDuty into their own tools or workflows.

## Before you start

- A PagerDuty account  
- An API token with the right permissions  
- A tool for making HTTP requests (for example, cURL or Postman)

## Step 1 – Create an API token

1. Sign in to your PagerDuty account.
2. Go to **User settings → API access**.
3. Create a new API token and copy it somewhere secure.

> Treat API tokens like passwords. Do not commit them to Git, paste them in screenshots, or share them publicly.

## Step 2 – Make your first request

Here’s a simple example using `curl` to list services:

```bash
curl https://api.pagerduty.com/services \
  -H "Authorization: Token token=<YOUR_API_TOKEN>" \
  -H "Accept: application/vnd.pagerduty+json;version=2"

