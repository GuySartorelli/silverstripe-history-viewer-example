<?php

namespace App;

use SilverStripe\Admin\ModelAdmin;

class MyModelAdmin extends ModelAdmin
{
    private static $url_segment = 'my-model-admin';

    private static $menu_title = 'My Model Admin';

    private static $managed_models = [
        MyVersionedObject::class,
    ];
}
