-- Enable INSERT, UPDATE, DELETE operations for projects table
-- Since the admin panel is protected by NextAuth, we can allow anon role
-- to perform these operations. The application-level auth ensures security.

-- Allow INSERT operations
CREATE POLICY "Allow insert on projects"
  ON projects FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow UPDATE operations
CREATE POLICY "Allow update on projects"
  ON projects FOR UPDATE
  TO anon
  USING (true)
  WITH CHECK (true);

-- Allow DELETE operations
CREATE POLICY "Allow delete on projects"
  ON projects FOR DELETE
  TO anon
  USING (true);

-- Also allow SELECT for all projects (not just published) for admin operations
CREATE POLICY "Allow select all projects"
  ON projects FOR SELECT
  TO anon
  USING (true);

