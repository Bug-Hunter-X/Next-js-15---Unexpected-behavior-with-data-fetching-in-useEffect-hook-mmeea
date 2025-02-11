# Next.js 15 - Unexpected behavior with data fetching in useEffect hook

This repository demonstrates an issue with data fetching in a Next.js 15 application using the `useEffect` hook. The issue occurs in a dynamic route component where data is fetched asynchronously.  The data is fetched correctly, but there might be unexpected behavior like flickering or delayed rendering, or unexpected re-renders.

## Problem

The `About` page fetches data from an API route (`/api/data`).  While the data is displayed correctly, there might be visual glitches or additional un-necessary re-renders due to the asynchronous nature of the data fetching and how it interacts with the component's rendering lifecycle.

## Solution

The solution addresses this issue by using React Query or SWR (or similar data fetching libraries) for efficient data fetching, caching, and state management.