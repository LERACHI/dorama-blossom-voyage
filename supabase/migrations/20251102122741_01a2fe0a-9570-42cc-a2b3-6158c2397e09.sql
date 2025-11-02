-- Remove public SELECT policy from reviews table
DROP POLICY IF EXISTS "Anyone can view reviews" ON public.reviews;

-- Create a secure view that hides user_id for public access
CREATE OR REPLACE VIEW public.reviews_public AS
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

-- Grant SELECT on the view to anonymous users
GRANT SELECT ON public.reviews_public TO anon;
GRANT SELECT ON public.reviews_public TO authenticated;

-- Keep the authenticated policies for direct table access
-- (only for users to manage their own reviews)
CREATE POLICY "Users can view all reviews with user_id"
  ON public.reviews FOR SELECT
  TO authenticated
  USING (true);

-- The INSERT, UPDATE, DELETE policies remain the same
-- They already restrict to auth.uid() = user_id