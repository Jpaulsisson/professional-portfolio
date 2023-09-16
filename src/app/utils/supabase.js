
import { createClient } from '@supabase/supabase-js'
import { env } from 'process'

const url = env.SUPABASE_URL
const key = env.SUPABASE_KEY

// Create a single supabase client for interacting with your database
export const supabase= createClient("https://nkzirimhwoydzdjvjzjd.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5remlyaW1od295ZHpkanZqempkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ3ODkwNTgsImV4cCI6MjAxMDM2NTA1OH0.tqBP-3FbF_9EeXX9m5cYxq3ntwjHoMHRBmegOVKoEH4")