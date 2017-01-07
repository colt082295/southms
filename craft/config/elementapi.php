<?php
namespace Craft;

return [
    'endpoints' => [
        'api/filter' => [
          'elementType' => 'Entry',
            'criteria' => ['section' => 'filter'],
            'transformer' => function(EntryModel $entry) {
                return [
                    'title' => $entry->title,
                    'body' => (string) $entry->body,
                    'url' => $entry->url,
                    'jsonUrl' => UrlHelper::getUrl("filter/{$entry->slug}.json"),
                ];
            },
        ]
    ]
];
