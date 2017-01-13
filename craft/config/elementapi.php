<?php
namespace Craft;

return [
    'endpoints' => [
        'api/filter.json' => [
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
        ],
        'api/jobs.json' => [
            'elementType' => 'Entry',
            'criteria' => ['section' => 'jobs'],
            'transformer' => function(EntryModel $entry) {
                return [
                    'title' => $entry->title,
                    'position' => $entry->position,
                    'url' => $entry->url,
                    'jsonUrl' => UrlHelper::getUrl("jobs/{$entry->id}.json")
                ];
            },
        ],
        'api/jobs/<entryId:\d+>.json' => function($entryId) {
            return [
                'elementType' => 'Entry',
                'criteria' => ['id' => $entryId],
                'elementsPerPage' => 15,
                'first' => true,
                'transformer' => function(EntryModel $entry) {
                    return [
                        'title' => $entry->title,
                        'url' => $entry->url,
                        'body' => $entry->body,
                        'position' => $entry->position,
                    ];
                },
            ];
        },
        'api/events.json' => [
            'elementType' => 'Entry',
            'criteria' => ['section' => 'events'],
            'transformer' => function(EntryModel $entry) {
                return [
                    'title' => $entry->title,
                    'eventName' => $entry->eventName,
                    'url' => $entry->url,
                    'jsonUrl' => UrlHelper::getUrl("events/{$entry->id}.json")
                ];
            },
        ],
        'api/events/<entryId:\d+>.json' => function($entryId) {
            return [
                'elementType' => 'Entry',
                'criteria' => ['id' => $entryId],
                'elementsPerPage' => 15,
                'first' => true,
                'transformer' => function(EntryModel $entry) {
                    return [
                        'title' => $entry->title,
                        'eventName' => $entry->eventName,
                        'url' => $entry->url,
                        'body' => $entry->body,
                    ];
                },
            ];
        },
    ]
];
