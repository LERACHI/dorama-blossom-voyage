-- Fix Security Definer View issue
-- Change reviews_public view to use SECURITY INVOKER instead of SECURITY DEFINER
-- This ensures the view respects RLS policies of the querying user
ALTER VIEW public.reviews_public SET (security_invoker = true);

-- Drop the public policy on reviews table if it exists
-- Public access should only be through the reviews_public view
DROP POLICY IF EXISTS "Public can view reviews for public display" ON public.reviews;