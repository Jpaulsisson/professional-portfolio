import { createClient } from '@supabase/supabase-js'

const url = process.env.SUPABASE_URL
const key = process.env.SUPABASE_KEY

// Create a single supabase client for interacting with your database
export const supabase= createClient(url, key);

export const authStateChangeListener = () => {
const response = supabase.auth.onAuthStateChange((event, session) => {
  
});
return response;
}
