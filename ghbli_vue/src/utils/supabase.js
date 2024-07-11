// src/utils/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ecmnrymulagfijpvcdpv.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjbW5yeW11bGFnZmlqcHZjZHB2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg0NTQ1ODEsImV4cCI6MjAzNDAzMDU4MX0.CmqFpu6U04o6bJwsfsay9n9QK6MMfvWM_hIW2MAi7zw';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;