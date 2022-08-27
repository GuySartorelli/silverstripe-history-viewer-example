import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

// GraphQL query for retrieving the version history of a specific object. The results of
// the query must be set to the "versions" prop on the component that this HOC is
// applied to for binding implementation.
const query = gql`
query ReadHistoryViewerMyVersionedObject ($id: ID!, $limit: Int!, $offset: Int!) {
    readOneMyVersionedObject(
      versioning: {
        mode: ALL_VERSIONS
      },
      filter: {
        id: { eq: $id }
      }
    ) {
      id
      versions (limit: $limit, offset: $offset, sort: {
        version: DESC
      }) {
        pageInfo {
          totalCount
        }
        nodes {
          version
          author {
            firstName
            surname
          }
          publisher {
            firstName
            surname
          }
          deleted
          draft
          published
          liveVersion
          latestDraftVersion
          lastEdited
        }
      }
    }
  }
`;

const config = {
  options({ recordId, limit, page }) {
    return {
      variables: {
        limit,
        offset: ((page || 1) - 1) * limit,
        id: recordId,
        // Never read from the cache. Saved pages should stale the query, and these mutations
        // happen outside the scope of apollo. This view is loaded asynchronously anyway,
        // so caching doesn't make any sense until we're full React/GraphQL.
        fetchPolicy: 'network-only',
      }
    };
  },
  props({
    data: {
      error,
      refetch,
      readOneMyVersionedObject,
      loading: networkLoading,
    },
    ownProps: {
      actions = {
        versions: {}
      },
      limit,
      recordId,
    },
  }) {
    const versions = readOneMyVersionedObject || null;

    const errors = error && error.graphQLErrors &&
      error.graphQLErrors.map((graphQLError) => graphQLError.message);

    return {
      loading: networkLoading || !versions,
      versions,
      graphQLErrors: errors,
      actions: {
        ...actions,
        versions: {
          ...versions,
          goToPage(page) {
            refetch({
              offset: ((page || 1) - 1) * limit,
              limit,
              id: recordId,
            });
          }
        },
      },
    };
  },
};

export { query, config };

export default graphql(query, config);
