const SUPABASE_URL = 'https://sgdyobovaewkziqvwczv.supabase.co';

const SUPABASE_ANON_KEY = 'sb_publishable_KkFfA6zPkz5urUoBMV_aVA_lHpkUnNz';

const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);