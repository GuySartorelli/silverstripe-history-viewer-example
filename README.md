# Example for using the history viewer with GraphQL v4

Based heavily off the [Using the history viewer](https://docs.silverstripe.org/en/4/developer_guides/model/versioning/#using-the-history-viewer) docs, this shows how to use the history viewer with a `DataObject` when using GraphQL 4. This project will likely be the basis for updating that doc.

## What this does
This is just an example of how to use the history viewer with an arbitary `DataObject` with GraphQL 4. If you run `composer install`, run a `dev/build`, and then go to `/admin/my-model-admin` you should be able to create a new object, which once created will have a history tab that works like the history tab on pages.

## What's different from the documented method
- `readOneMyVersionedObjectQuery.js` uses the new GraphQL 4 syntax
- The actual GraphQL schema is set up in the GraphQL 4 way (see `app/_config/graphql.yml` and `app/_graphql`)
- This example uses namespaces where the documentation doesn't
- Some of the file locations are slightly different, particularly in the client dir, but that shouldn't matter.

## TODO
- Update mutation to use the new graphql 4 format
- Add sorting of versions (current default seems to be most recent version last which is the opposite of page history)
