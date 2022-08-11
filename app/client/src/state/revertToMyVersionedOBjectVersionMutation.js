import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const mutation = gql`
mutation revertMyVersionedObjectToVersion($id:ID!, $toVersion:Int!) {
  rollbackMyVersionedObject(
    ID: $id
    ToVersion: $toVersion
  ) {
    ID
  }
}
`;

const config = {
  props: ({ mutate, ownProps: { actions } }) => {
    const revertToVersion = (id, toVersion) => mutate({
      variables: {
        id,
        toVersion,
      },
    });

    return {
      actions: {
        ...actions,
        revertToVersion,
      },
    };
  },
  options: {
    // Refetch versions after mutation is completed
    refetchQueries: ['ReadHistoryViewerMyVersionedObject']
  }
};

export { mutation, config };

export default graphql(mutation, config);
