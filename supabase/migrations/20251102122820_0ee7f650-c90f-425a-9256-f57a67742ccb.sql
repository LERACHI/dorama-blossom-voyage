-- Recreate the view with SECURITY INVOKER to use querying user's permissions
CREATE OR REPLACE VIEW public.reviews_public 
WITH (security_invoker = true) AS
SELECT 
  r.id,
  r.drama_id,
  r.rating,
  r.comment,
  r.created_at,
  r.updated_at,
  p.display_name as author_name
FROM public.reviews r
LEFT JOIN public.profiles p ON r.user_id = p.id;