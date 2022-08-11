/* global window */
// eslint-disable-next-line import/no-extraneous-dependencies
import Injector from 'lib/Injector';

import readOneMyVersionedObjectQuery from 'state/readOneMyVersionedObjectQuery';
import revertToMyVersionedObjectVersionMutation from 'state/revertToMyVersionedOBjectVersionMutation';

window.document.addEventListener('DOMContentLoaded', () => {
  // Register GraphQL operations with Injector as transformations
  Injector.transform(
    'myversionedobject-history', (updater) => {
      updater.component(
        'HistoryViewer.Form_ItemEditForm',
        readOneMyVersionedObjectQuery, 'ElementHistoryViewer');
    }
  );

  Injector.transform(
    'myversionedobject-history-revert', (updater) => {
      updater.component(
        'HistoryViewerToolbar.VersionedAdmin.HistoryViewer.MyVersionedObject.HistoryViewerVersionDetail',
        revertToMyVersionedObjectVersionMutation,
        'MyVersionedObjectRevertMutation'
      );
    }
  );
});
