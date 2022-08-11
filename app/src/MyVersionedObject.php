<?php

namespace App;

use SilverStripe\ORM\DataObject;
use SilverStripe\Versioned\Versioned;
use SilverStripe\VersionedAdmin\Forms\HistoryViewerField;

class MyVersionedObject extends DataObject
{
    private static $table_name = 'App_VersionedObject';

    private static $db = [
        'Title' => 'Varchar',
    ];

    private static $extensions = [
        Versioned::class,
    ];

    public function getCMSFields()
    {
        $fields = parent::getCMSFields();

        if ($this->isInDB()) {
            $fields->addFieldToTab('Root.History', HistoryViewerField::create('MyObjectHistory'));
        }

        return $fields;
    }
}
