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
        'api/job-info.json' => function() {
          HeaderHelper::setHeader([
              'Access-Control-Allow-Origin' => '*'
          ]);
            return [
                'elementType' => 'Entry',
                'criteria' => ['section' => 'jobs'],
                'first' => true,
                'transformer' => function(EntryModel $entry) {
                  return [
                    'allCategories' => [
                      'Accounting / Finance',
                      'Administrative',
                      'Analyst',
                      'Architecture / Drafting',
                      'Art / Design / Entertainment',
                      'Banking / Loan / Insurance',
                      /*
                      'Beauty / Wellness',
                      'Business Development / Consulting',
                      'Education',
                      'Engineering (Non-software)',
                      'Facilities / General Labor',
                      'Hospitality',
                      'Human Resources',
                      'Installation / Maintenance / Repair',
                      'Legal',
                      'Manufacturing / Production / Construction',
                      'Marketing / Advertising / PR',
                      'Medical / Healthcare',
                      'Non-Profit / Volunteering',
                      'Product / Project Management',
                      'Real Estate',
                      'Restaurant / Food Services',
                      'Retail',
                      'Sales / Customer Care',
                      'Science / Research',
                      'Security / Law Enforcement',
                      'Senior Management',
                      'Skilled Trade',
                      'Software Development / IT',
                      'Sports / Fitness',
                      'Travel / Transportation',
                      'Writing / Editing / Publishing',
                      'Other'
                      */
                    ],
                    'allTypes' => [
                      'Full Time',
                      'Part Time',
                      'Contractor',
                      'Intern'
                    ],
                    'allLocations' => [
                      'Ocean Springs',
                      'St. Martin',
                      'Gulfport',
                      'Biloxi',
                      'Hattiesburg',
                      'D\'Iberville',
                    ],


                  ];
                }
              ];
            },
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
                        'category' => $entry->category,
                        'dateCreated' => $entry->dateCreated,
                        'uri' => $entry->uri,
                        'url' => $entry->url,
                        'allCategories' => [
                          'Accounting / Finance',
                          'Administrative',
                          'Analyst',
                          'Architecture / Drafting',
                          'Art / Design / Entertainment',
                          'Banking / Loan / Insurance',
                          'Beauty / Wellness',
                          'Business Development / Consulting',
                          'Education',
                          'Engineering (Non-software)',
                          'Facilities / General Labor',
                          'Hospitality',
                          'Human Resources',
                          'Installation / Maintenance / Repair',
                          'Legal',
                          'Manufacturing / Production / Construction',
                          'Marketing / Advertising / PR',
                          'Medical / Healthcare',
                          'Non-Profit / Volunteering',
                          'Product / Project Management',
                          'Real Estate',
                          'Restaurant / Food Services',
                          'Retail',
                          'Sales / Customer Care',
                          'Science / Research',
                          'Security / Law Enforcement',
                          'Senior Management',
                          'Skilled Trade',
                          'Software Development / IT',
                          'Sports / Fitness',
                          'Travel / Transportation',
                          'Writing / Editing / Publishing',
                          'Other'
                        ],
                        'allJobTypes' => [
                          'Full Time',
                          'Part Time',
                          'Contract',
                          'Intern'
                        ],
                        'allLocations' => [
                          'Ocean Springs',
                          'St. Martin',
                          'Hattiesburg',
                          'D\'Iberville'
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
                        'dateCreated' => $entry->dateCreated,
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
