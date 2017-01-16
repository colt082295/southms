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
        'api/jobs.json' => function() {
          HeaderHelper::setHeader([
              'Access-Control-Allow-Origin' => '*'
          ]);
            return [
                'elementType' => 'Entry',
                'criteria' => ['section' => 'jobs'],
                'transformer' => function(EntryModel $entry) {
                    return [
                        'id' => $entry->id,
                        'position' => $entry->position,
                        'description' => (string) $entry->description,
                        'salary' => $entry->salary,
                        'uri' => $entry->uri,
                        'url' => $entry->url,
                        'allCategories' => [
                          'Technology',
                          'Real Estate',
                          'Customer Service'
                        ],
                        'allJobTypes' => [
                          'Full Time',
                          'Part Time',
                          'Contract',
                          'Intern'
                        ],
                        'jsonUrl' => UrlHelper::getUrl("jobs/{$entry->id}.json")
                    ];
                },
            ];
        },
        'api/jobs/<entryId:\d+>.json' => function($entryId) {
          HeaderHelper::setHeader([
              'Access-Control-Allow-Origin' => '*'
          ]);
            return [
                'elementType' => 'Entry',
                'criteria' => ['id' => $entryId],
                'elementsPerPage' => 15,
                'first' => true,
                'transformer' => function(EntryModel $entry) {
                    return [
                        'id' => $entry->id,
                        'position' => $entry->position,
                        'description' => (string) $entry->description,
                        'type' => $entry->jobType,
                        'category' => $entry->category,
                        'salary' => $entry->salary,
                        'uri' => $entry->uri,
                        'url' => $entry->url,
                        'body' => $entry->body,
                    ];
                },
            ];
        },
        'api/events.json' => [
            'elementType' => 'Entry',
            'criteria' => ['section' => 'events'],
            'transformer' => function(EntryModel $entry) {
                return [
                    'id' => $entry->id,
                    'title' => $entry->title,
                    'eventName' => $entry->eventName,
                    'uri' => $entry->uri,
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
                        'id' => $entry->id,
                        'title' => $entry->title,
                        'eventName' => $entry->eventName,
                        'uri' => $entry->uri,
                        'url' => $entry->url,
                        'body' => $entry->body,
                    ];
                },
            ];
        },
        'api/search.json' => function() {
            return [
                'elementType' => 'Entry',
                'criteria' => [
                    'search' => (craft()->request->getParam('search')) ? craft()->request->getParam('search') : ''
                ],
                'first' => true,
                'transformer' => function(EntryModel $entry) {
                    return [
                        'title' => $entry->title,
                        'url' => $entry->url,
                    ];
                },
            ];
        },
    ]
];
