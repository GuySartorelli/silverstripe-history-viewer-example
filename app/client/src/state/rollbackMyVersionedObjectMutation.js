import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const mutation = gql`
mutation rollbackMyVersionedObject($id:ID!, $toVersion:Int!) {
    rollbackMyVersionedObject(
    id: $id
    toVersion: $toVersion
  ) {
    id
  }
}
`;

const config = {
  props: ({ mutate, ownProps: { actions } }) => {
    const rollbackMyVersionedObject = (id, toVersion) => mutate({
      variables: {
        id,
        toVersion,
      },
    });

    return {
      actions: {
        ...actions,
        rollbackMyVersionedObject,
        // For BC (not strictly necessary, perhaps):
        revertToVersion: rollbackMyVersionedObject,
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
