// supabase-client.js
// This file connects the Retropia frontend to our Supabase backend.

const SUPABASE_URL = "https://cwawfuwxdwhygvhesffv.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN3YXdmdXd4ZHdoeWd2aGVzZmZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc0MDEyNDgsImV4cCI6MjEwMjk3NzI0OH0.mV8Bng6wvP24APR0u5fgEh88nIS_J4YBkhKChQRIqGM";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
