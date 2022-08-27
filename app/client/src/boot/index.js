/* global window */
// eslint-disable-next-line import/no-extraneous-dependencies
import Injector from 'lib/Injector';

import readOneMyVersionedObjectQuery from 'state/readOneMyVersionedObjectQuery';
import rollbackMyVersionedObjectMutation from 'state/rollbackMyVersionedObjectMutation';

window.document.addEventListener('DOMContentLoaded', () => {
  // Register GraphQL operations with Injector as transformations
  Injector.transform(
    'myversionedobject-history',
    (updater) => {
      // Add CMS page history GraphQL query to the HistoryViewer
      updater.component(
        'HistoryViewer.Form_ItemEditForm',
        readOneMyVersionedObjectQuery,
        'MyVersionedObjectHistoryViewer' // SHOULD THIS SAY ELEMENT???
      );
    }
  );

  Injector.transform(
    'myversionedobject-history-revert',
    (updater) => {
      // Add CMS page revert GraphQL mutation to the HistoryViewerToolbar
      updater.component(
        // NOTE: The "App_VersionedObject" portion here is taken from table_name
        // not sure why it uses that, but it does.
        'HistoryViewerToolbar.VersionedAdmin.HistoryViewer.App_VersionedObject.HistoryViewerVersionDetail',
        rollbackMyVersionedObjectMutation,
        'MyVersionedObjectRevertMutation'
      );
    }
  );
});
