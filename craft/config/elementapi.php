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
        'api/cities.json' => function() {
          HeaderHelper::setHeader([
              'Access-Control-Allow-Origin' => '*'
          ]);
            return [
                'elementType' => 'Entry',
                'criteria' => ['section' => 'jobs'],
                'first' => true,
                'transformer' => function(EntryModel $entry) {
                  return [
                    'locations' => [
                      json_encode(array(county => "Jackson", 'cities' => [
                        'Ocean Springs',
                        'St. Martin',
                        'Gulfport',
                        'Biloxi',
                        'D\'Iberville',
                        'Gulfport'
                        ]), JSON_FORCE_OBJECT),
                    ]
                  ];
                }
              ];
            },
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
                      'Technology',
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
                      'Other',
                      */

                    ],
                    'allTypes' => [
                      json_encode(array(text => "Full Time", 'value' => "fullTime"), JSON_FORCE_OBJECT),
                      json_encode(array(text => "Part Time", 'value' => "partTime"), JSON_FORCE_OBJECT),
                      json_encode(array(text => "Contractor", 'value' => "contractor"), JSON_FORCE_OBJECT),
                      json_encode(array(text => "Intern", 'value' => "intern"), JSON_FORCE_OBJECT)
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
          $orderParam = craft()->request->getQuery('orderParam');
          $order = craft()->request->getQuery('order');
          $jobType = craft()->request->getQuery('type');
          if(empty($jobType)) {
            $jobTypes = [];
          } else {
            $jobTypes = explode(',', $jobType);

          }
          $category = craft()->request->getQuery('category');
          if(empty($category)) {
            $categories = [];
          } else {
            $categories = explode(',', $category);

          }


            return [
                'elementType' => 'Entry',
                'elementsPerPage' => 2,
                'pageParam' => 'pg',
                'criteria' => [
                  'section' => 'jobs',
                  'order' => ''.$orderParam.' '.$order.'',
                  'jobType' => $jobTypes,
                  'category' => $categories,
                ],
                'transformer' => function(EntryModel $entry) {
                    return [
                        'id' => $entry->id,
                        'position' => $entry->position,
                        'description' => (string) $entry->description,
                        'salary' => $entry->salary,
                        'category' => $entry->category,
                        'dateCreated' => $entry->dateCreated,
                        'type' => $entry->jobType,
                        'uri' => $entry->uri,
                        'url' => $entry->url,
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
                'first' => true,
                'transformer' => function(EntryModel $entry) {
                    return [
                        'relatedTo' => ['position' => $position],
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
      'api/events.json' => function() {
        HeaderHelper::setHeader([
            'Access-Control-Allow-Origin' => '*'
        ]);
          return [
              'elementType' => 'Entry',
              'criteria' => ['section' => 'events'],
              'transformer' => function(EntryModel $entry) {
                  return [
                      'id' => $entry->id,
                      'title' => $entry->title,
                      'eventName' => $entry->eventName,
                      'eventDescription' => (string) $entry->eventDescription,
                      'eventLocation' => $entry->eventLocation,
                      'eventTime' => $entry->eventTime,
                      'dateCreated' => $entry->dateCreated,
                      'uri' => $entry->uri,
                      'url' => $entry->url,
                      'jsonUrl' => UrlHelper::getUrl("events/{$entry->id}.json")
                  ];
              },
          ];
      },
      'api/events/<entryId:\d+>.json' => function($entryId) {
        HeaderHelper::setHeader([
            'Access-Control-Allow-Origin' => '*'
        ]);
          return [
              'elementType' => 'Entry',
              'criteria' => ['id' => $entryId],
              'first' => true,
              'transformer' => function(EntryModel $entry) {
                  return [
                    'id' => $entry->id,
                    'title' => $entry->title,
                    'eventName' => $entry->eventName,
                    'eventDescription' => (string) $entry->eventDescription,
                    'eventLocation' => $entry->eventLocation,
                    'eventTime' => $entry->eventTime,
                    'dateCreated' => $entry->dateCreated,
                    'uri' => $entry->uri,
                    'url' => $entry->url,
                    'jsonUrl' => UrlHelper::getUrl("events/{$entry->id}.json")
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
