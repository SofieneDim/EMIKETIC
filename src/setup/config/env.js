// Imports
import dotenv from 'dotenv'

// Load .env
dotenv.config()

// URL
export const APP_API_URL = process.env.REACT_APP_API_URL || "http://localhost:3030"

// Environment
export const NODE_ENV = process.env.NODE_ENV

// Port
export const PORT = process.env.PORT || 3000
