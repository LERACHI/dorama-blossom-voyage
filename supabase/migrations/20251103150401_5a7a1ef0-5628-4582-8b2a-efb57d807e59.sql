-- Add length constraint to review comments
ALTER TABLE reviews ADD CONSTRAINT comment_max_length CHECK (char_length(comment) <= 1000 OR comment IS NULL);