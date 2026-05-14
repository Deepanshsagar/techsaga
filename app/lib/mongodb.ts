// lib/mongodb.ts

import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable"
  );
}

/**
 * Global type declaration
 */
declare global {
  // eslint-disable-next-line no-var
  var mongooseConnection:
    | {
        conn: typeof mongoose | null;
        promise: Promise<typeof mongoose> | null;
      }
    | undefined;
}

/**
 * Cached connection
 */
const cached = global.mongooseConnection || {
  conn: null,
  promise: null,
};

global.mongooseConnection = cached;

export default async function connectDB() {
  try {
    // Return cached connection
    if (cached.conn) {
      return cached.conn;
    }

    // Create new connection promise
    if (!cached.promise) {
      cached.promise = mongoose.connect(MONGODB_URI, {
        bufferCommands: false,
      });
    }

    // Await connection
    cached.conn = await cached.promise;

    return cached.conn;
  } catch (error) {
    cached.promise = null;

    console.error("MongoDB Connection Error:", error);

    throw error;
  }
}