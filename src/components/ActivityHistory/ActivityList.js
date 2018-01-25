import React, { Component } from 'react';
import { getActivities } from '../../api';
import { ActivityListItem } from './';
import { Icon } from 'antd';

class ActivityList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      activities: []
    }
  }
  setLoadingActivities = value => {
    return this.setState({ loading: value });
  }

  setActivities = activities => {
    return this.setState({ activities: activities });
  }

  async componentDidMount() {
    this.setLoadingActivities(true);
    try {
      const response = await getActivities();
      if (response) {
        this.setLoadingActivities(false);
        this.setActivities(response.Data);
      }
    } catch (error) {
      this.setLoadingActivities(false);
      console.log(error);
    }
  }
  render() {
    const { activities, loading } = this.state;
    const mapActivities = activities.map((activity, i) => {
      return <ActivityListItem activity={activity} key={i} />;
    })
    return (
      <div>
        {loading ? <div className='center-text loading-state'> <p>Loading Activities...</p> <Icon spin type='loading' style={{ fontSize: 50 }} /> </div> : mapActivities}
      </div>
    )
  }
}

export default ActivityList;
