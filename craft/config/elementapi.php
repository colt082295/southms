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
        'api/locations.json' => function() {
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
                        ])),
                        json_encode(array(county => "Another", 'cities' => [
                          'Ocean Springs',
                          'St. Martin',
                          'Gulfport',
                          'Biloxi',
                          'D\'Iberville',
                          'Gulfport'
                          ])),
                    ]
                  ];
                }
              ];
            },
            'api/city/<entryId:\d+>.json' => function($entryId) {
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
                            'city' => $entry->jobCity,
                            'salary' => $entry->salary,
                            'dateCreated' => $entry->dateCreated,
                            'uri' => $entry->uri,
                            'url' => $entry->url,
                            'body' => $entry->body,
                        ];
                    },
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
                      json_encode(array(text => "Finance", 'value' => "accountingFinance"), JSON_FORCE_OBJECT),
                      json_encode(array(text => "Administrative", 'value' => "administrative"), JSON_FORCE_OBJECT),
                      json_encode(array(text => "Analyst", 'value' => "analyst"), JSON_FORCE_OBJECT),
                      json_encode(array(text => "Art", 'value' => "art"), JSON_FORCE_OBJECT),
                      json_encode(array(text => "Technology", 'value' => "technology"), JSON_FORCE_OBJECT)
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
                      json_encode(array(text => "Ocean Springs", 'value' => "oceanSprings"), JSON_FORCE_OBJECT),
                      json_encode(array(text => "St. Martin", 'value' => "stMartin"), JSON_FORCE_OBJECT),
                      json_encode(array(text => "Gulfport", 'value' => "gulfport"), JSON_FORCE_OBJECT),
                      json_encode(array(text => "Biloxi", 'value' => "biloxi"), JSON_FORCE_OBJECT),
                      json_encode(array(text => "Hattiesburg", 'value' => "hattiesburg"), JSON_FORCE_OBJECT),
                      json_encode(array(text => "D'Iberville", 'value' => "d'iberville"), JSON_FORCE_OBJECT)
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
          $category = craft()->request->getQuery('category');
          $city = craft()->request->getQuery('city');
          $term = craft()->request->getQuery('term');

          if(empty($jobType)) {
            $jobTypes = [];
          } else {
            $jobTypes = explode(',', $jobType);

          }

          if(empty($category)) {
            $categories = [];
          } else {
            $categories = explode(',', $category);

          }

          if(empty($city)) {
            $cities = [];
          } else {
            $cities = explode(',', $city);

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
                  'jobCity' => $cities,
                  'search' => ($term) ? 'position:*'.$term.'*' : ''
                ],
                'transformer' => function(EntryModel $entry) {
                    return [
                        'id' => $entry->id,
                        'position' => $entry->position,
                        'description' => (string) $entry->description,
                        'salary' => $entry->salary,
                        'category' => $entry->category,
                        'city' => $entry->jobCity,
                        'address' => $entry->jobAddress,
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
                        'city' => $entry->jobCity,
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
        $orderParam = craft()->request->getQuery('orderParam');
        $order = craft()->request->getQuery('order');
        $category = craft()->request->getQuery('category');
        $city = craft()->request->getQuery('city');
        $term = craft()->request->getQuery('term');

        if(empty($category)) {
          $categories = [];
        } else {
          $categories = explode(',', $category);

        }

        if(empty($city)) {
          $cities = [];
        } else {
          $cities = explode(',', $city);

        }

        HeaderHelper::setHeader([
            'Access-Control-Allow-Origin' => '*'
        ]);
          return [
              'elementType' => 'Entry',
              'elementsPerPage' => 4,
              'pageParam' => 'pg',
              'criteria' => [
                'section' => 'events',
                'order' => ''.$orderParam.' '.$order.'',
                //'category' => $categories,
                'eventCity' => $cities,
                'search' => ($term) ? 'eventName:*'.$term.'*' : ''
              ],
              'transformer' => function(EntryModel $entry) {
                  return [
                      'id' => $entry->id,
                      'title' => $entry->title,
                      'eventName' => $entry->eventName,
                      'eventDescription' => (string) $entry->eventDescription,
                      'eventAddress' => $entry->eventAddress,
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
                    'eventCity' => $entry->eventCity,
                    'eventAddress' => $entry->eventAddress,
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
          HeaderHelper::setHeader([
              'Access-Control-Allow-Origin' => '*'
          ]);

          $term = craft()->request->getQuery('term');
          $section = craft()->request->getQuery('section');

            return [
                'elementType' => 'Entry',
                'criteria' => [
                    'section' => $section,
                    'search' => $term
                ],
                'transformer' => function(EntryModel $entry) {
                    return [
                      'id' => $entry->id,
                      'position' => $entry->position,
                      'description' => (string) $entry->description,
                      'salary' => $entry->salary,
                      'category' => $entry->category,
                      'city' => $entry->jobCity,
                      'address' => $entry->jobAddress,
                      'dateCreated' => $entry->dateCreated,
                      'type' => $entry->jobType,
                      'uri' => $entry->uri,
                      'url' => $entry->url,
                      'jsonUrl' => UrlHelper::getUrl("{$section}/{$entry->id}.json")
                    ];
                },
            ];
        },
    ]
];
