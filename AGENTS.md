# Automation & AI Agents

This repository contains automation scripts to generate daily blog content.

## Daily Blog Generation

A GitHub Action (`.github/workflows/daily-blog.yml`) runs daily to generate a new blog post using OpenAI.

### Setup Requirements

For this automation to work, you must set up the following **Repository Secret**:

1. Go to **Settings** > **Secrets and variables** > **Actions**.
2. Click **New repository secret**.
3. Name: `OPENAI_API_KEY`
4. Value: Your OpenAI API Key (starting with `sk-...`).

### How it works

- The script `scripts/generate-blog.ts` picks a random topic (Philosophy, Tech, Coding, News).
- It reads `src/app/blog/BLOG_WRITING_GUIDE.mdx` to understand the writing style and format.
- It generates a new MDX file in `src/app/blog/posts/`.
- The GitHub Action commits and pushes this new file to the repository.
