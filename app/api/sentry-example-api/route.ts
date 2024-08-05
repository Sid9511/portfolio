import { NextResponse } from "next/server";
import * as Sentry from "@sentry/nextjs";

// Note: Since you have 'output: export' configured, the `dynamic` configuration might cause issues.
// Remove or adjust this if you use static export for the entire project.

export function GET() {
  try {
    // Log that the GET request is being processed
    console.log("Processing GET request in /api/sentry-example-api");

    // Simulate an error for Sentry testing only in development mode
    if (process.env.NODE_ENV === 'development') {
      throw new Error("Sentry Example API Route Error");
    }

    // Log a successful response
    console.log("Returning successful response");

    // If no error, return a valid response
    return NextResponse.json({ data: "Testing Sentry Error..." });
  } catch (error) {
    // Log the error
    console.error("Error occurred in /api/sentry-example-api:", error);

    // Capture the error with Sentry
    Sentry.captureException(error);

    // Return an error response
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
