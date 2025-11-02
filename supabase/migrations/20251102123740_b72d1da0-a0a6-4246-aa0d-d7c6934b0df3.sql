-- Desabilitar RLS na view reviews_public
-- As políticas de segurança são aplicadas na tabela base 'reviews'
ALTER VIEW public.reviews_public SET (security_invoker = false);

-- Garantir que usuários anônimos e autenticados possam ver reviews públicos
-- através da tabela base (sem expor user_id)
CREATE POLICY "Public can view reviews for public display"
ON public.reviews
FOR SELECT
TO anon, authenticated
USING (true);