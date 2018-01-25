import React from 'react';
import { Row, Col, Icon } from 'antd';
import { isEmpty } from 'lodash';

const ActivityListItem = activity => {
  const { UserDisplayName, UserProfilePictureUrl, ActivityActionName, EntityInstanceName } = activity.activity;
  console.log(activity);
  return (
    <article className='activityItem'>
      <Row>
        <Col span={6}>
          {!isEmpty(UserProfilePictureUrl) && <img src={UserProfilePictureUrl} alt={UserDisplayName} />} {UserDisplayName}
        </Col>
        <Col span={12}>
          <div className='activityAction'>
            <Icon type="check-circle" /> {ActivityActionName} {EntityInstanceName}
          </div>
        </Col>
        <Col span={6}></Col>
      </Row>
    </article>
  )
}

export default ActivityListItem;
