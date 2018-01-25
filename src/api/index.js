import { postJSON, getJSON } from './settings';

const getActivityHistory = () => {
  return postJSON(`app/ui/activityhistory/1/search?_mock_=datasize&dataSize=100`,
    {
      'Fields': [
        'string'
      ],
      'Criterion': [
        {
          'Field': 'String',
          'Operator': 'string',
          'Value': {}
        }
      ],
      'Sort': [
        {
          'Field': 'String',
          'Order': 'desc'
        }
      ],
      'PageSize': 10
    })
  }

  const getActivityFields = () => {
    return getJSON(`/app/ui/activityhistory/1/activityfield`);
  }

  const getActivities = () => {
    return getJSON(`/app/ui/activityhistory/1/search/0?page=1&_mock_=datasize`);
  }

  export {
    getActivityHistory,
    getActivityFields,
    getActivities
  }