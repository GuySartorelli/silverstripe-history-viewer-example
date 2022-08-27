# Example for using the history viewer with GraphQL v4

Based heavily off the [Using the history viewer](https://docs.silverstripe.org/en/4/developer_guides/model/versioning/#using-the-history-viewer) docs, this shows how to use the history viewer with a `DataObject` when using GraphQL 4. This project will likely be the basis for updating that doc.

## What this does
This is just an example of how to use the history viewer with an arbitary `DataObject` with GraphQL 4. If you run `composer install`, run a `dev/build`, and then go to `/admin/my-model-admin` you should be able to create a new object, which once created will have a history tab that works like the history tab on pages.

## What's different from the documented method
- `readOneMyVersionedObjectQuery.js` uses the new GraphQL 4 syntax
  - It is also sorted correctly - it's effectively a copy of [the `SiteTree` equivalent](https://github.com/silverstripe/silverstripe-cms/blob/4/client/src/state/history/readOnePageQuery.js)
- `revertToMyVersionedObjectVersionMutation.js` has been replaced with `rollbackMyVersionedObjectMutation.js`
  - This too is copied from [the `SiteTree` equivalent](https://github.com/silverstripe/silverstripe-cms/blob/4/client/src/state/history/rollbackPageMutation.js)
  - The injector transform config for this has also been updated to reflect the table name defined in the php class
- The actual GraphQL schema is set up in the GraphQL 4 way (see `app/_config/graphql.yml` and `app/_graphql`)
- This example uses namespaces where the documentation doesn't
- Some of the file locations are slightly different, particularly in the client dir, but that shouldn't matter.
- Though the documentation doesn't mention it, for this to work you must do the following before running `yarn build` (to ensure webpack can grab the source code for various components e.g. the injector):
  1. If you didn't install using `--prefer-source`, you'll need to now run `composer reinstall silverstripe/admin --prefer-source`
  1. `cd vendor/silverstripe/admin`
  1. Make sure you're using node v10 (e.g. via `nvm use`)
  1. `yarn install`

## TODO
- Update the actual documentation
