If I had more time I would address the following

# Repo Maintenance
* Add pre-commit

# Styling
* I would add some indication that results are loading while waiting for the results of fetching advocate data.
* I would add a modal to tell user if there was an error encountered with searching the API for advocates rather
  than console.logging.
* I would try to figure out Solace colors to use for the Table and Form.
* The Search Form would be on the right side of the page.
* The table page would be responsive and scrollable at smaller widths. 

# API
* I would update `fetchAdvocates` to take in multiple parameters to allow for filtering by specific fields.
  Then I would have updated SearchForm to have multiple input fields. 
  For example, years of experience would be one field to filter by, but it could have a min and max value.
  Specialties has a set number of values, so this would be a Select field. Same with Degree. The text search
  could then be used to search over the remainder of the fields.

# DB
* I would also consider whether using a data store like ElasticSearch would be a better alternative
  to search text in Postgres.
* If I kept just the `searchTerm` field, rather than filtering over specific fields, 
  I'd update the `route.ts` to search for the searchTerm within the `jsonb` field `specialities`.

